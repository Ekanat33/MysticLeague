const urlParams = new URLSearchParams(window.location.search);
const roomName = urlParams.get('roomName');


let roompass, roomDif, firstplayer;

const gameRef = firebase.database().ref("Game");

gameRef.orderByChild("RoomName").equalTo(roomName).once("value", function(snapshot) {
    // Loop through each child node that matches the query
    snapshot.forEach(function(childSnapshot) {
        // Retrieve the data for each child
        const roomData = childSnapshot.val();

         roompass = roomData.RoomPassword;
         roomDif = roomData.difficulty;
         

        console.log("Room Name:", roomData.RoomName);
        console.log("Room Pass:",  roompass);
        console.log("Dificulty:", roomDif);
       

        updateUI(roomName, roompass, roomDif);
    });
});

function updateUI(roomName, roompass, roomDif) {

    roompass = roompass;
    roomDif = roomDif;
  

    const roomattr = document.querySelector('#Roomattr');
roomattr.innerHTML = "Room Name: " + roomName + "<br> Room Pass: " +  roompass + "<br> Dificulty: " + roomDif;
}

