const input = document.getElementById("input");
const btn = document.getElementById("button");
const list = document.getElementById("list");

btn.addEventListener("click", (e) => {
  e.preventDefault(false);

 
  const task = document.createElement("li");
  const item = document.createElement("item");
  const label = document.createElement("label");
  const check = document.createElement("input");
  const deletebtn = document.createElement("button");

  check.type = "checkbox";

  deletebtn.innerHTML = "Delete";
  deletebtn.classList.add("deleteBtn");
  

  item.innerHTML = input.value;
  label.append(check, item, deletebtn)
task.append(label)
  list.append(task);

  
deletebtn.addEventListener("click", () => {
  task.remove()
})

  check.addEventListener("change", () => { 
    if(check.checked){
   task.style.textDecoration = "line-through";}
   else {
     task.style.textDecoration = "none";
   }
  })
 

  input.value="";
});

 
