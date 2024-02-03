$(document).ready(function () {
    addObstacle(spikesObstacle);

    //Jump functionlity
    let jumpFlag = false;
    $(document).on
        ('keydown', (event) => {
            if (!jumpFlag &&
                event.key !== 'ArrowUp' &&
                event.key !== ' ') return;
            $('.runner-character').animate({
                marginBottom: '15vh',
                alignSelf: "flex-end"
            }, 500)
            jumpFlag = true;
            setTimeout(() => {
                $('.runner-character').animate({
                    marginBottom: '0',
                    alignSelf: "flex-end"
                }, 500)
                jumpFlag = false;
            }, 500)
        });
});