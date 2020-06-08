$(document).ready(function () {
    $(".icon-line2-camera").hover(function () {
        $(this).addClass("rotate-scale-up");
    }, function () {
        $(this).removeClass("rotate-scale-up");
    });
    $(".icon-line2-camera").click(function () {
        $(this).closest(".flip-card").toggleClass("hovered");
    });
});



function dragStart(ev) {
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 0, 0);
    return true;
}
function dragEnter(ev) {
    event.preventDefault();
    return true;
}
function dragOver(ev) {
    return false;
}
function dragDrop(ev) {
    var src = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(src));
    ev.stopPropagation();
    return false;
}