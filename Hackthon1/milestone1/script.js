// script.ts
document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        var header = section.querySelector('h2');
        if (header) {
            header.addEventListener('click', function () {
                section.classList.toggle('collapsed');
            });
        }
    });
});
