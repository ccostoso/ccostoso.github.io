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

    console.log("lastPage", lastPage);
    console.log("currentPage", currentPage);

    $(`#${lastPage}`).removeClass("in-fade");
    $(`#${lastPage}`).toggleClass(`${direction}-fade`);

    setTimeout(function() {
        $(`#${lastPage}`).addClass("d-none");
        $(`#${lastPage}`).toggleClass(`${direction}-fade`);

        $(`#${currentPage}`).toggleClass("d-none in-fade");
        $(`#${currentPage}`).removeClass(`${direction}-fade`);
    }, 400);
}

$(".window-link").on("click", function() {
    event.preventDefault();
    lastPage = currentPage;
    currentPage = $(this).data("name");
    console.log(pageArr.indexOf(currentPage) > pageArr.indexOf(lastPage));
    proceed(lastPage, currentPage);
});