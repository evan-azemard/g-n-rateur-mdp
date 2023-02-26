const dataLowerCase = "azertyuiopmlkjhgfdsqwxcvbn"
const dataUperCase = dataLowerCase.toUpperCase()
const dataNumbers = "0123456789"
const datasymbole = "$*-/~#!:;'\"."
const submit = document.getElementById("submit")
const lower = document.getElementById("lower")
const up = document.getElementById("up")
const int = document.getElementById("int")
const carac = document.getElementById("spec")
const rangeVlue = document.getElementById("password-lenght")
const passwordOutput = document.getElementById("output")
const cop = document.getElementById("cop")
const generation = () =>  {
    let data = []
    let password = "";
    if (lower.checked) data.push(...dataLowerCase)
    if (up.checked) data.push(...dataUperCase)
    if (int.checked) data.push(...dataNumbers)
    if (carac.checked) data.push(...datasymbole)

    if (data.length === 0){
        alert("Veuiller selectioner des critères")
        return
    }

    for (let i = 0; i < rangeVlue.value; i++){
        password += data[Math.floor(Math.random() * data.length)]
        passwordOutput.innerText = password
    }

    navigator.clipboard.writeText(password)


    cop.style.opacity = 1
    cop.style.transform= "translateX(0)"

    setTimeout(() => {
        cop.style.opacity = 0
        cop.style.transform= "translateX(50px)"
    }, 2000)

}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    generation()
})

// function date() {
//
//     let newDate = new Date().toLocaleDateString("fr-FR", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//         // hour: "numeric",
//         // minute: "numeric"
//     })
//     return newDate
// }
//
// console.log(date())

// let data = {
//     destVar:  ["pseudo", "bonjour"],
//     user:  ["pseudo", "user"],
// }
//
// const { user } = data
//
// console.log(user)



// let arr = ["1", "bonjour", 3]
//
// let [x, y, z] = arr
// console.log(x, y, z)

// let iso = new Date().toISOString()
// const destructuring = (chaine) => {
//
//     let newDate = chaine.split("T")[0]
//     let [y,m,d] = newDate.split("-")
//     return [d,m,y].join("/")
// }
// console.log((destructuring(iso)))

const h = document.querySelector("#output")

console.log(h.dataset.lang)