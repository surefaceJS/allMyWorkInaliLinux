let boards = [];

function showCard() {
    // document.getElementById("card").classList.remove("d-none");
    // document.getElementById("card").classList.add("nimadir");

    document.getElementById("card").classList.toggle("d-none");
}

function addBoard() {
    let boardTitle = document.getElementById("board-title").value;

    if (boardTitle.length > 0) {

        document.getElementById("board-title").value = "";

        let newBoard = {
            title: boardTitle,
            tasks: []
        }

        boards.push(newBoard);

        drawPage();
    } else {
        alert("Ma'lumotlarni to'ldiring!!!");
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
            "<div class='card-header'><h6>" + boards[i].title + "</h6></div>" +
            "<div class='card-bodxy'>" + result2 + "</div>" +
            "<div class='card-footer'>" +
            "<textarea id='task-title" + i + "' class='form-control' placeholder='Type here'></textarea>" +
            "<button type='button' class='btn btn-success mt-3 d-block ml-auto' onclick='addTask(" + i + ")'>Add</button>" +
            "</div>" +
            "</div>" +
            "</div>"

        document.getElementById("result").innerHTML = result;


    }


}

function addTask(index) {
    let taskTitle = document.getElementById("task-title" + index).value;

    boards[index].tasks.push(taskTitle);
    drawPage();
}

function deleteTask(index1, index2) {
    boards[index1].tasks.splice(index2, 1);
    drawPage();
}