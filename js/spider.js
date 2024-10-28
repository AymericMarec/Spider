import { GetClosestPoint, context, canvas } from "./map.js"

export class Spider {
    constructor(x, y, nblegs, speed) {
        this.x = x
        this.y = y
        this.nblegs = nblegs
        this.Legs = []
        this.body = null
        this.speed = speed
    }
    Follow(x, y) {
        var GoLEFT = this.speed
        var GoUP = this.speed
        if (this.x > x) {
            GoLEFT = -this.speed
        }
        if (this.y > y) {
            GoUP = -this.speed
        }
        this.Move(this.x + GoLEFT, this.y + GoUP)
    }
    Move(x, y) {
        this.x = x
        this.y = y
        for (var pt of this.Legs) {
            pt.IsAvailable = true
        }
        this.Legs = []
        context.clearRect(0, 0, canvas.width, canvas.height)
        for (var legs = 0; legs < this.nblegs; legs++) {
            this.AddLegs()
        }
    }
    AddLegs() {
        var NearPoint = GetClosestPoint(this.x, this.y)
        var PtX = NearPoint.x
        var PtY = NearPoint.y
        NearPoint.IsAvailable = false
        this.DrawLegs(PtY + 1, PtX + 1)
        this.Legs.push(NearPoint)
    }
    DrawLegs(PointX, PointY) {
        context.beginPath()
        context.moveTo(this.x, this.y)
        context.lineTo(PointX, PointY)
        context.strokeStyle = "red"
        context.lineWidth = 2
        context.stroke()
    }
}