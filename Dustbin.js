class Dustbin{
    constructor(x,y,w,h){
        var option = {
            isStatic: true,
        }
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.w=w
        this.h=h
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body)

    }
    display () {
        var pos=this.body.position
        fill("#fff")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)

    }
    showImage(){
        imageMode(CENTER)
        image(this.image,650,600,240,150)
    }
}