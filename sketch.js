const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var getTime;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png");
    backgroundImg = loadImage("sunrise2.png");
    backgroundImg = loadImage("sunrise3.png");
    backgroundImg = loadImage("sunrise4.png");
    backgroundImg = loadImage("sunrise5.png");
    backgroundImg = loadImage("sunrise6.png");
    backgroundImg = loadImage("sunset7.png");
    backgroundImg = loadImage("sunset8.png");
    backgroundImg = loadImage("sunset9.png");
    backgroundImg = loadImage("sunset10.png");
    backgroundImg = loadImage("sunset11.png");
    backgroundImg = loadImage("sunset12.png");
    

    getTime();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getTime(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var type = await response.json();

    // write code slice the datetime
    var time = type.datetime.slice(11, 13);


    // add conditions to change the background images from sunrise to sunset
    if(time>=6&& time<=8){
        bg = "sunrise1.png";
    }
    else if(time>=8&& time<=10){
        bg = "sunrise2.png";
    }
    else if(time>=10&& time<=12){
        bg = "sunrise3.png";
    }
    else if(time>=12&& time<=14){
        bg = "sunrise4.png";
    }
    else if(time>=14&& time<=16){
        bg = "sunrise5.png";
    }
    else if(time>=16&& time<=18){
        bg = "sunrise6.png";
    }
    else if(time>=18&& time<=20){
        bg = "sunset7.png";
    }
    else if(time>=20&& time<=22){
        bg = "sunset8.png";
    }
    else if(time>=22&& time<=0){
        bg = "sunset9.png";
    }
    else if(time>=0&& time<=2){
        bg = "sunset10.png";
    }
    else if(time>=2&& time<=4){
        bg = "sunset11.png";
    }
    else if(time>=4&& time<=6){
        bg = "sunset3.png";
    }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}
