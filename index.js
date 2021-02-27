let body = document.querySelector("body");
let colorStart = document.querySelector(".colorstart");
let colorEnd = document.querySelector(".colorend");
let showColor = document.querySelector("h3");

//change the background color
function setGradient() {
  body.style.background =
    "linear-gradient(to right," +
    colorStart.value +
    " , " +
    colorEnd.value +
    " )";
//to output current background function
  showColor.textContent = body.style.background + ";";
}

//event listener to implement change of background function 
colorStart.addEventListener("input", setGradient);
colorEnd.addEventListener("input", setGradient);

/*to output current background colors to page
this was the first method, worked but was not automatic, it only changed value after the page was refreshed
showColor.innerHTML = "the color on the right is  " + colorStart.value + " and that on the left is " + colorEnd.value;
*/
