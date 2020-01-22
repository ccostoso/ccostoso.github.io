// import portfolio from './portfolio.js';

$(document).ready(function() {
    

    const pageArr = ["about", "portfolio", "contact"];
    let currentPage = pageArr[0];
    let lastPage;

    function proceed(lastPage, currentPage) {
        let direction;

        if (pageArr.indexOf(lastPage) > pageArr.indexOf(currentPage)) {
            direction = "right";
        } else {
            direction = "left";
        }

        if (lastPage !== currentPage) {
            $(`#${lastPage}`).removeClass("in-fade");
            $(`#${lastPage}`).addClass(`${direction}-fade`);

            setTimeout(function() {
                $(`#${lastPage}`).addClass("invisible");
            }, 350)
        
            setTimeout(function() {
                $(`#${lastPage}`).toggleClass("invisible d-none");
                $(`#${lastPage}`).removeClass(`${direction}-fade`);
        
                $(`#${currentPage}`).removeClass(`${direction}-fade d-none`);
                $(`#${currentPage}`).addClass("in-fade");
            }, 400);
        }
    }

    $(".window-link").on("click", function() {
        event.preventDefault();
        lastPage = currentPage;
        currentPage = $(this).data("name");
        proceed(lastPage, currentPage);
    });

    const projectArr = [
        {
            name: "hangman",
            formattedName: "Hangman",
            number: 3,
            description: "I worked on a hangman game utilizing jQuery, vanilla JavaScript and Bootstrap.",
            active: true
        },
        {
            name: "rpg",
            formattedName: "RPG",
            number: 4,
            description: "This Dragon Quest themed arena fighter uses monsters and sprites from 2001's Dragon Warrior VII.",
            active: true
        },
        {
            name: "trivia",
            formattedName: "Trivia",
            number: 5,
            description: "This basic quiz game employs timeouts, counters and GIFs.",
            active: true
        },
        {
            name: "rutgers",
            formattedName: "Rutgers",
            number: null,
            description: null,
            active: false
        }, 
        {
            name: "rps",
            formattedName: "Rock Paper Scissors",
            number: null,
            description: null,
            active: false
        }
    ];

    $.each(projectArr, (i, ele) => {
        console.log(ele);
        let projectFig = $("<figure>");
        projectFig.addClass("card col-xs col-md-4 p-0 mr-4 mb-4 overflow-hidden");
        let projectAnchor = $("<a>").attr("alt", ele.formattedName);
        let projectImg = $("<img>").attr({
            src: `assets/images/${ele.name}.jpg`,
            alt: ele.formattedName
        });
        let projectCardOverlay = $("<div>").addClass("card-img-overlay p-0 d-flex flex-column-reverse").append($("<h3>").addClass("p-2 mb-4 mt-auto text-center").text(ele.formattedName));
        projectAnchor.append(projectImg);
        projectAnchor.append(projectCardOverlay);
        projectFig.append(projectAnchor)

        $("#project-figs").append(projectFig);
    });
});