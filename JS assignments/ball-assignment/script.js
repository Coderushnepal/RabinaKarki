var container = document.createElement("div");
document.body.appendChild(container);

var heading = document.createElement("h1");
container.appendChild(heading);
heading.innerHTML = "Click on the ball for the bounce!";
heading.style = `
    text-align: center;
    color : #808080 ;
    padding-top: 15px;
`;
var wrapper = document.createElement("div");
container.appendChild(wrapper);
wrapper.style = `
    width: 600px;
    height: 600px;
    position: relative;
    margin: 10px 600px;
    background-color: #b19cd9; 
`;

var ball = document.createElement("div");
wrapper.appendChild(ball);
ball.style = `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: 100px;
    left: 200px;
    background-color: #808080 ;
    padding: 15px;
`;

ball.addEventListener("click", function (event) {
  ball.innerHTML = "";
  var directionTop = 1;
  var directionLeft= 1;

  var interval = setInterval(function () {
    var newTop = parseInt(event.target.style.top) + 5 * directionTop + "px";
    event.target.style.top = newTop;
    if (parseInt(newTop) >= wrapper.clientHeight - ball.clientHeight) {
      directionTop *= -1;
    }
    if (parseInt(newTop) <= 0) {
      directionTop = 1;
    }
    var newLeft = parseInt(event.target.style.left) + 5 * directionLeft + "px";
        event.target.style.left = newLeft;
        if(parseInt(newLeft) >= wrapper.clientWidth - ball.clientWidth) {
            console.log(wrapper.clientWidth, ball.clientHeight);
            directionLeft *= -1;
        }
        if(parseInt(newLeft) <= 0) {
            directionLeft = 1;
        }    
  }, 1000 / 60);
});