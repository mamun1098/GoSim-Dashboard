$(document).on("click", ".dropdown-menu .dropdown-item", function (e) {
    e.preventDefault();

    const flag = $(this).data("flag");
    const text = $(this).text();

    $(this)
        .closest(".dropdown")
        .find(".flag_dropdown")
        .html(
            "<span class='flag-icon flag-icon-" + flag + " me-1'></span> " +
            "<span>" + text + "</span>"
        );
});