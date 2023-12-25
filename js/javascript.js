let signUpName = document.querySelector("#uPName")
let signUpEmail = document.querySelector("#uPEmail")
let signUpPass = document.querySelector("#uPPass")
let signInEmail = document.querySelector("#inEmail")
let signInPass = document.querySelector("#inPass")
let btn = document.querySelector(".btn")
let Btn_signout = document.getElementById("btn_out")
let Btn_signIn = document.getElementById("signInBtn")
let localStoragekey = "emails"
let anchor = document.querySelector("#home")
let sessions = []



var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').innerHTML = " Welcome " + username
}

// SIGN UP FORM

if ((localStorage.getItem(localStoragekey)) != null) {
    sessions = JSON.parse(localStorage.getItem(localStoragekey));
}
else {
    sessions = []
}

btn.addEventListener("click", function () {
    add()
})


function add() {
    if (signup_empty() == false) {
        document.getElementById("required").classList.replace("d-none", "d-block")
        document.getElementById("required2").classList.replace("d-block", "d-none")


        return false;
    }


    if (checkmail() == false) {
        document.getElementById("required2").classList.replace("d-none", "d-block")
        document.getElementById("required").classList.replace("d-block", "d-none")

    }

    else {
        let session = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPass.value
        }
        sessions.push(session);
        updateLocalStorge(localStoragekey)
        document.getElementById("required3").classList.replace("d-none", "d-block")
        document.getElementById("required2").classList.replace("d-block", "d-none")
        document.getElementById("required").classList.replace("d-block", "d-none")

        // console.log(sessions)}

    }
}






function updateLocalStorge(i) {
    localStorage.setItem(i, JSON.stringify(sessions))
}



function checkmail() {
    for (var i = 0; i < sessions.length; i++) {
        if (sessions[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            return false
        }

    }
}


function signup_empty() {
    if (signUpName.value == "" || signUpEmail.value == "" || signUpPass.value == "") {
        return false
    }
    else {
        return true
    }
}



// SIGN IN FORM

Btn_signIn.addEventListener("click", function () { singin() })


function singin() {

    if (singin_empty() == false) {
        document.getElementById("required4").classList.replace("d-none", "d-block")

        return false
    }

    else{
        for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].email.toLowerCase() == signInEmail.value.toLowerCase() &&
            sessions[i].password.toLowerCase() == signInPass.value.toLowerCase()) {

            callHomePage()
            localStorage.setItem('sessionUsername', sessions[i].name)

            // alert("done") 
        }

    }}

    
}


function singin_empty() {
    if (signInEmail.value != "" || signInPass.value != "") { return true }
    else { return false }

}

function callHomePage() {
anchor.setAttribute("href", "file:///C:/Muhammed/Course%20Frontend/Java%20Script/Session%207/Assignment%204/home.html")

}



// Btn_signout.addEventListener("click", function () {  })


function logout(){
    localStorage.removeItem("sessionUsername")
}
