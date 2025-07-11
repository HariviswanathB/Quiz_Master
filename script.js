function calculateScore(callback) {
    const answers = {
      q1: "6",
      q2: "4",
      q3: "2",
    };
  
    const userAnswers = {
      q1: document.getElementById("q1").value.trim(),
      q2: document.getElementById("q2").value.trim(),
      q3: document.getElementById("q3").value.trim(),
    };
  
    const score = callback(answers, userAnswers);
    document.getElementById("scoreOutput").textContent = `Your score is: ${score}/3`;
  }
  
function strictScoring(correct, user) {
    let score = 0;
    for (let key in correct) {
      if (correct[key].toLowerCase() === user[key].toLowerCase()) {
        score++;
      }
    }
    return score;
  }
  
function lenientScoring(correct, user) {
    let score = 0;
    for (let key in correct) {
      if (user[key].toLowerCase().includes(correct[key].toLowerCase().substring(0, 3))) {
        score++;
      }
    }
    return score;
  }
  
  document.getElementById("checkScoreBtn").addEventListener("click", () => {
    calculateScore(strictScoring); 
  });
