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

let movingTime = 5000;
const addMovingAnimation = (object) => {
    object.animate({
        marginLeft: "-20%"
    }, movingTime);
};
