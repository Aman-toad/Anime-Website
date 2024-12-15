function showResult() {
  const answers = {
    q1: 'c',
    q2: 'a',
    q3: 'b',
    q4: 'c',
    q5: 'a',
    q6: 'b',
    q7: 'b',
    q8: 'c'
  };

  let score = 0;
  for (let question in answers) {
    const userAnswer = document.querySelector(`input[name='${question}']:checked`);
    if (userAnswer && userAnswer.value === answers[question]){
      score++;
    }
  }

  const result = document.querySelector('.result')
    .innerHTML = `You Scored ${score}/8`;
  
  if (score <= 4){
    document.querySelector('.response').innerHTML = `[ You can do it better ]`;
  }else if (7>= score > 4){
    document.querySelector('.response').innerHTML = `[ Just a little push more]`;
  } else{
    document.querySelector('.response').innerHTML = `[ You Rocked it]`;
  }
}