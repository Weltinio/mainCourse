let vicM = 75
let vicH = 205
let johnM = 70
let johnH = 205

function comparison() {
    let vicBmi = getBMI(vicM,vicH)
    let johnBmi = getBMI(johnM,johnH)

    if (vicBmi > johnBmi) {
        console.log("Is Victor's BMI higher than John's? " + "True")
    }
    else {
        console.log("Is Victor's BMI higher than John's? " + "False")
    }
    
}

function getBMI(mass,height) {
    return mass/height ** 2
}

comparison()