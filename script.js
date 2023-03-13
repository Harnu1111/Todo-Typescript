const input = document.getElementById("input");
const btn = document.getElementById("button");
const list = document.getElementById("list");

btn.addEventListener("click", (e) => {
  e.preventDefault(false);
  const task = document.createElement("li");

  const label = document.createElement("label");
  const check = document.createElement("input");
  check.type = "checkbox";
 
  task.innerHTML = input.value;
 

  list.append(check , task);
});
