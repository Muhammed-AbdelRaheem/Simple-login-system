let signInEmail = document.querySelector("#inEmail")
let signInPass = document.querySelector("#inPass")
let Btn_signout = document.getElementById("btn_out")
let Btn_signIn = document.getElementById("signInBtn")
let localStoragekey = "emails"
let anchor = document.querySelector("#home")




let sessions = []

sessions=JSON.parse(localStorage.getItem(localStoragekey))

console.log(sessions);
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
            localStorage.setItem('sessionUsername', sessions[i].name);
            
            // alert("done") 
        }

    }}

    
}


function singin_empty() {
    if (signInEmail.value != "" || signInPass.value != "") { return true }
    else { return false }

}

function callHomePage() {
anchor.setAttribute("href", "../Home/Home.html")

}



function logout(){
    localStorage.removeItem("sessionUsername")
}
