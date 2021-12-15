var firebaseConfig = {
  apiKey: "AIzaSyCELoab9BR3rgH9S-qgH3WRUKxoOojDu5c",
authDomain: "kwitter-5dc26.firebaseapp.com",
databaseURL: "https://kwitter-5dc26-default-rtdb.firebaseio.com",
projectId: "kwitter-5dc26",
storageBucket: "kwitter-5dc26.appspot.com",
messagingSenderId: "902120725980",
appId: "1:902120725980:web:9792ef0816ed5ebbbc4319"
};

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }

  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "lets-chat-web-app-page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "lets-chat-web-app-page.html";
}