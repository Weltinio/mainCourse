const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  
  return result
}

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')


keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    const previousKeyType = calculator.dataset.previousKeyType

    Array.from(key.parentNode.children)
          .forEach(k => k.classList.remove('is-depressed'))

    if (!action) {
        console.log('number key!')
        calculator.dataset.previousKey = 'number'
        if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
          display.textContent = keyContent
        } else {
          display.textContent = displayedNum + keyContent
        }
      }

    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')
        key.classList.add('is-depressed')
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
        if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
          const calcValue = calculate(firstValue, operator, secondValue)
          display.textContent = calcValue
          calculator.dataset.firstValue = calcValue
        } else {
          calculator.dataset.firstValue = displayedNum
        }
      }    
    
    if (action === 'decimal') {
      console.log('decimal key!')
      calculator.dataset.previousKey = 'decimal'
      display.textContent = displayedNum + '.'
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.'
      } else if (
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
      ) {
        display.textContent = '0.'
      }
    }

    if (action === 'clear') {
      console.log('clear key!')
      calculator.dataset.previousKeyType = 'clear'
      display.textContent = 0
      key.textContent = 'AC'
      if (action === 'clear') {
        if (key.textContent === 'AC') {
          calculator.dataset.firstValue = ''
          calculator.dataset.modValue = ''
          calculator.dataset.operator = ''
          calculator.dataset.previousKeyType = ''
        } else {
          key.textContent = 'AC'
        }
    }

    if (action === 'calculate') {
      console.log('equal key!')
      const secondValue = displayedNum
      const firstValue = calculator.dataset.firstValue
      const operator = calculator.dataset.operator
      calculator.dataset.modValue = secondValue
      display.textContent = calculate(firstValue, operator, secondValue)
      calculator.dataset.previousKeyType = 'calculate'
      if (firstValue) {
        if (previousKeyType === 'calculate') {
          firstValue = displayedNum
          secondValue = calculator.dataset.modValue
        }
        display.textContent = calculate(firstValue, operator, secondValue)
      }
    }

    if (action !== 'clear') {
      const clearButton = calculator.querySelector('[data-action=clear]')
      clearButton.textContent = 'CE'
    }

    if (!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.'
    } else if (previousKeyType === 'operator') {
      display.textContent = '0.'
    }
      calculator.dataset.previousKeyType = 'decimal'
  }
}})