import firebase_admin
from pyrebase import *
from firebase_admin import credentials,firestore,storage

firebaseConfig = {
    'apiKey': "AIzaSyAYtpFAvzg5YmuXt0B6bzpRfoJxSG56KgU",
    'authDomain': "ecommerce-875da.firebaseapp.com",
    'databaseURL': "https://ecommerce-875da.firebaseio.com",
    'projectId': "ecommerce-875da",
    'storageBucket': "ecommerce-875da.appspot.com",
    'messagingSenderId': "453610914905",
    'appId': "1:453610914905:web:157828107cf3a8a4c79d48",
    'measurementId': "G-Y6WH0B6RWN"
}


cred = credentials.Certificate('fb-sdk.json')

firebase_admin.initialize_app(cred)
database = firestore.client()

firebase = pyrebase.initialize_app(firebaseConfig)
authe = firebase.auth()