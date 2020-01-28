const light = document.getElementById('light')
const button = document.getElementById('button')
let buttonTimeout = false

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))

trafficLight(light)

async function trafficLight(element, redTime = 2000, yellowTime = 500, greenTime = 2000) {
    while (true) {
        //  ждем зеленый
        await delay(yellowTime).then(() => {
            element.style.backgroundColor = 'red'
        })
        //  ждем желтый
        await Promise.race([delay(redTime), pushButton(button, 'click').then(delay)]).then(() => {
            element.style.backgroundColor = 'yellow'
        })
        //  ждем красный
        await delay(yellowTime).then(() => {
            element.style.backgroundColor = 'green'
        })
        //  ждем желтый
        await delay(greenTime).then(() => {
            element.style.backgroundColor = 'yellow'
        })
    }
}


function pushButton(element, eventType) {

    return new Promise(async (resolve) => {
        function listener() {
            console.log('Button Pushed')
            resolve(50)
            buttonTimeout = true
            console.log('Timeout Set')
            element.removeEventListener(eventType, listener)
        }

        if (!buttonTimeout) element.addEventListener(eventType, listener)
        await delay(5000)
        element.removeEventListener(eventType, listener)
        console.log('Timeout Clear')
        buttonTimeout = false
        resolve(50)

    })
}


