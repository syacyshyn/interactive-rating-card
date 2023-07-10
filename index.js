
let allRatingButtons = document.getElementsByClassName("rating-button");
let currentButtonClicked;


for (let ratingButton of allRatingButtons) {
    ratingButton.onclick = function () {
        ratingButton.style.backgroundColor = "hsl(25, 97%, 53%)";
        ratingButton.style.color = "white";


        if (currentButtonClicked !== undefined) {
            currentButtonClicked.style.backgroundColor = "hsl(213, 19%, 25%)";
            currentButtonClicked.style.color = "hsl(217, 12%, 63%)";
        }
        currentButtonClicked = ratingButton;
    }
}

let submitButton = document.getElementById("submit-button");
submitButton.onclick = function () {
    if (currentButtonClicked !== undefined) {
        let chosenRating;
        switch (currentButtonClicked.id) {
            case "button-one":
                chosenRating = 1;
                break;
            case "button-two":
                chosenRating = 2;
                break;
            case "button-three":
                chosenRating = 3;
                break;
            case "button-four":
                chosenRating = 4;
                break;
            case "button-five":
                chosenRating = 5;
                break;
        }
        document.getElementById("you-selected-paragraph").innerText = `You selected ${chosenRating} out of 5`;
    } else {
        alert("Please select a rating before clicking submit.");
    }
}

