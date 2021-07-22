class Launcher{
    constructor(bodyA,pointB){
        var options={
     bodyA:bodyA,
     pointB:pointB,
     stiffness:0.02,
     length:25   
    }
    this.body=Constraint.create(options)
    this.pointB=pointB
    World.add(world,this.body)
}
fly(){
    this.body.bodyA=null
}
attach(body){
    this.body.bodyA=body
}
display(){
    if (this.body.bodyA){
    var pointA=this.body.bodyA.position
    var pointB=this.pointB
    
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
}