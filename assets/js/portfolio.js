const portfolio = () => {
    const projectArr = [
        {
            name: "hangman",
            number: 3,
            description: "I worked on a hangman game utilizing jQuery, vanilla JavaScript and Bootstrap.",
            active: true
        },
        {
            name: "rpg",
            number: 4,
            description: "This Dragon Quest themed arena fighter uses monsters and sprites from 2001's Dragon Warrior VII.",
            active: true
        },
        {
            name: "trivia",
            number: 5,
            description: "This basic quiz game employs timeouts, counters and GIFs.",
            active: true
        },
        {
            name: "rutgers",
            number: null,
            description: null,
            active: false
        }, 
        {
            name: "rps",
            number: null,
            description: null,
            active: false
        }
    ];

    return (
        $.each(projectArr, ele => {
            let projectFig = $("<figure>");
            projectFig.addClass("card col-xs col-md-4 p-0 mr-4 mb-4 overflow-hidden");
            let projectAnchor = $("<a>").attr("alt", ele.name);
            let projectImg = $("<img>").attr({
                src: `assets/images/${ele.name}.jpg`,
                alt: ele.name
            });
            let projectCardOverlay = $("<div>").addClass("card-img-overlay p-0 d-flex flex-column-reverse").append($("<h3>").addClass("p-2 mb-4 mt-auto text-center").text(ele.name));
            projectAnchor.append(projectImg);
            projectAnchor.append(projectCardOverlay);
            projectFig.append(projectAnchor)
            

            $("#project-figs").append(projectFig);
        }));
    
};

export default portfolio;