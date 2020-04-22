//Spaceship Prefab
class Spaceship extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        
        
        scene.add.existing(this); //add to existing scene, displayList, updateList
        this.points=pointValue;    //track rocket's firing status

    }

    update(){
        //move spaceship left
        this.x -= game.settings.spaceshipSpeed;

        //wrapped screen bounds
        if(this.x<=0-this.width){
            this.x=game.config.width;
        }
    
    }

    reset(){
        //reseting spaceship position
        this.x=game.config.width;
    }
}