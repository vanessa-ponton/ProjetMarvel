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
        } else {
            question1.style.display = "none"
            question2.style.display = "block"
        }

    })
})

/*question2.addEventListener("click", () => {
    question3.style.display = "block";
    question2.style.display = "none";
})
*/