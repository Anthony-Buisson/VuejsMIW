$.ajax({
    url: './choix_js.json',
    datatype: 'json',
    success: function (options) {
        options.each((option) => {
            $('select')[0].innerHTML += `<option value="${option.value}">${option.label}</option>`;
        });
        $('select')[0].innerHTML += `<option value="constructor.constructor('alert(\'Bonjour\')')()">Gandalf</option>`;
    }
});

$('button').click(() => {
    $.ajax({
        url: 'http://miw.spipha.fr:3000/api/contest_js',
        data: {
            name: $('#name').val(),
            choix: $('#choix').val(),
        },
        method: 'POST'
    });
});
