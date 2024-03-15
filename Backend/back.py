from flask import Flask, jsonify, request  # Import 'request' to access incoming data

from flask_cors import CORS

import numpy as np

app = Flask(__name__)
CORS(app)


@app.route('/api', methods=['GET'])
def get_api():
    # Process image using sign detection code
    result = {
        "sign": "hello"
    }
    return jsonify(result)

@app.route('/api2', methods=['POST'])
def get_api2():
    # Receive image data from frontend
    data = request.json  # Access JSON data from the request
    image_data = data['image']  # Extract image data from JSON
    print(image_data)

    # Now you can process the image data as needed
    # For example, you can decode the base64 string into a numpy array
    # nparr = np.fromstring(image_data, np.uint8)
    # image_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    # Process image using sign detection code
    # result = realtime_recognition.process_image(image_np)

    # For now, let's just return a dummy response
    result = {
        "sign": "pagal himu"  # Dummy response
    }
    return jsonify(result)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
