
 narizx = 0
 narizy = 0


function preload(){

    filtro = loadImage("https://i.postimg.cc/8c8DNb8V/bigode.png")

}

function setup(){
    canvas = createCanvas (300,300) 
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose",gotPoses)     
}

function modelLoaded(){
    console.log("posenet foi inicializado")
}

function gotPoses(results){
    if( results.length>0){
        console.log(results)
        narizx = results[0].pose.nose.x -51
        narizy = results[0].pose.nose.y -6
    }
}

function draw(){

    image(video,0,0,300,300)
    image(filtro,narizx,narizy,100,60)

}

function takeSnapshot(){
    save("foto com filtro.png")
}