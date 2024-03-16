# # import pickle

# # import cv2
# # import mediapipe as mp
# # import numpy as np

# # model_dict = pickle.load(open('./model.p', 'rb'))
# # model = model_dict['model']

# # cap = cv2.VideoCapture(0)

# # mp_hands = mp.solutions.hands
# # mp_drawing = mp.solutions.drawing_utils
# # mp_drawing_styles = mp.solutions.drawing_styles

# # hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

# # labels_dict = {0: 'A', 1: 'B', 2: 'C',3: 'D', 4: 'E', 5: 'F',6:'G',7:'H',8:'I',9:'J',10:'K',11:'L',12:'M',13:'N',14:'O',15:'P',16:'Q',17:'R',18:'S',19:'T',20:'U',21:'V',22:'W',23:'X',24:'Y',25:'Z',26:'1',27:'2',28:'3',29:'4',30:'5',31:'6',32:'7',33:'8',34:'9',35:'0'}
# # while True:

# #     data_aux = []
# #     x_ = []
# #     y_ = []

# #     ret, frame = cap.read()

# #     H, W, _ = frame.shape

# #     frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

# #     results = hands.process(frame_rgb)
# #     if results.multi_hand_landmarks:
# #         for hand_landmarks in results.multi_hand_landmarks:
# #             mp_drawing.draw_landmarks(
# #                 frame,  # image to draw
# #                 hand_landmarks,  # model output
# #                 mp_hands.HAND_CONNECTIONS,  # hand connections
# #                 mp_drawing_styles.get_default_hand_landmarks_style(),
# #                 mp_drawing_styles.get_default_hand_connections_style())

# #         for hand_landmarks in results.multi_hand_landmarks:
# #             for i in range(len(hand_landmarks.landmark)):
# #                 x = hand_landmarks.landmark[i].x
# #                 y = hand_landmarks.landmark[i].y

# #                 x_.append(x)
# #                 y_.append(y)

# #             for i in range(len(hand_landmarks.landmark)):
# #                 x = hand_landmarks.landmark[i].x
# #                 y = hand_landmarks.landmark[i].y
# #                 data_aux.append(x - min(x_))
# #                 data_aux.append(y - min(y_))

# #         x1 = int(min(x_) * W) - 10
# #         y1 = int(min(y_) * H) - 10

# #         x2 = int(max(x_) * W) - 10
# #         y2 = int(max(y_) * H) - 10

# #         prediction = model.predict([np.asarray(data_aux)])

# #         predicted_character = labels_dict[int(prediction[0])]

# #         cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 0), 4)
# #         cv2.putText(frame, predicted_character, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 0, 0), 3,
# #                     cv2.LINE_AA)

# #     cv2.imshow('frame', frame)
# #     cv2.waitKey(1)


# # cap.release()
# # cv2.destroyAllWindows()
























# import pickle

# import cv2
# import mediapipe as mp
# import numpy as np

# model_dict = pickle.load(open('./model.p', 'rb'))
# model = model_dict['model']
# maxlen = model_dict['maxlen'] 

# cap = cv2.VideoCapture(0)

# mp_hands = mp.solutions.hands
# mp_drawing = mp.solutions.drawing_utils
# mp_drawing_styles = mp.solutions.drawing_styles

# hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

# labels_dict = {0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H', 8: 'I', 9: 'J', 10: 'K', 11: 'L',
#                12: 'M', 13: 'N', 14: 'O', 15: 'P', 16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U', 21: 'V', 22: 'W',
#                23: 'X', 24: 'Y', 25: 'Z', 26: '1', 27: '2', 28: '3', 29: '4', 30: '5', 31: '6', 32: '7', 33: '8',
#                34: '9', 35: '0'}
# while True:

#     data_aux = []
#     x_ = []
#     y_ = []

#     ret, frame = cap.read()

#     H, W, _ = frame.shape

#     frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

#     results = hands.process(frame_rgb)

#     if results.multi_hand_landmarks:
#         for hand_landmarks in results.multi_hand_landmarks:
#             mp_drawing.draw_landmarks(
#                 frame,  # image to draw
#                 hand_landmarks,  # model output
#                 mp_hands.HAND_CONNECTIONS,  # hand connections
#                 mp_drawing_styles.get_default_hand_landmarks_style(),
#                 mp_drawing_styles.get_default_hand_connections_style())

#         for hand_landmarks in results.multi_hand_landmarks:
#             for i in range(len(hand_landmarks.landmark)):
#                 x = hand_landmarks.landmark[i].x
#                 y = hand_landmarks.landmark[i].y

#                 x_.append(x)
#                 y_.append(y)

#             for i in range(len(hand_landmarks.landmark)):
#                 x = hand_landmarks.landmark[i].x
#                 y = hand_landmarks.landmark[i].y
#                 data_aux.append(x - min(x_))
#                 data_aux.append(y - min(y_))

#         x1 = int(min(x_) * W) - 10
#         y1 = int(min(y_) * H) - 10

#         x2 = int(max(x_) * W) - 10
#         y2 = int(max(y_) * H) - 10

#         prediction = model.predict([np.asarray(data_aux)])

#         predicted_character = labels_dict[int(prediction[0])]

#         cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 0), 4)
#         cv2.putText(frame, predicted_character, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 0, 0), 3,
#                     cv2.LINE_AA)

#     cv2.imshow('frame', frame)
#     #cv2.waitKey(1)
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break


# cap.release()
# cv2.destroyAllWindows()





































# import pickle
# import cv2
# import mediapipe as mp
# import numpy as np
# from keras.preprocessing.sequence import pad_sequences

