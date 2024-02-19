

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User :", user);
        // getList(user);
    }
    else {
        console.log('unavailable')
    }

});


const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", loginUser);

//   const loginFeedback = document.querySelector("#feedback-msg-login");
//   const loginModal = new bootstrap.Modal(document.querySelector("#modal-login"));

function loginUser(event) {
    // event.preventDefault();
    const email = loginForm["input-email-login"].value;
    const password = loginForm["input-password-login"].value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        //   loginFeedback.style = "color: green";
        //   loginFeedback.innerHTML = "<i class='bi bi-check-circle-fill'></i> Login succeed!.";

        //   loginModal.hide();
        //   signupForm.reset();
        //   signupFeedback.innerHTML = "";
        loginForm.reset();
        //   loginFeedback.innerHTML="";
        window.location.href = "main/main.html";

    })
        .catch((error) => {
            console.log('kuy')
            //   loginFeedback.style = "color: crimson";
            //   loginFeedback.innerHTML = `<i class='bi bi-exclamation-triangle-fill'></i> ${error.message}`
            loginForm.reset();
        })
}
