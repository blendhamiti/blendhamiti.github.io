$('.certificates-thumbnail').on('click', function () {
    $('#certificates-overlay')
        .css({ backgroundImage: `url(${this.src})` })
        .addClass('open')
        .one('click', function () { $(this).removeClass('open'); });
});