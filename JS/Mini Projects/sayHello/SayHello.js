let input = document.querySelector('.name-input')
let submit = document.querySelector('.submit-btn')
let display = document.querySelector('.display')
let nameBtn1 = document.querySelector('#name1')
let nameBtn2 = document.querySelector('#name2')
let nameBtn3 = document.querySelector('#name3')
let nameBtn4 = document.querySelector('#name4')
let nameBtn5 = document.querySelector('#name5')
let nameBtn6 = document.querySelector('#name6')
let hello = document.querySelector('#sH')
let goodBye = document.querySelector('#sG')


let sayHello = (name) => {
    var name = input.value

    if(display.textContent == '' && input.value == '') {
        display.textContent = 'Choose a name or input your own.'
    }
    else if (display.textContent !== ''){
    display.textContent = `Hello, ${display.textContent}`
    }
    else {
        display.textContent = name
    }
}

let sayGoodBye = (name) => {
    var name = input.value

    if(display.textContent == '' && input.value == '') {
        display.textContent = 'Choose a name or input your own.'
    }
    else if (display.textContent !== ''){
    display.textContent = 'Goodbye, ' + display.textContent
    }
    else {
        display.textContent = name
    }
}

nameBtn1.addEventListener('click', () => {
    display.textContent = nameBtn1.textContent
})

nameBtn2.addEventListener('click', () => {
    display.textContent = nameBtn2.textContent
})

nameBtn3.addEventListener('click', () => {
    display.textContent = nameBtn3.textContent
})

nameBtn4.addEventListener('click', () => {
    display.textContent = nameBtn4.textContent
})

nameBtn5.addEventListener('click', () => {
    display.textContent = nameBtn5.textContent
})

nameBtn6.addEventListener('click', () => {
    display.textContent = nameBtn6.textContent
})

submit.addEventListener('click', () => {
    display.textContent = input.value
})

hello.addEventListener('click', () => {
    sayHello(display.textContent)
})

goodBye.addEventListener('click', () => {
    if (goodBye.textContent == 'sG') {
        sayGoodBye()
        goodBye.textContent = 'clear'}
    else {
        display.textContent = ''
        goodBye.textContent = 'sG'
    }
})