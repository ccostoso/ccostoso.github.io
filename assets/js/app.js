const pageArr = ["about", "portfolio", "contact"];
let currentPage = pageArr[0];
let lastPage;

function proceed(lastPage, currentPage) {
    let direction;
    console.log(pageArr.indexOf(currentPage));

    if (pageArr.indexOf(lastPage) > pageArr.indexOf(currentPage)) {
        direction = "right";
    } else {
        direction = "left";
    }

    if (lastPage !== currentPage) {
        $(`#${lastPage}`).removeClass("in-fade");
        $(`#${lastPage}`).addClass(`${direction}-fade`);

        setTimeout(function() {
            $(`#${lastPage}`).addClass("d-hidden");
        }, 350)
    
        setTimeout(function() {
            $(`#${lastPage}`).toggleClass("d-hidden d-none");
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
    console.log(pageArr.indexOf(currentPage) > pageArr.indexOf(lastPage));
    proceed(lastPage, currentPage);
});