let boards = [];

choosenIndex = -1;

function showCard() {
    // document.getElementById("card").classList.remove("d-none");
    // document.getElementById("card").classList.add("nimadir");

    document.getElementById("card").classList.toggle("d-none");
}

function addBoard() {
    let boardTitle = document.getElementById("board-title").value;

    if (boardTitle.length > 0) {

      
        let a = Math.floor(Math.random() * 10 + 1);
        let b = Math.floor(Math.random() * 20 + 1);
        let c = a + b;

        let javob = prompt(a + ' + ' + b + ' =' + " Javobni Kriting..!");
        
        if (javob == c) {

            document.getElementById("board-title").value = "";


            let newBoard = {
                title: boardTitle,
                tasks: []
            }


            if (choosenIndex >= 0) {
                boards[choosenIndex] = newBoard;
                choosenIndex = -1;
            } else {
                boards.push(newBoard);
            }

            drawPage();

        } else if (javob == "") {
            alert("Kara jadvlani bilmaysizmi...? uyateee")
        } else {
            alert("Kara jadvalni yodlang sizni  kutib turamiz..!")

        }

    } else {
        alert("eee nmasi bu  Ma'lumotlarni to'ldiring..");
    }
}




function drawPage() {
    let result = "";

    for (let i = 0; i < boards.length; i++) {

        let result2 = "";

        for (let j = 0; j < boards[i].tasks.length; j++) {
            result2 += "<div class='task'><span>" + boards[i].tasks[j] + "</span><div class='task-close' onclick='deleteTask(" + i + "," + j + ")'>&times;</div></div>"
        }




        result +=
            "<div class='col-4 mb-3'>" +
            "<div class='card>" +
            "<div class='card-header'><h6 class='text-center border p-2 bg-dark text-white text-uppercase' ondblclick='eddBack(" + i + ") '>" + boards[i].title + "</h6></div>" +
            "<div class='task-close' onclick='deleteBigCard(" + i + ")'>&times;</div>" +
            " <div class='card-body'>" + result2 + " </div>" +
            "<div class='card-footer'>" +
            "<textarea id='task-title" + i + "' class='form-control' placeholder='Type here'></textarea>" +
            "<button type='button' class='btn btn-success mt-3 d-block ml-auto' onclick='addTask(" + i + ")'>Add</button>" +
            "</div>" +
            "</div>" +
            "</div>"


   

    }
document.getElementById("result").innerHTML = result;
 

}

function deleteBigCard(index1) {
    boards.splice(index1, 1)
    drawPage();
}

function addTask(index) {
    let taskTitle = document.getElementById("task-title" + index).value;

    boards[index].tasks.push(taskTitle);
    drawPage();
}

function deleteTask(index1, index2) {

    if (boards[index1].tasks.splice(index2, 1)) {

        let ask = prompt("Nega bu bo'limni O'chrmoqchisz...?");



        if (ask == "") {
            prompt("Iltimos sababni ayting..!");
            alert("Uzur biz sababni blmaguncha o'chirolmaymiz..")
            alert("O'chirish uchun haqiqiy sabab bo'lishi kerak ")
            board[index1] == tasks[index2];
        } else if (ask == Number, String) {
            alert("Siz rostan ham o'chrmoqchimisz..!");
        } else if (ask == Number, String) {
            alert("O'chrishga tayormisz..?");
        } {
            drawPage();
        }

    }
}

function eddBack(index) {
    document.getElementById("board-title").value = boards[index].title;
    choosenIndex = index;
}