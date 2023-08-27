const DATA = [];

// dom nodes
let btn = document.querySelector("button");
let input = document.querySelector("input");
let root = document.getElementById("root");
input.focus();
// functions
function addTodo() {
  // update model
  DATA.push(input.value);
  input.focus()
  // update ui
  render();
}

function done(itemIndex) {
  DATA.splice(itemIndex, 1);
  render();
}

function render() {
  if(DATA.length < 8){
   let template = DATA.map((todo, index) => {
    return `<li><input onclick = "done(${index})" type= "checkbox" class = "style" >
    ${index + 1}- ${todo}</li>`;
  }).join("");
  root.innerHTML = template;
  input.value = "";}
}

// events
btn.addEventListener("click", addTodo);


// chera bazi vaghta jaye click dblclick mishe
// agar input.value khali send shod varede root nashe
// style dadan b ckecked box va baghie element haii k ba js sakhte shode