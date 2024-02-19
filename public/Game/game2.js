



// gameRef.on("value", (snapshot) => {
//     gameRef.orderByChild("RoomName").equalTo(roomName).once("value", function(childsnapshot) {
//     getGameInfo(childsnapshot);
//     getPlayer(childsnapshot);
//  })
// })

// const btnJoins = document.querySelectorAll(".btn-join");
// btnJoins.forEach((btnJoin) => btnJoin.addEventListener("click", joinGame));

// function joinGame(event){
//     const currentUser = firebase.auth().currentUser;
//     console.log("[Join] Current user", currentUser);
//     if(currentUser){
//         const btnJoinID = event.currentTarget.getAttribute("id");
//         const player = btnJoinID[btnJoinID.length-1];
//         const playerForm = document.getElementById(`inputPlayer-${player}`);
//         if(playerForm.value == ""){
//             // Add Player into database
//             let tmpID = `user-${player}-id`;
//             let tmpEmail = `user-${player}-email`;
//             gameRef.child(roomName).update({
//                 [tmpID]: currentUser.uid,
//                 [tmpEmail]: currentUser.email,
//                 [`user-${player}`]: currentUser.email
//             });
//             console.log(currentUser.email + " added.");
//         }
//     }
// }
// function getGameInfo(snapshot) {
//     document.getElementById("inputPlayer-x").value = "";
//     document.getElementById("inputPlayer-o").value = "";

//     snapshot.forEach((data) => {
//         const gameInfo = data.val();
//         Object.keys(gameInfo).forEach((key) => {
//             switch (key) {
//                 case "user-x-email":
//                     document.getElementById("inputPlayer-x").value = gameInfo[key];
//                     document.querySelector("#btnJoin-x").disabled = true;
//                     break;
//                 case "user-o-email":
//                     document.getElementById("inputPlayer-o").value = gameInfo[key];
//                     document.querySelector("#btnJoin-o").disabled = true;
//                     break;
//             }
//         })
//         if(gameInfo.isGameStart || document.getElementById("inputPlayer-o").value == "" || document.getElementById("inputPlayer-x").value == ""){
//             document.querySelector("#btnStartGame").disabled = true;
//             if(document.getElementById("inputPlayer-o").value != "" && document.getElementById("inputPlayer-x").value != ""){
//                 document.querySelector("#btnTerminatedGame").disabled = false;
//             }
//             if(gameInfo.isGameStart){
//                 btnCancelJoins.forEach(function(btnCancel){
//                     btnCancel.disabled = true
//                 })
//                 // for(let i = 1; i <= 3; i++){
//                 //     for(let j = 1; j <= 3;j++){
//                 //         document.querySelector(`#row-${i}-col-${j}`).addEventListener("click", addTableListener)
//                 //     }
//                 // }
//             }
//         }else if(!gameInfo.isGameStart){
//             document.querySelector("#btnStartGame").disabled = false;
//             document.querySelector("#btnTerminatedGame").disabled = true;
//             btnCancelJoins.forEach(function(btnCancel){
//                 btnCancel.disabled = false
//             })
//             // for(let i = 1; i <= 3; i++){
//             //     for(let j = 1; j <= 3;j++){
//             //         document.querySelector(`#row-${i}-col-${j}`).removeEventListener("click", addTableListener)
//             //     }
//             // }
//         }
//     })
// }

// const btnCancelJoins = document.querySelectorAll(".btn-cancel-join-game");
// btnCancelJoins.forEach((btnCancel) => btnCancel.addEventListener("click", cancelJoin));

// function cancelJoin(event) {
//     const currentUser = firebase.auth().currentUser;
//     console.log("[Cancel] Current user:", currentUser);
//     if (currentUser) {
//         const btnCancelID = event.currentTarget.getAttribute("id");
//         const player = btnCancelID[btnCancelID.length-1];

//         const playerForm = document.getElementById(`inputPlayer-${player}`);
//         if (playerForm.value && playerForm.value === currentUser.email){
//             // Delete player from database
//             let tmpID = `user-${player}-id`;
//             let tmpEmail = `user-${player}-email`;
//             gameRef.child(roomName).child(tmpID).remove();
//             gameRef.child(roomName).child(tmpEmail).remove();
//             gameRef.child(roomName).child(`user-${player}`).remove();
//             console.log(`delete on id: ${currentUser.uid}`);
//             document.querySelector(`#btnJoin-${player}`).disabled = false;
//         }
//         if(player == "x"){
//             document.getElementById("inputPlayer-o").value == "" ? document.querySelector("#btnJoin-o").disabled = false : document.querySelector("#btnJoin-o").disabled = true
//         }else{
//             document.getElementById("inputPlayer-x").value == "" ? document.querySelector("#btnJoin-x").disabled = false : document.querySelector("#btnJoin-x").disabled = true
//         }
//     }
// }

// const btnStart = document.querySelector("#btnStartGame");
// btnStart.addEventListener("click", function(){gameRef.child(roomName).update({isGameStart : true})});

// const btnEnd = document.querySelector("#btnTerminatedGame");
// btnEnd.addEventListener("click", function(){gameRef.child(roomName).update({isGameStart : false})});

// function addTableListener(event){
//     console.log(event.target.id)
// }
// function getPlayer(snapshot){
//     snapshot.forEach((data) => {
//         document.querySelector("#btnJoin-x").disabled = false;
//         document.querySelector("#btnJoin-o").disabled = false;
//         let currentUser = firebase.auth().currentUser;
//         const playerInfo = data.val();
//         Object.keys(playerInfo).forEach((key) => {
//             switch (key) {
//                 case "user-x": 
//                     if(currentUser.email == document.getElementById("inputPlayer-x").value){
//                         document.querySelector("#btnJoin-o").disabled = true;
//                         document.querySelector("#btnCancel-o").disabled = true;
//                     }
//                     else{
//                         document.querySelector("#btnCancel-o").disabled = false;
//                     }
//                     document.querySelector("#btnJoin-x").disabled = true;
//                     break;
//                 case "user-o":
//                     if(currentUser.email == document.getElementById("inputPlayer-o").value){
//                         document.querySelector("#btnJoin-x").disabled = true;
//                         document.querySelector("#btnCancel-x").disabled = true;
//                     }
//                     else{
//                         document.querySelector("#btnCancel-x").disabled = false;
//                     }
//                     document.querySelector("#btnJoin-o").disabled = true;
//                     break;
//             }
//         })


//     })

// }
