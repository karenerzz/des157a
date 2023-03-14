(function(){
    'use strict';
    console.log('reading js')
    
    //usability testing
    document.querySelector("#continue").addEventListener('click', function(){
        document.getElementById('testing').className = 'hidden';
    })

    //info overlay
    document.querySelector("#info").addEventListener('click', function(){
        document.getElementById('infobox').className = 'showing';
    })
    document.querySelector("#closeinfo").addEventListener('click', function(){
        document.getElementById('infobox').className = 'hidden';
    })

    // // slideshow of photos
    let currentContainer = 1;
    const mainTag = document.querySelector('main');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#previous');
    
    //indicators
    const dot1 = document.querySelector('#slide1');
    const dot2 = document.querySelector('#slide2');
    const dot3 = document.querySelector('#slide3');

    if (mainTag.style.right='0'){
        previous.classList.add('hidebutton');
    } else if (mainTag.style.right='2400px'){
        next.classList.add('hidebutton');

    }


    
    // next button
    next.addEventListener('click', function(){
        console.log('clicked next'); 
        currentContainer ++;
        console.log(currentContainer);

        if (currentContainer > 1) {
            if (currentContainer == 2) { //second container
                mainTag.style.right='1200px';
                dot1.style.backgroundColor = '#d241316f';
                dot2.style.backgroundColor='#D24031';
                previous.classList.remove('hidebutton');
            } else if (currentContainer == 3){ //third container
                mainTag.style.right='2400px';
                dot1.style.backgroundColor = '#d241316f';
                dot2.style.backgroundColor='#d241316f';
                dot3.style.backgroundColor='#D24031';
                next.classList.add('hidebutton');
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


        if (currentContainer == 2) { //second container
            mainTag.style.right='1200px';
            dot1.style.backgroundColor = '#d241316f';
            dot2.style.backgroundColor='#D24031';
            dot3.style.backgroundColor='#d241316f';
            next.classList.remove('hidebutton');
        } else if (currentContainer ==1) { // first container
            mainTag.style.right='0';
            dot1.style.backgroundColor = '#D24031';
            dot2.style.backgroundColor='#d241316f';
            dot3.style.backgroundColor='#d241316f';
            previous.classList.add('hidebutton');
            next.classList.remove('hidebutton');
        } else {
            currentContainer = 1;
            console.log(currentContainer);
        }
        // mainTag.style.left='0';
    })

    
    
    // grandpa overlay
    const picContainer1 = document.querySelector('#picContainer1');
    const grandpa2 = document.querySelector('#grandpa2');

    picContainer1.addEventListener('mouseover', fadeInGrandpa);
    
    function fadeInGrandpa(){
        grandpa2.style.opacity = 1;
    }

    picContainer1.addEventListener('mouseout', fadeOutGrandpa)

    function fadeOutGrandpa(){
        grandpa2.style.opacity = 0;
    }

    document.querySelector('#grandpa2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('coffee').className ='showing';
        picContainer1.removeEventListener('mouseout', fadeOutGrandpa);
    })

    document.querySelector('#closeGrandpa').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('coffee').className ='hidden';
        fadeOutGrandpa();
        picContainer1.addEventListener('mouseout', fadeOutGrandpa);

    })

    // grandma overlay
    const picContainer2 = document.querySelector('#picContainer2');
    const grandma2 = document.querySelector('#grandma2');

    picContainer2.addEventListener('mouseover', fadeInGrandma);
    
    function fadeInGrandma(){
        grandma2.style.opacity = 1;
    }

    picContainer2.addEventListener('mouseout', fadeOutGrandma)

    function fadeOutGrandma(){
        grandma2.style.opacity = 0;
    }

    document.querySelector('#grandma2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('flatRice').className ='showing';
        picContainer2.removeEventListener('mouseout', fadeOutGrandma);
    })

    document.querySelector('#closeGrandma').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('flatRice').className ='hidden';
        fadeOutGrandma();
        picContainer2.addEventListener('mouseout', fadeOutGrandma);

    })

    // mom overlay
    const picContainer3 = document.querySelector('#picContainer3');
    const mom2 = document.querySelector('#mom2');

    picContainer3.addEventListener('mouseover', fadeInMom);
    
    function fadeInMom(){
        mom2.style.opacity = 1;
    }

    picContainer3.addEventListener('mouseout', fadeOutMom)

    function fadeOutMom(){
        mom2.style.opacity = 0;
    }
    document.querySelector('#mom2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('fruit').className ='showing';
        picContainer3.removeEventListener('mouseout', fadeOutMom);
    })

    document.querySelector('#closeMom').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('fruit').className ='hidden';
        fadeOutMom();
        picContainer3.addEventListener('mouseout', fadeOutMom);

    })

    // dad overlay
    const picContainer4 = document.querySelector('#picContainer4');
    const dad2 = document.querySelector('#dad2');

    picContainer4.addEventListener('mouseover', fadeInDad);
    
    function fadeInDad(){
        dad2.style.opacity = 1;
    }

    picContainer4.addEventListener('mouseout', fadeOutDad)

    function fadeOutDad(){
        dad2.style.opacity = 0;
    }
    document.querySelector('#dad2').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('nuggets').className ='showing';
        picContainer4.removeEventListener('mouseout', fadeOutDad);
    })

    document.querySelector('#closeDad').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('nuggets').className ='hidden';
        fadeOutDad();
        picContainer4.addEventListener('mouseout', fadeOutDad);

    })

    // sister overlay
    const picContainer5 = document.querySelector('#picContainer5');
    const sister2 = document.querySelector('#sisterthick');

    picContainer5.addEventListener('mouseover', fadeInSister);
    
    function fadeInSister(){
        sister2.style.opacity = 1;
    }

    picContainer5.addEventListener('mouseout', fadeOutSister);

    function fadeOutSister(){
        sister2.style.opacity = 0;
    }
    document.querySelector('#sisterthick').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('mango').className ='showing';
        picContainer5.removeEventListener('mouseout', fadeOutSister);
    })

    document.querySelector('#closeSister').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('mango').className ='hidden';
        fadeOutSister();
        picContainer5.addEventListener('mouseout', fadeOutSister);

    })

})();