function click1(){

    let d1=Math.floor(Math.random()*6)+1
    let d2=Math.floor(Math.random()*6)+1
    let dd1="./images/dice"+d1+".png"
    let dd2="./images/dice"+d2+".png"
    document.querySelector("#dice1").setAttribute("src",dd1)
    document.querySelector("#dice2").setAttribute("src",dd2)

    if(d1>d2){
        document.querySelector("h3").innerHTML="player 1 won"
    }
    else if(d1<d2){
        document.querySelector("h3").innerHTML="player 2 won"
    }
    else{document.querySelector("h3").innerHTML="Draw"}
}



   
