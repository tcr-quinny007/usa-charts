function check() {
    let c = 0;
    const q1 = document.quiz.question1.value;
    const q2 = document.quiz.question2.value;
    const q3 = document.quiz.question3.value;
    const q4 = document.quiz.question4.value;
    const q5 = document.quiz.question5.value;
    const q6 = document.quiz.question6.value;
    const q7 = document.quiz.question7.value;
    const q8 = document.quiz.question8.value;
    const q9 = document.quiz.question9.value;
    const q10 = document.quiz.question10.value;
    const q11 = document.quiz.question11.value;
    const q12 = document.quiz.question12.value;
    const q13 = document.quiz.question13.value;
    const q14 = document.quiz.question14.value;
    const q15 = document.quiz.question15.value;
    const result = document.getElementById('result');
    const quiz = document.getElementById('quiz');
    const gif = document.getElementById('gif');

    if (q1 === "27") {c++}
    if (q2 === "first-postmaster") {c++}
    if (q3 === "Wilson") {c++}
    if (q4 === "no-one-above") {c++}
    if (q5 === "ratify-a-to-const") {c++}
    if (q6 === "Six") {c++}
    if (q7 === "Roberts") {c++}
    if (q8 === "435") {c++}
    if (q9 === "Adams") {c++}
    if (q10 === "1787") {c++}
    if (q11 === "NY") {c++}
    if (q12 === "California") {c++}
    if (q13 === "Washington") {c++}
    if (q14 === "Banner") {c++}
    if (q15 === "4") {c++}
    quiz.style.display="none";

    if (c <= 7) {
        result.textContent = `Your result is ${c}/15. That's not so good. Study more to be able to enter the country.`
    } else {
        result.textContent = `Your result is ${c}/15. That\'s awesome! Welcome to the United States of America!`
        gif.innerHTML = '<img src="https://media.giphy.com/media/bHfHm8pkMD99C/giphy.gif" alt="Welcome to America!">'
    }
}
