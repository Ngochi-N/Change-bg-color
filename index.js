const colorButton = document.getElementById("color-button");
// the constant declears the variable and the get function allows you to sellect and html file.

    colorButton.addEventListener("click", () => {   
         //this funtion allows you to attached a button 

     //   the constant declears all the colors which are stored in an Array
  const colors = [
   
    "green",
    "red",
    "pink",
    "orange",
    "black",
    "white",

  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
