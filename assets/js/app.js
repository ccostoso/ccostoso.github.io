const pageArr = ["about", "portfolio", "contact"];
let currentPage = pageArr[0];
let lastPage;

function proceed(lastPage, currentPage) {
    // debugger;
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
    // $(`#${lastPage}`).toggleClass("d-none");

    setTimeout(function() {
        $(`#${lastPage}`).toggleClass("d-none");
        $(`#${lastPage}`).toggleClass(`${direction}-fade`);


        if (direction === "right") {
                // windowNum++;
                $(`#${currentPage}`).toggleClass("d-none in-fade");
        } else {
                // windowNum--;
                // $(".num-input").text(windowNum)
                $(`#${currentPage}`).toggleClass("d-none in-fade");
                $(`#${currentPage}`).removeClass(`${direction}-fade`);
        }
    }, 400);
}

$(".window-link").on("click", function() {
    event.preventDefault();
    lastPage = currentPage;
    currentPage = $(this).data("name");
    console.log(pageArr.indexOf(currentPage) > pageArr.indexOf(lastPage));
    proceed(lastPage, currentPage);
});

// function proceed(action) {
//     var direction;
//     if (!action) {
//         direction = "left";
//     } else {
//         direction = "right";
//     }

//     $(`[data-qnum="${windowNum}"]`).removeClass("in-fade");
//     $(`[data-qnum="${windowNum}"]`).toggleClass(`${direction}-fade`);

//     setTimeout(function() {
//         $(`[data-qnum="${windowNum}"]`).toggleClass("d-none");
//         $(`[data-qnum="${windowNum}"]`).toggleClass(`${direction}-fade`);


//         if (!action) {
//                 windowNum++;
//                 $(".num-input").text(windowNum)
//                 $(`[data-qnum="${windowNum}"]`).toggleClass("d-none in-fade");
//         } else {
//                 windowNum--;
//                 $(".num-input").text(windowNum)
//                 $(`[data-qnum="${windowNum}"]`).toggleClass("d-none in-fade");
//                 $(`[data-qnum="${windowNum}"]`).removeClass(`${direction}-fade`);
//         }
//     }, 400);
// }