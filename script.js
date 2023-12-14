$(document).ready(function () {
    $('.filter-buttons button').on('click', function () {
        const filter = $(this).data('filter');

        $('.filter-buttons button').removeClass('active');
        $(this).addClass('active');

        if (filter === 'all') {
            $('.content .item').css('opacity', '1');
        } else {
            $('.content .item').css('opacity', '0.3');
            $(`.content .item.${filter}`).css('opacity', '1');
        }
    });
});