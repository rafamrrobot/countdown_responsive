//selecionando elementos
let dayBox = document.getElementById("day-box")
let hrBox = document.getElementById("hr-box")
let minBox = document.getElementById("min-box")
let secBox = document.getElementById("sec-box")

//formatando : Data(year,month,days,hour,minutes)
//contagem do ano vai de 0 a 11
let endDate = new Date (2022,0,31,00,00);
//valor em milisegundos
let endTime = endDate.getTime();

function countdown(){
    let todayDate = new Date() ;
    //output value in miliseconds
    let todayTime = todayDate.getTime();

    let remainingTime = endTime - todayTime ;

    //60sec => 1000 milliseconds
    let oneMin = 60 * 1000 ;
    //1 hour => 60 minutes
    let oneHr = 60 * oneMin ;
    //1 day => 24 hours
    let oneDay = 24 * oneHr ;

    //function to format number if it is single digit
    let addZeroes = num => num < 10 ? `0${num}` : num 

    //if - end date is before today date
    if(endTime < todayTime){
        clearInterval(i)
        document.querySelector(".countdown").innerHTML = "<h1>CountDown had expired!</h1>"
    }
    //if end date is not before today date
    else{
        //calculating remaining days , hrs , mins, secs
        let daysLeft = Math.floor(remainingTime / oneDay)
        let hrsLeft = Math.floor((remainingTime % oneDay / oneHr))
        let minsLeft = Math.floor((remainingTime % oneHr / oneMin))
        let secsLeft = Math.floor((remainingTime % oneMin / 1000))

        //displaying valurs
        dayBox.textContent = addZeroes(daysLeft)
        hrBox.textContent = addZeroes(hrsLeft)
        minBox.textContent = addZeroes(minsLeft)
        secBox.textContent = addZeroes(secsLeft)


    }
}

let i = setInterval(countdown,1000)
countdown()
