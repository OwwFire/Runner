class Obstacle {
    constructor(imageUrl, altText, heightValue, widthValue, movingTime) {
        this.imageUrl = imageUrl;
        this.altText = altText;
        this.heightValue = heightValue;
        this.widthValue = widthValue;
        this.movingTime = movingTime;

        //Creating the obstacle
        this.obstacle = $("<img>")
            .attr({
                src: imageUrl,
                alt: altText
            }).css({
                height: heightValue,
                width: widthValue
            });
    }

    addCssPositioning() {
        //Adds positioning to the obstacle.
        this.obstacle.css({
            marginLeft: "100%",
            alignSelf: "flex-end"
        });
    }

    addMovingAnimation() {
        this.obstacle.animate({
            marginLeft: "-20%"
        }, this.movingTime);
    };

    clone() {
        const clonedObstacle = new Obstacle(
            this.imageUrl,
            this.altText,
            this.heightValue,
            this.widthValue,
            this.movingTime
        );
        return clonedObstacle;
    }

    addObstacleToGame() {
        // Duplicating the existing obstacle instance
        const duplicateObstacle = this.clone();
        duplicateObstacle.addCssPositioning();
        duplicateObstacle.addMovingAnimation();

        $('.characters-container').append(duplicateObstacle.obstacle);
    }
}