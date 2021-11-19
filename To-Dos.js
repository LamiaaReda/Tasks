let newItem = document.getElementById("newItem");
let addItem = document.getElementById("submit");
let item = document.getElementById("item");

newItem.focus();

// To make sure the labal is not empity or more tham 28 char
addItem.onclick = function (event) {
  let itemValid = false;

  if (newItem.value !== "" && newItem.value.length <= 28) {
    itemValid = true;
// To create botton and make it remove item
    let btn = document.createElement("button");
    btn.textContent = "X";
    btn.style.cssText =
      "color: blue; border-radius: 5px; border-style: none; background-color: rgb(163, 178, 241); float: right; margin-right: 20px";
    btn.onclick = function () {
      inputItem.remove();
    };

    window.localStorage.setItem("newItem", newItem.value);

    let inputItem = document.createElement("div");
    inputItem.style.cssText =
      "background-color: rgb(43, 144, 226); margin: 30px; height: 40px; padding-left: 20px; padding-top: 20px; text-align: left";
    let text = document.createTextNode(newItem.value);
    inputItem.appendChild(text).after(btn);
    item.appendChild(inputItem);

  } else {
    event.preventDefault();
  }
};
