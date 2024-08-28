const x = function(){
    console.log(10)
}

let number = 15
document.querySelector(`.check`).addEventListener(`click`, function(number)){
    console.log(document.querySelector(`.guess`).value);
    if (number === 15;){
        document.querySelector(`.message.`).textContent = `Gagné`
    }
}