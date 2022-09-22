function check(){//Function to Check the correct answer and display the output
    var score=0;
    var q1 = document.quiz.answer.value;//Fetching the answer
    var q2 = document.quiz.answer1.value;
    var q3 = document.quiz.answer2.value;
    var q4 = document.quiz.answer3.value;
    var q5 = document.quiz.answer4.value;
    var q6 = document.quiz.answer5.value;
    var q7 = document.quiz.answer6.value;
    var q8 = document.quiz.answer7.value;
    var q9 = document.quiz.answer8.value;
    var q10 = document.quiz.answer9.value;
    if (q1=="c. Animation/movie file")//Checking the correct answer
    {score++}
    if (q2=="d. 3 to 30 MHz") 
    {score++}
    if (q3=="c. Programmable Logic Controller") 
    {score++}
    if (q4=="a. Database") 
    {score++}
    if (q5=="a. Amplitude Modulation") 
    {score++}
    if (q6=="c. Operating System") 
    {score++}
    if (q7=="b. Capacitor") 
    {score++}
    if (q8=="a. Field") 
    {score++}
    if (q9=="d. Compact Disc") 
    {score++}
    if (q10=="b. Erasable Programmable Read Only Memory") 
    {score++}//Incrementation of Score
    document.write("Your score is:"  +score);//Display the score

    if (score <= 4)
    {if (score <= 4)
        {document.write("<br>Better Luck next time")};
    }
    else
    {if (score > 4)
        {document.write("<br>Well Done")};
    }

}