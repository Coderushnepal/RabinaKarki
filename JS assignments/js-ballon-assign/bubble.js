let btn = document.querySelector(".button");
let bubble_box = document.querySelector(".bubble_box");
let bubble_box_height = bubble_box.offsetHeight;
let bubble_box_width = bubble_box.offsetWidth;
console.log(bubble_box_height, bubble_box_width);

function createBubbleBox() {
  let bubble_num = Math.floor(Math.random() * 100);
  for (i = 0; i < bubble_num; i++) {
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "bubble");
    bubble_box.append(divElement);
  }
}

function createBubble(bubbles) {
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].style.cssText = `
        height: 15px;
        width: 15px;
        border-radius: 50%;
        position: absolute;
        background-color: rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100});
        top: ${Math.random() * bubble_box_height}px;
        left: ${Math.random() * bubble_box_width}px;
        `;
  }
}

function toggleBtn(event) {
  if (btn.innerHTML == "Show Bubble") {
    btn.innerHTML = "Hide Bubble";
    bubble_box.style.opacity = 1;
    createBubbleBox();
    let bubbles = document.getElementsByClassName("bubble");
    createBubble(bubbles);
  } else {
    btn.innerHTML = "Show Bubble";
    bubble_box.style.opacity = 0;
    bubble_box.innerHTML = '';
  }
}

btn.addEventListener("click", toggleBtn);