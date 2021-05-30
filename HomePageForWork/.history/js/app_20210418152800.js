const charactor = document.getElementById("charactor");
const block = document.getElementById("block");

function jump() {
    charactor.classList.add("animate");


    if (charactor.classList != "animate") {
        charactor.classList.add("animate")
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