// Code your solutions in this file
function writeCards(name){
    const newNames = []
    for (let x = 0; x < name.length; x++){
        newNames[x] = `Thank you, ${name[x]}, for the wonderful surprise gift!`
    }
    return newNames
}

function countDown(num){
    for (let x = num; x >= 0; x--){
        console.log(x)
    }
}