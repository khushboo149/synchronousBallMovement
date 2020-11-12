class Form{
    constructor(){

    }
    display(){
    var title=createElement('h2');
    title.html("Car Racing Game");
    title.position(130,0);
    var input=createInput("Name");
    var button=createButton('Play');
    var greeting=createElement('h3');
    input.position(350,300);
    button.position(400,350);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playerCount+=1;
        player.update(name);
        player.updateCount(playerCount);
        greeting.html("hello"+name);
        greeting.position(130,160);


    })
    }
}