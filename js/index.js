var firstnameinput = document.getElementById("firstName");
var lastnameinput = document.getElementById("lastName");
var yournumberinput = document.getElementById("number");
var youremailinput = document.getElementById("email");
var yoursearch = document.getElementById("search");
var submitBtn = document.getElementById("subBtn");
var updateBtn = document.getElementById("updateBtn")
var indexupdate = 0;


var datacontainer = [];
if (localStorage.getItem("data") != null) {
    datacontainer = JSON.parse(localStorage.getItem("data"));
    displayData()
}

function getdata() {
    var date = {
        firstname: firstnameinput.value,
        lastname: lastnameinput.value,
        yournumber: yournumberinput.value,
        youremail: youremailinput.value,
    }
    datacontainer.push(date);
    localStorage.setItem("data", JSON.stringify(datacontainer))
    displayData();
    clearData();
}


function displayData() {
    var cartona = "";
    for (var i = 0; i < datacontainer.length; i++) {
        cartona += `
        <tr>
          <td>${datacontainer[i].firstname} </td>
          <td>${datacontainer[i].lastname}</td>
          <td>${datacontainer[i].yournumber}</td>
          <td>${datacontainer[i].youremail}</td>
          <td>
              <button class="btn btn-outline-warning btn-sm" onclick="setData(${i})">update</button>
              <button class="btn btn-outline-danger btn-sm"  onclick="deleteData(${i})">delete</button>
          </td>
      </tr>
        `

    }
    document.getElementById('tableData').innerHTML = cartona
}


function deleteData(numberofelement) {
    datacontainer.splice(numberofelement, 1);
    localStorage.setItem("data", JSON.stringify(datacontainer))
    displayData()
}


function searchData() {
    var term = yoursearch.value
    var cartona = "";

    for (var i = 0; i < datacontainer.length; i++) {

        if (datacontainer[i].firstname.toLowerCase().includes(term.toLowerCase())) {

            cartona += `
        <tr>
          <td>${datacontainer[i].firstname} </td>
          <td>${datacontainer[i].lastname}</td>
          <td>${datacontainer[i].yournumber}</td>
          <td>${datacontainer[i].youremail}</td>
          <td>
              <button class="btn btn-outline-warning btn-sm">update</button>
              <button class="btn btn-outline-danger btn-sm" onclick="deleteData(${i})">delete</button>
          </td>
      </tr>
        `

        }
    }
    document.getElementById('tableData').innerHTML = cartona
}



function setData(index) {
    var curentData = datacontainer[index];
    indexupdate = index;

    firstnameinput.value = curentData.firstname;
    lastnameinput.value = curentData.lastname;
    yournumberinput.value = curentData.yournumber;
    youremailinput.value = curentData.youremail;
    updateBtn.classList.remove('d-none');
    submitBtn.classList.add("d-none");

}

function updateData() {

 

    
    var date = {
        firstname: firstnameinput.value,
        lastname: lastnameinput.value,
        yournumber: yournumberinput.value,
        youremail: youremailinput.value,
    };

    datacontainer.splice(indexupdate, 1, date)
    localStorage.setItem("data", JSON.stringify(datacontainer))


    displayData();
    clearData();
}

function clearData(){
    firstnameinput.value = "";
    lastnameinput.value= "";
    yournumberinput.value="";
    youremailinput.value ="";
}