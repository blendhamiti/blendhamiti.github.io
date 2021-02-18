document.querySelectorAll(".icon-block span").forEach(container => {
    container.title = container.childNodes.item(0).classList[0].split("-", "2")[1];
});