const spikesObstacle = $("<img>")
    .attr({
        src: "\\Images\\Obstacles\\Spikes.png",
        alt: "Spikes"
    }).css({
        height: "6vh",
        width: "3vw"
    });

const addCssPositioning = (object) => {
    object.css({
        marginLeft: "100%",
        alignSelf: "flex-end"
    });
}

const addMovingAnimation = (object) => {
    object.animate({
        marginLeft: "-20%"
    }, 5000);
};

addCssPositioning(spikesObstacle);
addMovingAnimation(spikesObstacle);

$(document).ready(function () {
    const obstacle = $('.charactes-container').append(spikesObstacle);
});