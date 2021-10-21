let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("saved-el")
console.log(saveEl)
console.log(countEl)


let count= 0;
let total= 0;
let saved= 0;

function addOne() {
        count += 1;
        console.log(count)
        countEl.innerText = count
}
function save() {
        saved= count + ' - '
        saveEl.textContent += saved;
        
        
        total += count;
        count= 0;
        countEl.innerHTML =count;
        console.log(total)
}

function done(){
        document.getElementById("done").innerHTML = "Your Final Total is "+ total;
}



