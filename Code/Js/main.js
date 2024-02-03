$(document).ready(function () {
    addObstacle(spikesObstacle);

    //Jump functionlity
    let jumpFlag = false;
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
            }, 500)
            setTimeout(() => {
                $('.runner-character').animate({
                    marginBottom: '0',
                    alignSelf: "flex-end"
                }, 500)
            }, 500)
            
            //Setting the flag back when the jump stops
            setTimeout(() => {
                jumpFlag = false;
            }, 1000)
        });
});