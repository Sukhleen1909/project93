var firebaseConfig = {
  apiKey: "AIzaSyBGkAENqZWmQPqpK-Re2TJuyh3DF-BZxos",
  authDomain: "project-94-bfce4.firebaseapp.com",
  databaseURL: "https://project-94-bfce4-default-rtdb.firebaseio.com",
  projectId: "project-94-bfce4",
  storageBucket: "project-94-bfce4.appspot.com",
  messagingSenderId: "180039161020",
  appId: "1:180039161020:web:d0269916956d6e6bd2acb9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
 function addRoom() {
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose:"adding room name"
   });
   localStorage.setItem("room_name",room_name);
   window.location="index.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
       console.log("Room Name -"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>;"
       document.getElementById("output").innerHTML+=row;

      });});}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="index.html";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}