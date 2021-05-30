let toDo = [];

let done = [];

function Addcards() {
    let searchup = document.getElementById("inputSearch").value;

    if (searchup.length >= 0) {
        document.getElementById("inputSearch").value = "";
        toDo.push(searchup);
    } else {
        alert("hey...  nmala qvosizeee..!")
    }

    createMe()

}


function createMe() {

    let result1 = "";

    for (let i = 0; i < toDo.length; i++) {
        result1 += ""
        "<div class='alert alert-dark d-flex justify-content-between align-items-center'>" + to + " < /div>"
    }

}