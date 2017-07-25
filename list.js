// Each of mine items would appear as I want it
// Author: Joshua Eyenike
// Date: 07/25/2017
// Project for Cchub Graduate Creators Programme

function updateItemStatus(){
    var cbId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_" + cbId);
    
    if(this.checked){
    itemText.className = "checked";
}
else{
    itemText.className = " ";
}
}

function renameItem(){
    var newText = prompt("Edit your desired text here!");
    
    if (!newText || newText == "" || newText == ""){
        return false;
    }
    this.innerText = newText;
}

function removeItem(){
    this.style.display = "none";
}

function addNewItem(list, itemText){
    //<li>
    //<input type="checkbox" /> 
    //<span>Buy Groceries</span>
    //<input type="text"><button class="edit">Edit</button>
    //<button class="delete">Delete</button>
    //</li>
    
    
    var date = new Date();
    
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
    
    
    var listItem = document.createElement("li");
    listItem.id = "li_" + id;
    listItem.ondblclick = removeItem;
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id= "cb_" + id;
    checkBox.onclick = updateItemStatus;
    
    var span = document.createElement("span");
    span.id = "item_" + id;
    span.innerText = itemText;
    
    span.onclick = renameItem;
    
    
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    
    list.appendChild(listItem); 
    
    
}

var totalItems = 0;
var inItemText = document.getElementById("textTask");
inItemText.focus();

var btnNew = document.getElementById("myBtn");
btnNew.onclick = function(){
    var itemText = inItemText.value;
    
    if (itemText == "" || itemText == ""){
        return false;
    }
    
    addNewItem(document.getElementById("todolist"), itemText);
    
    inItemText.focus();
    inItemText.select();
}
    

