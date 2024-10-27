import { GetClosestPoint,AllPoint,context } from "./map.js"

export function AddSpider(x,y,nblegs){
    const spider = document.createElement("div");
    spider.classList.add("spider")
    spider.style.left =  x + "px"
    spider.style.top = y+ "px"
    document.body.appendChild(spider)
    console.log(context)
    for(var legs = 0 ; legs < nblegs ;legs++){
        var NearPoint = GetClosestPoint(x,y) 
        var PtX = parseInt(NearPoint.point.style.top.slice(0,-2))
        var PtY = parseInt(NearPoint.point.style.left.slice(0,-2))
        console.log(x,y,PtX,PtY)
        NearPoint.IsAvailable = false
        AddLegs(x,y,PtY+1,PtX+1)
    }
}

function AddLegs(spiderX,spiderY,PointX,pointY){
    context.beginPath()
    context.moveTo(spiderX, spiderY)
    context.lineTo(PointX, pointY)
    context.strokeStyle = "red"
    context.lineWidth = 2
    context.stroke()
}