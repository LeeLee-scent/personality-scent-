// ... (script.js 的其他程式碼保持不變) ...

let currentQuestionElement = null; // 新增：用於追蹤當前問題元素

function renderQuestion(){
  const q = questions[current];

  // 檢查是否為第一道問題
  if (current === 0) {
    questionImage.src = q.image;
    questionImage.classList.remove('question-transition-in');
    questionTitle.textContent = q.question;
    answersDiv.innerHTML = '';
    currentSelection = null;
    progressText.textContent = `第 ${current + 1} 題 / ${total} 題`;
    nextBtn.style.display = 'none';

    q.answers.forEach((a) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = a.text;
      btn.style.color = "#3b2f2f";
      btn.dataset.type = a.type;
      btn.addEventListener('click', () => selectAnswer(btn));
      answersDiv.appendChild(btn);
    });

    currentQuestionElement = document.querySelector('#quiz .card');
    return;
  }

  // 離開當前問題的動畫
  const currentCard = document.getElementById('quiz').querySelector('.card');
  currentCard.classList.add('question-transition');

  currentCard.addEventListener('animationend', () => {
    // 當動畫結束後，更新內容並開始新問題的動畫
    questionImage.src = q.image;
    questionTitle.textContent = q.question;
    answersDiv.innerHTML = '';
    currentSelection = null;
    progressText.textContent = `第 ${current + 1} 題 / ${total} 題`;
    nextBtn.style.display = 'none';

    q.answers.forEach((a) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = a.text;
      btn.style.color = "#3b2f2f";
      btn.dataset.type = a.type;
      btn.addEventListener('click', () => selectAnswer(btn));
      answersDiv.appendChild(btn);
    });

    currentCard.classList.remove('question-transition');
    currentCard.classList.add('question-transition-in');
  }, { once: true });
}

// ... (script.js 的其他程式碼保持不變) ...
