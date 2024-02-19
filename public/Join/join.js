const gameRef = firebase.database().ref("Game");

gameRef.on('value', (snapshot) => {
  ReadRoom(snapshot);
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

function ReadRoom(snapshot) {
  document.getElementById("main").innerHTML = '';
  snapshot.forEach((data) => {
    const roomInfo = data.val();
    
    Object.keys(roomInfo).forEach((key) => {
      switch (key) {
        case "RoomName":
          console.log('roomname :', roomInfo[key]);
          const newDiv = `
            <div class="roomLabel mb-4" data-roomname="${roomInfo[key]}" data-roompassword="${roomInfo.RoomPassword}">
              ${roomInfo[key]} (${roomInfo.difficulty})
            </div>
          `;
          const newElement = document.createRange().createContextualFragment(newDiv);
          document.getElementById("main").appendChild(newElement);


          
          break;
        case "RoomPassword":
          console.log('roompass :', roomInfo[key]);
          break;
      }
    });
  });
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('roomLabel')) {
    // If the clicked element has the 'roomLabel' class
    link(event);
  }
});

function link(event) {
  // Access the RoomPassword value from the dataset
  const roomPassword = event.target.dataset.roompassword;
  const roomName = event.target.dataset.roomname;
  // Show a prompt to enter the room password
  const enteredPassword = window.prompt(`Enter the password for the room "${roomPassword}":`);

  // Check if the entered password matches the roomPassword
  if (enteredPassword === roomPassword) {
    // Passwords match, proceed with joining the room or other actions
    // window.location.href = "../Game/game.html";
    window.location.href = `../Game/game.html?roomName=${roomName}`;
  } else {
    // Passwords do not match, handle accordingly (e.g., show an error message)
    alert('in correct password')
  }
}


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("User :", user);
  } else {
    console.log('unavailable');
  }
});