# model_dict = pickle.load(open('./model.p', 'rb'))
# model = model_dict['model']
# maxlen = model_dict['maxlen']  # Retrieve the maximum length used during training

# cap = cv2.VideoCapture(0)

# mp_hands = mp.solutions.hands
# mp_drawing = mp.solutions.drawing_utils
# mp_drawing_styles = mp.solutions.drawing_styles

# hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

# labels_dict = {0: 'A', 1: 'B', 2: 'C',3: 'D', 4: 'E', 5: 'F',6:'G',7:'H',8:'I',9:'J',10:'K',11:'L',12:'M',13:'N',14:'O',15:'P',16:'Q',17:'R',18:'S',19:'T',20:'U',21:'V',22:'W',23:'X',24:'Y',25:'Z',26:'1',27:'2',28:'3',29:'4',30:'5',31:'6',32:'7',33:'8',34:'9',35:'0'}

# while True:
#     data_aux = []
#     x_ = []
#     y_ = []

#     ret, frame = cap.read()

#     H, W, _ = frame.shape

#     frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

#     results = hands.process(frame_rgb)
#     if results.multi_hand_landmarks:
#         for hand_landmarks in results.multi_hand_landmarks:
#             mp_drawing.draw_landmarks(
#                 frame,  # image to draw
#                 hand_landmarks,  # model output
#                 mp_hands.HAND_CONNECTIONS,  # hand connections
#                 mp_drawing_styles.get_default_hand_landmarks_style(),
#                 mp_drawing_styles.get_default_hand_connections_style())

#         for hand_landmarks in results.multi_hand_landmarks:
#             for i in range(len(hand_landmarks.landmark)):
#                 x = hand_landmarks.landmark[i].x
#                 y = hand_landmarks.landmark[i].y

#                 x_.append(x)
#                 y_.append(y)

#             for i in range(len(hand_landmarks.landmark)):
#                 x = hand_landmarks.landmark[i].x
#                 y = hand_landmarks.landmark[i].y
#                 data_aux.append(x - min(x_))
#                 data_aux.append(y - min(y_))

#         x1 = int(min(x_) * W) - 10
#         y1 = int(min(y_) * H) - 10

#         x2 = int(max(x_) * W) - 10
#         y2 = int(max(y_) * H) - 10

#         # Make sure data_aux is a list of lists
#         data_aux_padded = pad_sequences([data_aux], maxlen=maxlen, padding='post', truncating='post', dtype='float32')
#         # Flatten the 3D sequence data to 2D
#         data_aux_flattened = data_aux_padded.reshape(data_aux_padded.shape[0], -1)

#         prediction = model.predict(data_aux_flattened)

#         predicted_character = labels_dict[int(prediction[0])]

#         cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 0), 4)
#         cv2.putText(frame, predicted_character, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 0, 0), 3,
#                     cv2.LINE_AA)

#     cv2.imshow('frame', frame)
#     cv2.waitKey(1)

# cap.release()
# cv2.destroyAllWindows()






import cv2
import mediapipe as mp
import numpy as np
from keras.preprocessing.sequence import pad_sequences
import pickle

class SignLanguageRecognition:
    def __init__(self, model_path='./model.p'):
        self.model_dict = pickle.load(open(model_path, 'rb'))
        self.model = self.model_dict['model']
        self.maxlen = self.model_dict['maxlen']

        self.mp_hands = mp.solutions.hands
        self.mp_drawing = mp.solutions.drawing_utils
        self.mp_drawing_styles = mp.solutions.drawing_styles

        self.hands = self.mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

        self.labels_dict = {0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F', 6: 'G', 7: 'H', 8: 'I', 9: 'J', 10: 'K',
                            11: 'L', 12: 'M', 13: 'N', 14: 'O', 15: 'P', 16: 'Q', 17: 'R', 18: 'S', 19: 'T', 20: 'U',
                            21: 'V', 22: 'W', 23: 'X', 24: 'Y', 25: 'Z', 26: '1', 27: '2', 28: '3', 29: '4', 30: '5',
                            31: '6', 32: '7', 33: '8', 34: '9', 35: '0'}

    def process_frame(self, frame):
        if frame is None:
            return None, None
        print(frame)
        H, W, _ = frame.shape

        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        results = self.hands.process(frame_rgb)
        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                self.mp_drawing.draw_landmarks(
                    frame,  # image to draw
                    hand_landmarks,  # model output
                    self.mp_hands.HAND_CONNECTIONS,  # hand connections
                    self.mp_drawing_styles.get_default_hand_landmarks_style(),
                    self.mp_drawing_styles.get_default_hand_connections_style())

            data_aux = []
            x_ = []
            y_ = []

            for hand_landmarks in results.multi_hand_landmarks:
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

            x1 = int(min(x_) * W) - 10
            y1 = int(min(y_) * H) - 10

            x2 = int(max(x_) * W) - 10
            y2 = int(max(y_) * H) - 10

            data_aux_padded = pad_sequences([data_aux], maxlen=self.maxlen, padding='post', truncating='post',
                                            dtype='float32')
            data_aux_flattened = data_aux_padded.reshape(data_aux_padded.shape[0], -1)

            prediction = self.model.predict(data_aux_flattened)

            predicted_character = self.labels_dict[int(prediction[0])]

            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 0), 4)
            cv2.putText(frame, predicted_character, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 0, 0), 3,
                        cv2.LINE_AA)

            return predicted_character, frame

        return None, frame


if __name__ == "__main__":
    slr = SignLanguageRecognition()
    cap = cv2.VideoCapture(0)
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Error reading frame")
            break

        predicted_character, processed_frame = slr.process_frame(frame)
        if predicted_character:
            print(predicted_character)

        cv2.imshow('Sign Language Recognition', processed_frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()


