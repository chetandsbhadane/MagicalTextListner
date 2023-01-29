

let text2;
let text3;


//This is for check if string is there or not
let addbtn3 = document.getElementById("addbtn3");
addbtn3.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = divelem.innerHtml;
    divelem.innerHTML = `${html}`;
    console.log(html);
  }

  //function is for uppercase text
  let btn3 = (document.getElementById("successtext").innerText =
    "Capital text succesfully");
  divelem.innerHTML = textarea.value;
  localStorage.setItem("text", textarea.value.toUpperCase());
  let val2 = localStorage.getItem("text");
  console.log(val2);
  text2 = document.createTextNode(val2);
  location.reload();
});


  //function is for lowercase the text
let addbtn4 = document.getElementById("addbtn4");
addbtn4.addEventListener("click", function () {
  let btn4 = (document.getElementById("successtext").innerText =
    "lower text succesfully");

  divelem.innerHTML = textarea.value;
  localStorage.setItem("text", textarea.value.toLowerCase());
  let val3 = localStorage.getItem("text");
  console.log(val3);
  text3 = document.createTextNode(val3);
  location.reload();

});
