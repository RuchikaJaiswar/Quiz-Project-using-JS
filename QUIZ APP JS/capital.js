function check(){
    var score=0;
    var q1 = document.quiz.answer.value;
    var q2 = document.quiz.answer1.value;
    var q3 = document.quiz.answer2.value;
    var q4 = document.quiz.answer3.value;
    var q5 = document.quiz.answer4.value;
    var q6 = document.quiz.answer5.value;
    var q7 = document.quiz.answer6.value;
    var q8 = document.quiz.answer7.value;
    var q9 = document.quiz.answer8.value;
    var q10 = document.quiz.answer9.value;
    if (q1=="a. Mumbai") 
    {score++}
    if (q2=="c. Dehradun") 
    {score++}
    if (q3=="a. Assam") 
    {score++}
    if (q4=="b. Srinagar") 
    {score++}
    if (q5=="a. West Bengal") 
    {score++}
    if (q6=="c. Chandigarh") 
    {score++}
    if (q7=="a. Shimla") 
    {score++}
    if (q8=="a. Panaji") 
    {score++}
    if (q9=="a. Sikkim") 
    {score++}
    if (q10=="a. Kerala") 
    {score++}
    document.write("Your score is:"  +score);

    if (score <= 4)
    {if (score >= 4)
        {document.write("<br>Better Luck next time")};
    }
    else
    {if (score > 4)
        {document.write("<br>Well Done")};
    }

}