var n = 0;



function button(){
    n = n+1;

    var div = document.createElement("div");
    var task = document.getElementById("task");
    var todo = document.getElementById("todo");
    var space = document.createElement("p");
    var para = document.createTextNode(todo.value);
    var headin = document.createTextNode(task.value);
    var del = document.createElement("button");
    del.innerText = "delete"
    del.setAttribute("id","dele");
    del.setAttribute("class","fa fa-trash")
    div.setAttribute("id","tobe");

    
    div.style.width = "300px";
    div.style.padding = "10px";
    div.style.fontSize = "25px"
    div.style.height = "400px";
    div.style.background = "rgb(85, 0, 255)";
    div.style.color = "white";
    div.style.margin = "10px";
    div.style.borderRadius = "12px";
    div.appendChild(headin);
    div.appendChild(space);
    div.appendChild(para);
    div.appendChild(del);
    div.style.float = "left";
    task.value="";
    todo.value="";
    var dvv = document.getElementById("tobe");

    function delte(){
        div.parentElement.removeChild(div);
    }


    document.getElementById("main").appendChild(div);
    del.addEventListener("click", delte);
    var g = 10
    
}
