import os
import pickle

import mediapipe as mp  # Import the MediaPipe library.
import cv2
#import matplotlib.pyplot as plt

# the object to detect the landmarks
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

DATA_DIR = './data'     

data = []    # list of all data points (frames with hand land
labels = []   # labels for each frame - whether a hand was detected or not
for dir_ in os.listdir(DATA_DIR):
    if '.' in dir_: continue        # skip hidden files and directories
    for img_path in os.listdir(os.path.join(DATA_DIR, dir_)):
        data_aux = []   # data from one specific image

        x_ = []
        y_ = []

        img = cv2.imread(os.path.join(DATA_DIR, dir_, img_path))
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # we need to convert the colour  format from BGR to RGB
    
        results = hands.process(img_rgb)
        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:      # this is iterating the result
                for i in range(len(hand_landmarks.landmark)):
                    x = hand_landmarks.landmark[i].x
                    y = hand_landmarks.landmark[i].y

                    x_.append(x)
                    y_.append(y)

                for i in range(len(hand_landmarks.landmark)):
                    x = hand_landmarks.landmark[i].x
                    y = hand_landmarks.landmark[i].y
                    data_aux.append(x - min(x_))
                    data_aux.append(y - min(y_))

            data.append(data_aux)
            labels.append(dir_)

f = open('data.pickle', 'wb')
pickle.dump({'data': data, 'labels': labels}, f)
f.close()
