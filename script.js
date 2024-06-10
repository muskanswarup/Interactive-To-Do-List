let input = document.getElementById("inputBox");
let addButton = document.getElementById("button");
let todos = document.querySelector(".todos");
let errorMessage = document.querySelector(".error");
let listItems = document.querySelectorAll(".myList ul li");


addButton.addEventListener("click" , () => {
    console.log("YOu clicked me?");
    errorMessage.innerText = "";

    let inputValue = input.value;

    if(inputValue.trim() !== ''){
        let li = document.createElement("li");

        li.textContent = inputValue;

        let ul = document.querySelector(".myList ul");
        ul.appendChild(li);

        input.value = "";
    }else{
        console.log("Value must be provided");

        let para = document.createElement("p");
        para.innerText = "You must provide a value";
        para.style.fontSize = "1.5rem";
        para.style.color = "red";

        errorMessage.appendChild(para);
        // todos.appendChild(errorMessage);
       
    }
})



    listItems.forEach(item => {

        let className = item.getAttribute("class");
        if(className === "checked"){
            console.log(item.textContent);
            item.style.textDecoration = "line-through";    
            item.style.backgroundColor = "black";
        }

        item.addEventListener("click" , () => {
            // item.style.textDecoration = "none";

            if(item.style.textDecoration === "line-through"){
                item.style.textDecoration = "none";
                item.style.backgroundColor = ""
            }else{
                item.style.textDecoration = "line-through";
                item.style.backgroundColor = "black";
                item.style.color = "white";
            }
        })
    })