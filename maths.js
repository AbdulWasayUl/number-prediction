var answer;
var score = 0;
var backgroundImages = []
function nextQuestion(){
    const n1 = Math.floor(Math.random() * 5);
    const n2 = Math.ceil(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer(){
    const prediction = predictImage();
    console.log(prediction);
    console.log(answer);

    if(prediction == answer){
        score++;
        if(score<7){
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        }
        else{
            alert('Congrats!! You finished the quiz');
            score = 0;
            backgroundImages = [];
        }
    }
    else{
        if(score > 0){
            score--;
            alert('Wrong!')
            setTimeout(function(){
                backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
            }, 1000)
        }
    }
    console.log('Score:'+score)
}