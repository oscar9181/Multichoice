$(document).ready(function(){
    $("#btn1").click(function(event){
        $(".container").show()
   
   
    })
})

$(document).ready(function(){
    $(".submit").click(function(event){
        $(".container").hide()
   
   
    })
})

    function submitButton() {
        var score = 0;
        const correctAnswer1 = $("input[type=radio][name=question1]:checked").val();
        const correctAnswer2 = $("input[type=radio][name=question2]:checked").val();
        const correctAnswer3 = $("input[type=radio][name=question3]:checked").val();
        const correctAnswer4 = $("input[type=radio][name=question4]:checked").val();
        const correctAnswer5 = $("input[type=radio][name=question5]:checked").val();
        const correctAnswer6 = $("input[type=radio][name=question6]:checked").val();
        const correctAnswer7 = $("input[type=radio][name=question7]:checked").val();


        var result = document.getElementById("text");
        if (correctAnswer1 == "java") (score++);
        if (correctAnswer2 == "1999") (score++);
        if (correctAnswer3 == "Mark Otto") (score++);
        if (correctAnswer4 == "YES") (score++);
        if (correctAnswer5 == "Yes") (score++);
        if (correctAnswer6 == "jQuery effectfadeout()method") (score++);
        if (correctAnswer7 == "You can use JavaScript to create interactive web elements") (score++);


         
        var scorePercent = (Math.floor(score * 100 / 7));
        if (scorePercent >= 80) {
            result.innerHTML = score + "/7. Congratulations! You have scored " + scorePercent + "%.  EXCELLENT!!!";
        } else if (scorePercent >= 50) {
            result.innerHTML = score + "/7. Congratulations, You have scored " + scorePercent + "% . FAIR!";
        }
        else{
            result.innerHTML = score + "Try harder";
        }
    
    };
    



