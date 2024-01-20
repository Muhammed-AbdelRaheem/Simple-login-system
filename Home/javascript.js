let localStoragekey = "emails"
let anchor = document.querySelector("#btn_out")
let sessions = []



var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').innerHTML = " Welcome " + username
}


function logout(){
    localStorage.removeItem("sessionUsername")
 callSignInPage()
}
function callSignInPage() {
    anchor.setAttribute("href", "../signIn/index.html")
    
    }