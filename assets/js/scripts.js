var listButton = document.querySelector(".listbutton");
var gridButton = document.querySelector(".gridbutton");

gridButton.addEventListener("click", toggleGrid);
listButton.addEventListener("click", toggleList);



function toggleGrid (){
    document.getElementById("activeSheet").href="assets/css/gridstyles.css";
    console.log("Hello");
};
function toggleList(){
  document.getElementById("activeSheet").href="assets/css/liststyles.css";
  console.log("goodbye");
};
var x = 1;
console.log(x);

//if statement for active style sheet changing button color.
