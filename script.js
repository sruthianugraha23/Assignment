fetch('question.json')
  .then(response => response.json())
  .then(data => {
    const questions = data.questions;
    let currentQuestionIndex = 0;

    const questionElement = document.querySelector('.question');
    const optionsForm = document.querySelector('.options');
    const nextButton = document.getElementById('nextBtn');

    function displayQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;

      optionsForm.innerHTML = '';
      currentQuestion.options.forEach(option => {
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = 'option';
        optionInput.value = option;

        const optionLabel = document.createElement('label');
        optionLabel.textContent = option;

        optionsForm.appendChild(optionInput);
        optionsForm.appendChild(optionLabel);
        optionsForm.appendChild(document.createElement('br'));
      });
    }

    displayQuestion();

    nextButton.addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        alert('End of Quiz!');
      }
    });
  })
  .catch(error => console.error('Error fetching quiz questions:', error));
