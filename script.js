const container = document.querySelector(".container");
const display = document.querySelector(".display");
const Btn = document.querySelector("#eqalbtn");

container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.innerHTML === "AC") {
            display.value = ""
        } else if (e.target.innerHTML === "DE") {
            display.value = display.value.toString().slice(0, -1);
        } else if (e.target.innerHTML === "X") {
            display.value += "*"
        } else if (e.target.id == "eqalbtn") {
            eqalbtn()
        } else {
            display.value += e.target.innerHTML;
        }
    }
})

function eqalbtn() {
    if (display.value === "") {
        Btn.style.background = "red"
        setTimeout( ()=>{
            Btn.style.background = "transparent";
        },2000)
    }else{
        display.value = eval(display.value)
    }
}