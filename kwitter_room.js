var firebaseConfig = {
      apiKey: "AIzaSyBT4CWxKUJ5QZ_NqaF4cAjoXayBwkMDuCA",
      authDomain: "kwitter-c294a.firebaseapp.com",
      databaseURL: "https://kwitter-c294a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c294a",
      storageBucket: "kwitter-c294a.appspot.com",
      messagingSenderId: "891487358163",
      appId: "1:891487358163:web:7facfab0c7ef758516d826"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
