let vicM = 75
let vicH = 205
let johnM = 70
let johnH = 205

function comparison() {
    let vicBmi = vicBMI()
    let johnBmi = johnBMI()

    if (vicBmi > johnBmi) {
        console.log("Is Victor's BMI higher than John's? " + "True")
    }
    else {
        console.log("Is Victor's BMI higher than John's? " + "False")
    }
    
}

function vicBMI() {
    return vicM / vicH ** 2
}

function johnBMI() {
    return johnM / johnH ** 2
}


comparison()