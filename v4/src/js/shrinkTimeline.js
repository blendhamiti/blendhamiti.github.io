var timelineExpanded = false;

function shrinkTimeline() {
    let button = document.getElementById("btn-shrink-timeline");
    let timelineEntries = document.querySelectorAll(".timeline .size-small");

    if (!timelineExpanded) {
        timelineEntries.forEach(entry => {
            entry.style.display = "list-item";
        });
        timelineExpanded = true;
        button.innerHTML = 'Hide <i class="fas fa-angle-up"></i>';
    }
    else {
        timelineEntries.forEach(entry => {
            entry.style.display = "none";
        });
        timelineExpanded = false;
        button.innerHTML = 'Show all <i class="fas fa-angle-down"></i>';
    }

}