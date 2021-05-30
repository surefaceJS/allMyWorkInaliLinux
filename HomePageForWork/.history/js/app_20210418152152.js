const charactor = document.getElementById("charactor");
const block = document.getElementById("block");

function jump() {
    charactor.classList.add("animate");

    document.addEventListener("keydown", function(event) {
            if (event.keyCode === 32) {
                toString("space")
            }
        }

        setTimeout(function() {

        }, 5000);

    }