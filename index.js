var callBtn = document.querySelector("#btn");
var output = document.querySelector("#output-resp");

var url = "https://mystery-api.kushanksriraj.repl.co/get"


function errorHandler() {
    alert(`please try after some time ! ${err}`)
}

function clickHandler() {

    fetch(url)
        .then((response) => response)
        .then((data) => {
            if (data.status === 404) {
                output.innerText = "show tha user not found"
            } else if (data.status === 401) {
                output.innerText = "you are not logged in."
            } else if (data.status === 200) {
                output.innerText = "Api working !";
            }
        })
        .catch((err) => errorHandler(err))
}

callBtn.addEventListener('click', clickHandler)