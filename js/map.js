import { Spider } from "./spider.js"

export let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export let context = canvas.getContext("2d");
export let AllPoint = []
let targetX = 200
let targetY = 200

function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

//Create glowing point for spider
function CreatePoint(x, y) {
    const newpoint = document.createElement("div");
    newpoint.classList.add("point")
    newpoint.style.left = y + "px"
    newpoint.style.top = x + "px"
    AllPoint.push({ point: newpoint, IsAvailable: true, x: x, y: y })
        // AllPoint.push(newpoint)
    document.body.appendChild(newpoint)
}

//function wich return clost glowing point from coordinates
export function GetClosestPoint(y, x) {
    let BestDistance = 100000
    let ClosePoint = null
        //check the closest distance for each point on the map
    for (let obj of AllPoint) {
        if (obj.IsAvailable == false) {
            continue
        }
        const dx = x - obj.x
        const dy = y - obj.y
        const distanceSquared = dx * dx + dy * dy
        if (distanceSquared < BestDistance) {
            BestDistance = distanceSquared
            ClosePoint = obj
        }
    }
    return ClosePoint
}
document.addEventListener("mousemove", function GetMouse(e) {
    targetX = e.clientX
    targetY = e.clientY
});

//Make spider Follow cursor
function Move() {
    Spider1.Follow(targetX, targetY)
    requestAnimationFrame(Move)
}

//Create X points in the screen at a random position
for (var i = 0; i < 400; i++) {
    CreatePoint(getRandomInt(30, window.innerHeight - window.innerHeight / 10), getRandomInt(30, window.innerWidth - innerWidth / 15))
}

var Spider1 = new Spider(getRandomInt(30, window.innerHeight - window.innerHeight / 10), getRandomInt(30, window.innerWidth - innerWidth / 15), 10, 1)
Move()