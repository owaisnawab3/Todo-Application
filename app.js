const input = document.querySelector("#input")
const toDoList = document.querySelector("#to-do-list")

input.addEventListener("keyup", function(event){
 if(event.key == "Enter"){
    addToDo(this.value);
    this.value = ""
 }
}  
)

const addToDo = (input) => {
const listItem = document.createElement("li");
listItem.innerHTML = `
${input}
<i class="fa-solid fa-xmark"></i>
`;

listItem.addEventListener("click", function(){

    this.classList.toggle("done")
}
);

listItem.querySelector("i").addEventListener("click", function(){
    listItem.remove()
})

toDoList.appendChild(listItem)
}