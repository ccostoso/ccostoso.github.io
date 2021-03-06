export function projectPage() {
    const projectArr = [
        {
            name: "rpg",
            formattedName: "RPG",
            github: "Homework4",
            description: "<p>This Dragon Quest themed arena fighter uses monsters and sprites from 2001's Dragon Warrior VII. Technologies used include Bootstrap and jQuery.</p><p>You can find the deployed project <a href=\"https://ccostoso.github.io/Homework4/\">here</a>.</p>",
            active: true
        },
        {
            name: "trivia",
            formattedName: "Trivia",
            github: "Homework5",
            description: "<p>This basic quiz game employs timeouts, counters and GIFs. Technologies used include Bootstrap and jQuery.</p><p>You can find the deployed project <a href=\"https://ccostoso.github.io/Homework5/\">here</a>.</p>",
            active: true
        },
        {
            name: "nyt",
            formattedName: "NYT Scraper",
            github: "NYT-Scraper",
            description: "<p>This app uses a MongoDB database to store article headlines scraped with the cheerio Node package module from the New York Times front page.</p><p>You can find the deployed project <a href=\"https://cjc-nyt-scraper.herokuapp.com/\">here</a>.</p>",
            active: false
        }, 
        {
            name: "mutuaid",
            formattedName: "MutuAid",
            github: "Covid-19-Mutual-Aid",
            description: "<p>I led a team to develop a Reddit-like application to connect people trying to build local mutual aid networks. Technologies used include MongoDB/Mongoose, Express, React, Node, Passport and react-intl.</p><p>You can find the deployed project <a href=\"https://mutuaid.herokuapp.com/\">here</a>.</p>",
            active: false
        }
    ];
    
    $.each(projectArr, (i, ele) => {
        console.log(ele);
        let projectFig = $("<figure>");
        projectFig.mouseover(function() {
            $("#project-desc").html(ele.description);
        })
        projectFig.addClass("card col-xs col-md-4 p-0 mr-4 mb-4 overflow-hidden");
        let projectAnchor;
        if (ele.active) {
            projectAnchor = $("<a>").attr({
                href: `https://github.com/ccostoso/${ele.github}`,
                alt: ele.formattedName
            });
        } else {
            projectAnchor = $("<a>").attr({
                alt: ele.formattedName,
            });
        }
        let projectImg = $("<img>").attr({
            src: `assets/images/${ele.name}.gif`,
            alt: ele.formattedName,
            class: "demo-img"
        });
        let projectCardOverlay = $("<div>").addClass("card-img-overlay p-0 d-flex flex-column-reverse").append($("<h3>").addClass("p-2 mb-4 mt-auto text-center").text(ele.formattedName));
        projectAnchor.append(projectImg);
        projectAnchor.append(projectCardOverlay);
        projectFig.append(projectAnchor);
    
        $("#project-figs").append(projectFig);
    });
}