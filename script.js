const title = document.querySelector("#title");
const color = document.querySelector("#color");
const text = document.querySelector("#text");
const button = document.querySelector("#button");
const resultContainer = document.querySelector("#resultContainer")
// console.log(modifiedDate);

button.addEventListener("click", function () {
  if (title.value === "") {
    alert("Please give a Title")
  }
  else{
  const date = new Date();
  const dateModifiy = date.toLocaleString();

//Create Element
  const outerBox = document.createElement("div");
  const innerBox = document.createElement("div");
  const createTitle = document.createElement("h3");
  const createParagraph = document.createElement("p");
  const deleteButton = document.createElement("span");
  const nowDate = document.createElement("p");

  outerBox.classList.add("outer");
  innerBox.classList.add("inner");
  innerBox.style.backgroundColor = color.value;
  outerBox.textContent = `Title : ${title.value}`;
  createParagraph.textContent = `Notes : ${text.value}`;
  deleteButton.classList.add("deleteBtn");
  deleteButton.textContent = "x";
  nowDate.textContent = `${dateModifiy}`;
  nowDate.style.color = "orange";


  outerBox.appendChild(createTitle);
  outerBox.appendChild(deleteButton);
  innerBox.appendChild(createParagraph);
  outerBox.appendChild(nowDate);
  outerBox.appendChild(innerBox); 
  resultContainer.appendChild(outerBox);
 

  title.value = "";
  text.value = ""
  }
})

resultContainer.addEventListener("click", function(e) {
  if(e.target.classList.contains("deleteBtn")){
    e.target.parentNode.remove();
  }
  
})

















