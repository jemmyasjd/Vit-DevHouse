from flask import Flask, jsonify, request  # Import 'request' to access incoming data

from flask_cors import CORS

import numpy as np

app = Flask(__name__)
CORS(app)


@app.route('/api', methods=['GET'])
def get_api():

    result = {
        "sign": "hello"
    }
    return jsonify(result)

@app.route('/api2', methods=['POST'])
def get_api2():

    data = request.json  
    image_data = data['image']  
    print(image_data)

    result = {
        "sign": "demo" 
    }
    return jsonify(result)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
