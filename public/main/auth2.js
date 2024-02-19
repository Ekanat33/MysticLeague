
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User :", user);
        showemail(user);
    }
    else {
        console.log('unavailable')
    }

});


const btnLogout = document.querySelector("#btnLogout");
btnLogout.addEventListener("click", function () {
    firebase.auth().signOut();
    console.log("Logout completed");
    window.location.href = "../index.html"
})

let showemail = (user) => {
    if(user) {
        document.querySelector('#showemail').innerHTML = user.email;
       

    } else {
       

    }
}



