const charactor = document.getElementById("charactor");
const block = document.getElementById("block");

function jump() {
    charactor.classList.add("animate");


    if (cha) {

    }


    /*   document.addEventListener("keydown", function(event) {
              if (event.keyCode === 32) {
                  toString("space");
              }
          } */

    setTimeout(function() {
        charactor.classList.remove("animate");
    }, 5000);

}