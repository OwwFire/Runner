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

    //Updating counter
    let counterTimeUpgrader = 200;
    setInterval(() => {
        $('.top-bar-counter-number').text(
            Number($('.top-bar-counter-number').text()) + 1
        )
    }, counterTimeUpgrader);


    //Check if game is over
    setInterval(() => {
        $('.charactes-container').children().each(function () {
            if ($(this).hasClass('runner-character')) return;
            if (areElementsOverlapping($('.runner-character')
                , $(this))) {
                alert('DEAD');
            }
        })
    }, 1);

    function areElementsOverlapping(element1, element2) {
        positionElement1 = element1.position();
        positionElement2 = element2.position();
        positionElement1.left = Math.round(positionElement1.left) +
            Number(
                element1.css('marginLeft').replace('px', '')
            );
        positionElement2.left = Math.round(positionElement2.left) +
            Number(
                element2.css('marginLeft').replace('px', '')
            );
        positionElement1.top = Math.round(positionElement1.top) +
            Number(
                element1.css('marginTop').replace('px', '')
            );
        positionElement2.top = Math.round(positionElement2.top) +
            Number(
                element1.css('marginTop').replace('px', '')
            );
        // Comparing if they are on the same space in the x dimension
        if (positionElement1.left + element1.outerWidth() >= positionElement2.left
            && positionElement1.left <= positionElement2.left
            && positionElement1.top + element1.outerHeight() >= positionElement2.top
            && positionElement1.top <= positionElement2.top)
            return true;
    }
});