$(document).ready(function(){
    $("#btn1").click(function(event){
        $(".container").show()
   
   
    })
})


    function submitButton() {
        var score = 0;
        const correctAnswer1 = document.questionsList.question1.value;  
        const correctAnswer2 = document.questionsList.question2.value;
        const correctAnswer3 = document.questionsList.question3.value;
        const correctAnswer4 = document.questionsList.question4.value;
        const correctAnswer5 = document.questionsList.question5.value;
        const correctAnswer6 = document.questionsList.question6.value;
        const correctAnswer7 = document.questionsList.question7.value;


        var result = document.getElementById("text");
        if (correctAnswer1 == "3") (score++);
        if (correctAnswer2 == "c") (score++);
        if (correctAnswer3 == "c") (score++);
        if (correctAnswer4 == "a") (score++);
        if (correctAnswer5 == "a") (score++);
        if (correctAnswer6 == "c") (score++);
        if (correctAnswer7 == "c") (score++);



        var scorePercent = (Math.floor(score * 100 / 7));
        if (scorePercent >= 80) {
            result.textContent = score + "/7. Congratulations! You have scored " + scorePercent + "%.  EXCELLENT!!!";
        } else if (scorePercent >= 50) {
            result.textContent = score + "/7. Congratulations, You have scored " + scorePercent + "% . FAIR!";
        }
    
    };
    



