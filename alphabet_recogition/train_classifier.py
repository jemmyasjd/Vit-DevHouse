# # import pickle

# # from sklearn.ensemble import RandomForestClassifier
# # from sklearn.model_selection import train_test_split
# # from sklearn.metrics import accuracy_score
# # import numpy as np


# # data_dict = pickle.load(open('./data.pickle', 'rb'))

# # data = np.asarray(data_dict['data'])
# # labels = np.asarray(data_dict['labels'])

# # x_train, x_test, y_train, y_test = train_test_split(data, labels, test_size=0.2, shuffle=True, stratify=labels)

# # model = RandomForestClassifier()

# # model.fit(x_train, y_train)

# # y_predict = model.predict(x_test)

# # score = accuracy_score(y_predict, y_test)

# # print('{}% of samples were classified correctly !'.format(score * 100))

# # f = open('model.p', 'wb')
# # pickle.dump({'model': model}, f)
# # f.close()














# import pickle

# from sklearn.ensemble import RandomForestClassifier
# from sklearn.model_selection import train_test_split
# from sklearn.metrics import accuracy_score
# import numpy as np
# from keras.preprocessing.sequence import pad_sequences 

# data_dict = pickle.load(open('./data.pickle', 'rb'))


# maxlen = 100  # Choose an appropriate maximum length
# data_padded = pad_sequences(data_dict['data'], maxlen=maxlen, padding='post', truncating='post', dtype='float32')
# # data = np.asarray(data_dict['data'])
# # labels = np.asarray(data_dict['labels'])
# data = np.asarray(data_padded)
# labels = np.asarray(data_dict['labels'])
# x_train, x_test, y_train, y_test = train_test_split(data, labels, test_size=0.2, shuffle=True, stratify=labels)

# model = RandomForestClassifier()

# model.fit(x_train, y_train)

# y_predict = model.predict(x_test)

# score = accuracy_score(y_predict, y_test)

# print('{}% of samples were classified correctly !'.format(score * 100))

# f = open('model.p', 'wb')
# pickle.dump({'model': model}, f)
# f.close()
























import pickle
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import numpy as np
from keras.preprocessing.sequence import pad_sequences 

data_dict = pickle.load(open('./data.pickle', 'rb'))

# Assuming 'maxlen' is the maximum length of your sequences
maxlen = 100

# Pad sequences
data_padded = pad_sequences(data_dict['data'], maxlen=maxlen, padding='post', truncating='post', dtype='float32')

# Flatten the 3D sequence data to 2D
data_flattened = data_padded.reshape(data_padded.shape[0], -1)

# Assuming 'labels' are 1D array
labels = np.asarray(data_dict['labels'])

# Split the data for training and testing
x_train, x_test, y_train, y_test = train_test_split(data_flattened, labels, test_size=0.2, shuffle=True, stratify=labels)

# Create and train the RandomForestClassifier
model = RandomForestClassifier()
model.fit(x_train, y_train)

# Evaluate the model
y_predict = model.predict(x_test)
score = accuracy_score(y_predict, y_test)

print('{}% of samples were classified correctly!'.format(score * 100))

# Save the model along with other necessary information
model_info = {'model': model, 'maxlen': maxlen}
f = open('model.p', 'wb')
pickle.dump(model_info, f)
f.close()

