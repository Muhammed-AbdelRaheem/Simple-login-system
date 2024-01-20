let signUpName = document.querySelector("#uPName")
let signUpEmail = document.querySelector("#uPEmail")
let signUpPass = document.querySelector("#uPPass")
let btn = document.querySelector(".btn")
let localStoragekey = "emails"
let sessions = []



var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').innerHTML = " Welcome " + username
}


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




