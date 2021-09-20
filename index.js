function writeCards(names, event) {
    let arr1 = []
    for (let i = 0; i < names.length; i++) {
        arr1.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    }
    return arr1
}
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise")

function countDown(num) {

    while (num >= 0) {
        console.log(num--);

    }
    return num
}
countDown(11)