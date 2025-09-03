const enterAmount = document.getElementById("enter-amount")
const convertBtn = document.getElementById("convert-btn")
const lengthMes = document.getElementById("length-desc")
const volumeMes = document.getElementById("volume-desc")
const massMes = document.getElementById("mass-desc")

//1 meter = 3.281 feet
//1 liter = 0.264 gallon
//1 kilogram = 2.204 pound

convertBtn.addEventListener("click", function () {
    let num = Number(enterAmount.value)

    let text1 = `${num} meters = ${(num * 3.281).toFixed(3)} feet | ${num} feet = ${(num * 0.304785).toFixed(3)} meters`
    lengthMes.textContent = text1

    let text2 = `${num} liters = ${(num * 0.264).toFixed(3)} gallons | ${num} gallons = ${(num * 3.787878).toFixed(3)} liters`
    volumeMes.textContent = text2

    let text3 = `${num} kilos = ${(num * 2.204).toFixed(3)} pounds | ${num} pounds = ${(num * 0.45372).toFixed(3)} kilos`
    massMes.textContent = text3
})