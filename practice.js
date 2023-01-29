
let divelem = document.getElementById("textarea");

let text;

let val = localStorage.getItem("text");

if (val == null) {
  text = document.createTextNode("Click to add the text...");
} else {
  text = document.createTextNode(val);
  console.log(text);
}

divelem.appendChild(text);

//defining all classes from dom
document.getElementById("textarea").addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = divelem.innerHtml;
    divelem.innerHTML = `${html}`;
    console.log(html);
  }

  //function is for uppercase text
  let addbtn = document.getElementById("addbtn");
  addbtn.addEventListener("click", function () {
    let btn = (document.getElementById("successtext").innerText =
      "succesfully added the text");
    divelem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });

  //function is for remove the text from local storage
  //button - 2
  let addbtn2 = document.getElementById("addbtn2");
  addbtn2.addEventListener("click", function () {
    let btn2 = (document.getElementById("successtext").innerText =
      "text removed succesfully");
    localStorage.removeItem("text");
    location.reload(true);
  });

  //function is for italic the text
  //button - 5
  let text5;
  let addbtn5 = document.getElementById("addbtn5");
  addbtn5.addEventListener("click", function () {
    document.getElementById("successtext").innerText =
      "text changed succesfully";

    let ielem = (document.getElementById("textarea").style.fontStyle =
      "italic");
    ielem.innerHTML = textarea.value;

    localStorage.setItem("text", textarea.value);

    let val5 = localStorage.getItem("text");
    // text5 = document.createTextNode(val5);
  });

  //function is for highlights the text
  //button - 6
  let text6;
  document.getElementById("addbtn6").onclick = bgcolor;
  function bgcolor() {
    console.log("sad");
    // setti
    let loopID2 = setTimeout(bgcolor, 500); // 500 milliseconds delay
    var index = Math.floor(Math.random() * 10);
    var ColorValue = "FFFFFF"; // default color - white (index = 0)
    if (index == 1) ColorValue = "FFCCCC"; //peach
    if (index == 2) ColorValue = "CCAFFF"; //violet
    if (index == 3) ColorValue = "A6BEFF"; //lt blue
    if (index == 4) ColorValue = "99FFFF"; //cyan
    if (index == 5) ColorValue = "D5CCBB"; //tan
    if (index == 6) ColorValue = "99FF99"; //lt green
    if (index == 7) ColorValue = "FFFF99"; //lt yellow
    if (index == 8) ColorValue = "FFCC99"; //lt orange
    if (index == 9) ColorValue = "CCCCCC"; //lt grey
    let ielem = (document.getElementById("textarea").style.backgroundColor =
      "#" + ColorValue);
    ielem.innerHTML = textarea.value;

    localStorage.setItem("text", textarea.value);
  }

  //function is for shado effect the text
  //button - 7
  let text7;
  document.getElementById("addbtn7").onclick = shadoweffect;
  function shadoweffect() {
    // let SEelem = document.getElementById("textarea").style.textShadow = '2px 2px 5px red';
    let SEelem = (document.getElementById("textarea").style.textShadow =
      "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue");
    document.getElementById("textarea").style.fontSize = "16px";
    document.getElementById("textarea").style.color = "white";
    document.getElementById("textarea").style.padding = "10px 10px";
    // document.getElementById("textarea").style.backgroundColor = 'red';
    SEelem.innerHTML = textarea.value;
    // document.getElementById("textarea").innerHtml = `<h1>${textarea.value}</h1>`
    localStorage.setItem("text", textarea.value);
  }
});
