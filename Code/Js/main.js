$(document).ready(function () {
    addObstacle(spikesObstacle);

    //Jump functionlity
    let jumpFlag = false;
    let jumpTime = 1000;
    $(document).on('keyup', (event) => {
        if (jumpFlag ||
            (event.key !== 'ArrowUp' &&
                event.key !== ' ' &&
                event.key !== 'w'))
            return; //If wrong key or a jump is in progress leave
        jumpFlag = true;

        $('.runner-character').animate({
            marginBottom: '15vh',
            alignSelf: "flex-end"
        }, jumpTime / 2)
        setTimeout(() => {
            $('.runner-character').animate({
                marginBottom: '0',
                alignSelf: "flex-end"
            }, jumpTime / 2)
        }, jumpTime / 2)

        //Setting the flag back when the jump stops
        setTimeout(() => {
            jumpFlag = false;
        }, jumpTime)
    });

    //Check if game is over
    setInterval(() => {
        $('.charactes-container').children().each(function() {
            if ($(this).hasClass('runner-character')) return;
            if(areElementsOverlapping($('.runner-character')
            , $(this))){
                alert('DEAD');
            }
        })
    }, 1);

    function areElementsOverlapping(element1, element2) {
        var element1Left = element1.css('margin-left');
        var element2Left = element2.css('margin-left');
        console.log('Check1:' + element1Left + element1.width()/2 + ", " +
                    element2Left)

    
        // Comparing if they are on the same space in the x dimension
        if ((element1Left + element1.width()/2 >= element2Left &&
            element1Left - element1.width()/2 <= element2Left) ||
            (element2Left + element2.width()/2 >= element1Left &&
            element2Left - element2.width()/2 <= element1Left))
            return true;
      }
});