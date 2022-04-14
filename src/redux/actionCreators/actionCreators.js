const { B, A, C, D } = require("../constants/constants")


let changeToRitik = ()=>{
    return {
        type:B
    }
}

let changeToAbhishek = ()=>{
    return {
        type:A
    }
}

let changeToKiran = ()=>{
    return {
        type:C
    }
}

let changeToShiv = ()=>{
    return {
        type:D
    }
}


module.exports = { changeToRitik,changeToAbhishek,changeToKiran,changeToShiv }