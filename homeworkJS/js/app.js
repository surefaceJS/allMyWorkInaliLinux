let allInOne = [];



let selectedIndex = -1;




function AddNew() {

    let ismi = document.getElementById("userName").value;
    let familyasi = document.getElementById("userSureName").value;
    let tugilgankuni = document.getElementById("userBirthDay").value;
    let oqish = document.getElementById("typeStudy").value;


    document.getElementById("userName").value = "";
    document.getElementById("userSureName").value = "";
    document.getElementById("userBirthDay").value = "";
    document.getElementById("typeStudy").value = "";

    let myobgect = {
        ism: ismi,
        familya: familyasi,
        tugilganYili: tugilgankuni,
        oqishTuri: oqish
    }


    if (selectedIndex >= 0) {
        allInOne[selectedIndex] = myobgect;
        selectedIndex = -1;
    } else {
        allInOne.push(myobgect);
    }

    addinfo();

}





function ochrvor(index) {
    allInOne.splice(index, 1);

    addinfo();
}





function qowvor(index) {
    document.getElementById("userName").value = allInOne[index].ism;
    document.getElementById("userSureName").value = allInOne[index].familya;
    document.getElementById("userBirthDay").value = allInOne[index].tugilganYili;
    document.getElementById("typeStudy").value = allInOne[index].oqishTuri;
    document.getElementById("photo").value = allInOne[index].rasm;

    selectedIndex = index;
}





function addinfo() {

    let unknown = "";

    for (let i = 0; i < allInOne.length; i++) {

        unknown +=
            document.getElementById("result").innerHTML =
            "<tr>" +
            "<td>" + (i + 1) + "</td>" +
            "<td>" + allInOne[i].ism + " / " + allInOne[i].familya + "</td>" +
            "<td>" + allInOne[i].tugilganYili + "</td>" +
            "<td>" + allInOne[i].oqishTuri + "</td>" +
            "<td>" +

            "<div class='d-flex align-items-center'>" +

            "<button type='button' class='btn btn-success'  onclick='qowvor(" + i + ")'> Edit </button>" +
            "<button type='button' class='btn btn-danger ml-3' onclick='ochrvor(" + i + ")'> Delete </button>" +

            "</div>" +

            "</td>" +

            "</tr>"


    }

    document.getElementById("result").innerHTML = unknown;

}