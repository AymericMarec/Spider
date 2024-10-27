import { AddSpider } from "./spider.js"

function getRandomInt(min,max) {
    return Math.floor(Math.random() * max) +min;
}

let canvas = document.getElementById("canvas")  
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export let context = canvas.getContext("2d");
export let AllPoint = []

//Create glowing point for spiders
function CreatePoint(x,y){
    const newpoint = document.createElement("div");
    newpoint.classList.add("point")
    newpoint.style.left =  y + "px"
    newpoint.style.top = x+ "px"
    AllPoint.push({point: newpoint,IsAvailable:true})
    // AllPoint.push(newpoint)
    document.body.appendChild(newpoint)
}

//function wich return clost glowing point from coordinates
export function GetClosestPoint(x,y){
    let BestDistance = 100000
    let ClosePoint = null
    //check the closest distance for each point on the map
    for (let obj of AllPoint){
        if(obj.IsAvailable == false){
            continue
        }
        const dx = x - parseInt(obj.point.style.left)
        const dy = y - parseInt(obj.point.style.top)
        const distanceSquared = dx * dx + dy * dy      
        if (distanceSquared < BestDistance){
            BestDistance = distanceSquared
            ClosePoint= obj
        }
    }
    return ClosePoint
}

//Create X points in the screen at a random position
for(var i = 0 ; i < 200 ;i++){
    CreatePoint(getRandomInt(30,window.innerHeight-window.innerHeight/10),getRandomInt(30,window.innerWidth-innerWidth/15))
}

AddSpider(getRandomInt(30,window.innerHeight-window.innerHeight/10),getRandomInt(30,window.innerWidth-innerWidth/15),4)

// document.addEventListener("mousemove", Move);
// function Move(e){
//     var ClosestPoint = GetClosestPoint(e.clientX,e.clientY)
//     ClosestPoint.style.background = "red"
// }

