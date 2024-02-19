const gameRef = firebase.database().ref("Game");

const createRoombtn = document.querySelector('#createRoombtn');

createRoombtn.addEventListener("click", createRoom);


function createRoom(event){
    console.log('hahahah')
    const currentUser = firebase.auth().currentUser;
    if(currentUser){
        const RoomForm = document.getElementById(`inputRoomname`);
        const RoomPass = document.getElementById('inputRoomPassword')
        const difficultyElement = document.querySelector('input[name="flexRadioDefault"]:checked');
        const difficulty = difficultyElement.value ;
        if(RoomForm.value != ""){
            // Add Player into database
            let tmpRoomName = `RoomName`;
            let tmpRoomPassword = `RoomPassword`
           
            let tmpDif = `difficulty`
            gameRef.child(RoomForm.value).update({
                [tmpRoomName]: RoomForm.value,
                [tmpRoomPassword]: RoomPass.value,
                
                [tmpDif]: difficulty
            });
            console.log(currentUser.email + " Room added.");
        }
    }
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User :", user);
        // getList(user);
    }
    else {
        console.log('unavailable')
    }

});
