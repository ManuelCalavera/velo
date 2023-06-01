// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
function save() {
    let prev = count + " - "
    saveEl.textContent +=  prev
    countEl.textContent = 0
    count=0

}
