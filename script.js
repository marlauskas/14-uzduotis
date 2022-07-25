var Index,
table = document.getElementById("table");
            
function checkEmptyInput(){
    var isEmpty = false,
    fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    age = document.getElementById("age").value;
            
    if(fname === ""){
    alert("Įveskite vardą");
    isEmpty = true;
    }
    else if(lname === ""){
    alert("Įveskite pavardę");
    isEmpty = true;
    }
    else if(age === ""){
    alert("Įveskite amžių");
    isEmpty = true;
    }
    return isEmpty;
    }
        
        
function addRow(){
    if(!checkEmptyInput()){
        var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value;
        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;
        selectedRowToInput();
    }
}
   
selectedRowToInput();
          
function removeRow(){
    table.deleteRow(Index);
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
}
