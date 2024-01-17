
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("Please fill the Task field ...");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        let span=document.createElement("span");
        span.innerHTML=("\u00d7");
        li.appendChild(span);
        listContainer.appendChild(li);

        
        inputBox.value=null;
    }
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
})