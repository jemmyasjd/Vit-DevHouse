from flask import Flask, jsonify, request, send_file  # Import 'request' to access incoming data
from flask_socketio import SocketIO, emit
import base64
from realtime_recognition import RealtimeRecognition
import cv2
import numpy as np
from googletrans import Translator
from gtts import gTTS
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")  # Allow cross-origin requests
realtime_recognition = RealtimeRecognition()

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('imageFrame')
def handle_frame(data):
    # Extract base64-encoded image data from the received data
    image_data_base64 = data['image']

   # Check if the image is valid
    if image_data_base64 is not None:
        # Process the image using sign detection code
        result = realtime_recognition.run(image_data_base64)
        print("result")

        # Emit the sign detection result back to the frontend
        emit('signResult', {'sign': result})
    else:
        print("Invalid image received")

@app.route('/lan', methods=['POST'])
@cross_origin()  # Apply CORS to this route
def translate_sentence():
    # Receive the sentence and language from the frontend
    data = request.json
    sentence = data.get('sentence')
    source_language = data.get('lan')
    target_language = data.get('lan2')
    
    # Translate the sentence
    translator = Translator()
    translation = translator.translate(sentence, src=source_language, dest=target_language)
    print(translation.text)
    
    # Return the translated sentence
    return jsonify({'translation': translation.text})

@app.route('/tts', methods=['POST'])
@cross_origin()  # Apply CORS to this route
def text_to_speech():
    data = request.json
    sentence = data.get('sentence')
    target_language = data.get('song')
    print(sentence, target_language)

    # Translate the sentence
    translator = Translator()
    translation = translator.translate(sentence, dest=target_language)
    translated_text = translation.text

    # Generate TTS audio
    tts = gTTS(text=translated_text, lang=target_language)
    tts.save('output.mp3')

    # Send the audio file back to the frontend
    return send_file('output.mp3', as_attachment=True)

if __name__ == "__main__":
    socketio.run(app, host='0.0.0.0', debug=True)


