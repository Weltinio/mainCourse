const John = {
    fullName: 'John',
    height: 2.6,
    mass: 80,
    getBMI: function () {
        return this.mass / this.height ** 2    
    },
};

const Victor = {
    fullName: 'Victor',
    height: 2.6,
    mass: 80,
    getBMI: function () {
        return this.mass / this.height ** 2    
    },
};

let JohnBMI = John.getBMI()
let VictorBMI = Victor.getBMI()

function compareBMI() {
    if (VictorBMI > JohnBMI) {
        return Victor.fullName + VictorBMI
    } 
    else if (VictorBMI < JohnBMI) {
        return John.fullName + JohnBMI
    }   
    else (VictorBMI == JohnBMI) 
        return Victor.fullName + VictorBMI + John.fullName + JohnBMI
    
}

