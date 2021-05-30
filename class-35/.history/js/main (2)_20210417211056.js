let todoList = [];
let doneList = [];

function addTask(){
    let text = document.getElementById("task").value;

    if (text.length > 0){
        document.getElementById("task").value = "";

        todoList.push(text);

        drawPage();
        progress();
    }
}

function drawPage(){
    let result = "";

    for (let i = 0; i < todoList.length; i++){
        result += "<div class='alert alert-primary d-flex justify-content-between align-items-center'>"+ todoList[i] +"<button type='button' class='btn btn-success' onclick='checkTask("+ i +")'>&check;</button></div>";
    }

    document.getElementById("result1").innerHTML = result;

    let result2 = "";

    for (let i = 0; i < doneList.length; i++){
        result2 += "<div class='alert alert-secondary d-flex justify-content-between align-items-center'>"+ doneList[i] +"<button type='button' class='btn btn-danger' onclick='deleteTask("+ i +")'>&times;</button></div>";
    }

    document.getElementById("result2").innerHTML = result2;
}

function checkTask(index){
    doneList.push(todoList[index])
    todoList.splice(index, 1);


    drawPage();
    progress();
}

function deleteTask(index){
    doneList.splice(index, 1);
    drawPage();
    progress();
}

function progress(){
    let percent = doneList.length * 100 / (doneList.length + todoList.length);
    document.getElementById("progress").style.width = percent + "%";
}