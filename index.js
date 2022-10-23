let time = document.querySelector('.timeText')
let dateParagraph = document.querySelector('.date')
let buttonleft = document.querySelector('.left')
let randomNumber = getInt(9)
console.log(buttonleft)
let buttonright = document.querySelector('.right')
console.log(buttonright)


buttonleft.onclick =  function () {
    randomNumber = randomNumber - 1
    setBg()
    if (randomNumber == 1) {
        randomNumber = 11
    }
}

buttonright.onclick =  function () {
    randomNumber = randomNumber + 1
    setBg()
    if (randomNumber == 10) {
        randomNumber = 1
    }
}


function showTime() {
    const date = new Date()
    let currentTime = date.toLocaleTimeString()
    time.textContent = currentTime

    const options = {
        month: 'long', 
        day: 'numeric'
    };
    const currentDate = date.toLocaleDateString('Ru-ru', options);
    dateParagraph.textContent = currentDate
    greeting()

    setTimeout(showTime, 1000)
}   

function getHour () {
    const date = new Date();
    const hours = date.getHours();
    return hours
}

console.log(getHour())

function getTimeOfDay () {
    if (getHour() >= 0 && getHour() < 6)  {
        return 'Доброй ночи';
    }

    if (getHour() >= 6 && getHour() < 12)  {
        return 'Доброе утро';
    }

    if (getHour() >= 12 && getHour() < 18)  {
        return 'Добрый день';
    }

    if (getHour() >= 18 && getHour() <= 23)  {
        return 'Добрый вечер';
    }
}

console.log(getTimeOfDay())

let greetingBlock = document.querySelector('.greeting')


function greeting () {
    let textGreeting = getTimeOfDay();
    greetingBlock.textContent = textGreeting
}

showTime()




function getInt (max) {
    let number = Math.floor(Math.random() * max )
    if (number == 0) {
        return 1
    }
    return number
}
console.log(getInt(9))

randomNumber = getInt(9)

function setBg () {
    const img = new Image();
    img.src = `/bg${randomNumber}.jpg`;
    img.onload = () => {
      document.body.style.backgroundImage = `url(https://sergeykonderesko.github.io/KiberOneJavaScript/${img.src})`
      console.log(`url(https://sergeykonderesko.github.io/KiberOneJavaScript/${img.src})`)
    }
    
}

setBg()
