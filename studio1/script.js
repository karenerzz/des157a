(function() {
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myForm');
    // top left corner
    const myAdjNum = document.querySelector('#myAdjNum');

    // top right corner
    const myVerb1 = document.querySelector('#myVerb1');

    //bottom left corner
    const myNoun1 = document.querySelector('#myNoun1');

    //bottom right corner
    const myDesAdj = document.querySelector('#myDesAdj');


    // document.querySelector('.finish').addEventListener('click', function(event){
    //     event.preventDefault();
    //     document.getElementById('overlay').className='showing';
    // });

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        document.getElementById('overlay').className='showing';

        const adj1 = document.querySelector('#adjective1').value;
        const number1 = document.querySelector('#number1').value;
        const verb1 = document.querySelector('#verb1').value;
        const noun1= document.querySelector('#noun1').value;
        const destination1 =document.querySelector('#destination1').value;
        const adj2 = document.querySelector('#adjective2').value;
        const myText1 = `Introducing ${adj1} ${number1}`;
        const myText2 = `${verb1}`;
        const  myText3 = `Scientifically proven to reduce the appearance of ${noun1} on your skin. Your skin will be brand new.`;
        const  myText4 = `From ${destination1}, this hydrating formula will give your skin a(n) ${adj2} look. Each application is 10x more effective`;
        myAdjNum.innerHTML = myText1;
        myVerb1.innerHTML = myText2;
        myNoun1.innerHTML = myText3;
        myDesAdj.innerHTML = myText4;


    })

})();