const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", createUser);

// const signupFeedback = document.querySelector("#feedback-msg-signup");
// const signupModal = new bootstrap.Modal(document.querySelector("#modal-signup"));

function createUser(event) {
    // event.preventDefault();
    const email = signupForm["input-email-signup"].value;
    const password = signupForm["input-password-signup"].value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        // signupFeedback.style = "color: green";
        // signupFeedback.innerHTML = "<i class='bi bi-check-circle-fill'></i> Signup completed.";
      
            // signupModal.hide();
        signupForm.reset();
            // signupFeedback.innerHTML = "";
            // loginForm.reset();
            // loginFeedback.innerHTML="";
        window.location.href = "../main/main.html";
       
    })
    .catch((error) => {
        // signupFeedback.style = "color: crimson";
        // signupFeedback.innerHTML = `<i class='bi bi-exclamation-triangle-fill'></i> ${error.message}`
        signupForm.reset();
    })
}

// const btnCancels = document.querySelectorAll(".btn-cancel");
// btnCancels.forEach((btn) => {
//     btn.addEventListener("click", () =>{ 
//         signupForm.reset();
//         signupFeedback.innerHTML = "";
//         loginForm.reset();
//         loginFeedback.innerHTML="";
//     })
// })

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User :", user);
        // getList(user);
    } 
    else{
        console.log('unavailable')
    }
    
  });





 
  
