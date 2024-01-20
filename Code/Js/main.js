const spikesObstacle = $("<img>");
spikesObstacle.attr({
    src: "\\Images\\Obstacles\\Spikes.png",
    alt: "Spikes"
});
spikesObstacle.css({
    height: "6vh",
    width: "3vw"
});

const addCssPositioning = (object) => {
    object.css({
        marginLeft: "100%",
        alignSelf: "flex-end"
    });
}

addCssPositioning(spikesObstacle);

$(document).ready(function(){
    const obstacle = $('.charactes-container').append(spikesObstacle)
});