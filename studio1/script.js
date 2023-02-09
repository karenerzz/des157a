(function() {
    'use strict';
    console.log('reading js')

    document.querySelector('.finish').addEventListener('click', function(event){
        event.preventDefault();
        document.getElementById('overlay').className='showing';
    });

})();