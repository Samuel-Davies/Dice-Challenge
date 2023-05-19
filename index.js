function diceRoll(){
    let diceShuffle1  = Math.random() * 6;
    diceShuffle1 = Math.floor(diceShuffle1) + 1;

    let diceShuffle2 = Math.floor(Math.random() * 6) + 1;


    console.log(diceShuffle1 + " " + diceShuffle2);
    
    if(diceShuffle1 === diceShuffle2){
        document.querySelector('h1').innerHTML = "It's a draw ";
    }else if(diceShuffle1 > diceShuffle2){ 
        document.querySelector('h1').innerHTML = 'PLayer 1 wins';
    }else{
        document.querySelector('h1').innerHTML = 'PLayer 2 wins';
    }
    document.querySelector('.img1').setAttribute("src", "images/dice" + diceShuffle1 +".png")
    document.querySelector('.img2').setAttribute("src", "images/dice" + diceShuffle2 +".png")

}

//diceRoll();