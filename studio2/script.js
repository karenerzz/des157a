(function(){
    'use strict';
    console.log('reading js')



    // // slideshow of photos
    let currentContainer = 1;
    const mainTag = document.querySelector('main');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#previous');

    // next button
    next.addEventListener('click', function(){
        console.log('clicked next'); 
        currentContainer ++;
        console.log(currentContainer);

        if (currentContainer > 1) {
            if (currentContainer == 2) {
                mainTag.style.right='1200px';
            } else if (currentContainer == 3) {
                mainTag.style.right='2400px';
            } else {
                currentContainer = 3;
                console.log(currentContainer);
            } 

        }

    })

    // previous button
    previous.addEventListener('click', function(){
        console.log('clicked previous');
        currentContainer --;
        console.log(currentContainer);


        if (currentContainer == 2) {
            mainTag.style.right='1200px';
        } else if (currentContainer ==1) {
            mainTag.style.right='0';
        } else {
            currentContainer = 1;
            console.log(currentContainer);
        }
        // mainTag.style.left='0';
    })

    // grandpa overlay

    document.querySelector('#grandpa2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('coffee').className ='showing';
    })

    document.querySelector('#closeGrandpa').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('coffee').className ='hidden';

    })

    // grandma overlay
    document.querySelector('#grandma2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('flatRice').className ='showing';
    })

    document.querySelector('#closeGrandma').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('flatRice').className ='hidden';

    })

    // mom overlay
    document.querySelector('#mom2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('fruit').className ='showing';
    })

    document.querySelector('#closeMom').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('fruit').className ='hidden';

    })

    // dad overlay
    document.querySelector('#dad2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('nuggets').className ='showing';
    })

    document.querySelector('#closeDad').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('nuggets').className ='hidden';

    })

    // sister overlay
    document.querySelector('#sisterthick').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('mango').className ='showing';
    })

    document.querySelector('#closeSister').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('mango').className ='hidden';

    })

})();