document.getElementById('submit-quiz').addEventListener('click', function() {
    let correctAnswers = 0;
    const questions = document.querySelectorAll('.question');

    questions.forEach(function(question) {
        const options = question.querySelectorAll('input[type="radio"]');
        const feedbackCorrect = question.querySelector('.feedback.correct');
        const feedbackIncorrect = question.querySelector('.feedback.incorrect');

        options.forEach(function(option) {
            if (option.checked && option.value === 'a') {
                feedbackCorrect.style.display = 'block';
                correctAnswers++;
            } else if (option.checked) {
                feedbackIncorrect.style.display = 'block';
            }
        });
    });

    const totalQuestions = questions.length;
    const scorePercentage = (correctAnswers / totalQuestions) * 100;
    const quizResult = document.getElementById('quiz-result');
    quizResult.textContent = `You scored ${correctAnswers} out of ${totalQuestions}.`;
    quizResult.style.display = 'block';
});