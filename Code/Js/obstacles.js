
const spikesObstacle = $("<img>")
    .attr({
        src: "\\Images\\Obstacles\\Spikes.png",
        alt: "Spikes"
    }).css({
        height: "7vh",
        width: "3vw"
    });
const addCssPositioning = (object) => {
    object.css({
        marginLeft: "100%",
        alignSelf: "flex-end"
    });
};

let movingTime = 5000; // Time from one side to another

const addMovingAnimation = (object) => {
    object.animate({
        marginLeft: "-20%"
    }, movingTime);
};

function addObstacle(object) {
    //Duplicates an obstacle and adds all needed attr and css to it.
    const DuplicateObject = object.clone();
    addCssPositioning(DuplicateObject);
    addMovingAnimation(DuplicateObject);

    $('.charactes-container').append(DuplicateObject);
};
