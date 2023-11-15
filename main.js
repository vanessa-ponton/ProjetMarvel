// Afficher les classes les unes apres les autres

// Afficher la classe "welcome-screen" et quand l'utilisateur clique sur le bouton "c'est parti", lancer la 1ere question
// Afficher la classe "question1-screen" et quand l'utilisateur clique sur le bouton : 2 reponses possibles soit vraie soit faux
// Récolter les résultats et passer à la classe suivante X 2
// Afficher la classe "end-screen" pour afficher le score et la phrase selon le score obtenu
// stocker le score 
let score = 0;
// on doit clic sur c'est parti
const start = document.querySelector("#start");
// cibler les questions
const question1 = document.querySelector("#q1");
const question2 = document.querySelector("#q2");
const question3 = document.querySelector("#q3");
const startQuizz = document.querySelector("#wq");
const endQuizz = document.querySelector("#score");
const span = document.querySelector("span");
// ecouter l'event click
// on affiche la premiere question
// on 
start.addEventListener("click", () => {
    question1.style.display = "block";
    startQuizz.style.display = "none";
})

// apres la reponse de user on passe la question suivante :
const btns = document.querySelectorAll(".question1");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "good-answer") {
            score++
            question1.style.display = "none"
            question2.style.display = "block"
            span.textContent++
        } else {
            question1.style.display = "none"
            question2.style.display = "block"
        }
        console.log("score :>>", score)
    })
})
const btns2 = document.querySelectorAll(".question2");
btns2.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "good-answer") {
            score++
            question2.style.display = "none"
            question3.style.display = "block"
            span.textContent++
        } else {
            question2.style.display = "none"
            question3.style.display = "block"
        }
        console.log("score :>>", score)
    })
})
const btns3 = document.querySelectorAll(".question3");
btns3.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "good-answer") {
            score++
            question3.style.display = "none"
            endQuizz.style.display = "block"
            span.textContent++
        } else {
            question3.style.display = "none"
            endQuizz.style.display = "block"
        } console.log("score :>>", score)
        if (score === 3) {
            span.textContent = ("Bravo vous avez" + " " + `${score}` + " " + "bonnes réponses! Vous êtes un expert!")
        } else if (score === 2) {
            span.textContent = ("Mouais ! vous avez" + " " + `${score}` + " " + "bonnes réponses! Vous ne connaissez pas tout !")
        } else if (score === 1) {
            span.textContent = ("Bof ! vous avez" + " " + `${score}` + " " + "bonne réponse! Vous connaissez pas vraiment cet Univers!")
        } else {
            span.textContent = ("Nul !" + " " + `${score}` + " " + "bonne réponse! Vous ne connaissez pas les Marvel !")
        }
    })

})



