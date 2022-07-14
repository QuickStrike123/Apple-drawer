x = 0;

y = 0;

ScreenWidth = 0;

ScreenHeight = 0;

Apple = "";

SpeakData = ""

ToNumber = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function preload() {

  Apple = loadImage("apple.png");
  
}

function start() {

  document.getElementById("status").innerHTML = "System is listening please speak";

  recognition.start();

}

recognition.onresult = function (event) {

  console.log(event);

  content = event.results[0][0].transcript;

  document.getElementById("status").innerHTML = "The Speech Has Been Recognized: " + content;

  ToNumber = Number(content);

  if(Number.isInteger(ToNumber)){

    document.getElementById("status").innerHTML = "Drawing Apple Please Wait... ";

    draw_apple = "set";

  }else{

    document.getElementById("status").innerHTML = "The Speech Has Not Recognized a number ";

  }

}

function setup() {

  ScreenWidth = window.innerWidth;

  ScreenHeight = window.innerHeight;

  canvas = createCanvas(ScreenWidth, ScreenHeight - 150);

  canvas.position(0,150);

}

function draw() {

  if (draw_apple == "set") {

    for ( i = 1; i < ToNumber; i++) {

      x = Math.floor( Math.random() * 700 );

      y = Math.floor( Math.random() * 400 );

      image(Apple, x, y, 50, 50);
      
    }

    document.getElementById("status").innerHTML = ToNumber + " Apples drawn";

    console.log("Apple drawn");

    speak()

    console.log(ToNumber);

    draw_apple = "";

  }

}

function speak() {

  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(SpeakData);

  synth.speak(utterThis);

  SpeakData = "";

}