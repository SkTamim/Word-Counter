/*================================
Click Event For Answer 1 Start
=================================*/
let plusIcon = document.getElementById("plusIcon_1");
let answerQuestion_1 = document.querySelector(".answer_question_1");
plusIcon.addEventListener("click",function(){
    if(plusIcon.classList[1] == "fa-plus-square"){  
    plusIcon.classList.replace("fa-plus-square","fa-minus-square");
    answerQuestion_1.style.display = "block";
    }else{
        plusIcon.classList.replace("fa-minus-square","fa-plus-square");
        answerQuestion_1.style.display = "none";
    }
});
/*================================
Click Event For Answer 1 End
=================================*/

/*================================
Click Event For Answer 2 Start
=================================*/
let plusIcon_2 = document.getElementById("plusIcon_2");
let answerQuestion_2 = document.querySelector(".answer_question_2");
plusIcon_2.addEventListener("click",function(){
    if(plusIcon_2.classList[1] == "fa-plus-square"){  
    plusIcon_2.classList.replace("fa-plus-square","fa-minus-square");
    answerQuestion_2.style.display = "block";
    }else{
        plusIcon_2.classList.replace("fa-minus-square","fa-plus-square");
        answerQuestion_2.style.display = "none";
    }
});
/*================================
Click Event For Answer 2 End
=================================*/

/*================================
Counter Start
=================================*/
let mainText = document.querySelector("#mainText");
mainText.addEventListener("keyup",function(){
    let allWords = mainText.value;
    	
        // Counting Characters
        let Characters = document.getElementById("Characters");
        Characters.innerText = allWords.length;

        // Counting Words
        let Words = document.getElementById("Words");
        totalCharactersLength = allWords.trim().split(new RegExp("\\s+"));
        Words.innerText = totalCharactersLength.length;
        
        // Counting Centences
        let Counter = 0;
        for(let i = 0; i < allWords.length; i++){
            if(allWords.charAt(i) == `.`){
              let incriment = Counter++;
                Sentences.innerText = incriment + 1;
            }
        }
});
/*================================
Counter End
=================================*/
