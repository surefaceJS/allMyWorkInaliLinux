$(document).ready(function() {
    $('#myModalFirst').modal('show');
});


let globalMoney = "";
let globalName = "";
let getmeup = [];
let a = 0;

function both(index) {
    if (index === 1) {
        a = 1;
    } else if (index === 2) {
        a = 2;
    }
}

function nextUp() {
    let userName = document.getElementById("userName").value;
    let userMoney = document.getElementById("userMoney").value;


    globalName = userName;
    globalMoney = userMoney;

    if (userName.length > "") {
        document.getElementById("userName").value = "";
        document.getElementById("userMoney").value = "";

        document.getElementById("pushName").innerHTML = globalName;
        document.getElementById("pushMoney").innerHTML = "You Have " + globalMoney + " $";
    } else {
        alert("hey Fill In The Card..!");

    }



}


function importUp() {

    let userMoneyGot = document.getElementById("userMoneyGet").value;
    let userReason = document.getElementById("userReason").value;





    if (a === 1) {
        let mybog = {
            use: userMoneyGot,
            reason: userReason,
            set: "export"
        }
    } else if (a === 2) {

        let mybog = {
            use: userMoneyGot,
            reason: userReason,
            set: "import"
        }
    }

    getmeup.push(mybog);

    let me = "";
    for (let i = 0; i < getmeup.length; i++) {

        me +=

            document.getElementById("result").innerHTML =
            "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + getmeup[i].use + "</td>" +
            "<td>" + getmeup[i].reason + "</td>" +
            "<td>" + getmeup[i].set + "</td>" +
            "</tr>"
    }

    document.getElementById("result").innerHTML = me;


}


////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////