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


let sayHello = () => {
    if(input.value == '') {
        display.textContent = 'Input field is empty!'
    }
    else {
    display.textContent = 'Hello, ' + input.value
    }
}

nameBtn1.addEventListener('click', () => {
    display.textContent = 'Hello, ' + nameBtn1.textContent
})

nameBtn2.addEventListener('click', () => {
    display.textContent = 'Hello, ' + nameBtn2.textContent
})

nameBtn3.addEventListener('click', () => {
    display.textContent = 'Hello, ' + nameBtn3.textContent
})

nameBtn4.addEventListener('click', () => {
    display.textContent = 'Hello, ' + nameBtn4.textContent
})

nameBtn5.addEventListener('click', () => {
    display.textContent = 'Hello, ' + nameBtn5.textContent
})

nameBtn6.addEventListener('click', () => {
    display.textContent = 'Hello, ' + nameBtn6.textContent
})

submit.addEventListener('click', () => {
    sayHello()
})

hello.addEventListener('click', () => {
    sayHello()
})

goodBye.addEventListener('click', () => {
    if (goodBye.textContent == 'sG') {
        sayHello()
        goodBye.textContent = 'clear'}
    else {
        display.textContent = ''
        goodBye.textContent = 'sG'
    }
})