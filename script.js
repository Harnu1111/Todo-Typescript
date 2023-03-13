const input = document.getElementById("input");
const btn = document.getElementById("button");
const list = document.getElementById("list");

btn.addEventListener("click", (e) => {
  e.preventDefault(false);
  const task = document.createElement("li");
  const item = document.createElement("item");
  const label = document.createElement("label");
  const check = document.createElement("input");
  check.type = "checkbox";

  item.innerHTML = input.value;
  label.append(check, item)
task.append(label)
  list.append(task);


  check.addEventListener("change", () => { 
    if(check.checked){
   task.style.textDecoration = "line-through";}
   else {
     task.style.textDecoration = "none";
   }
  })
 
});
