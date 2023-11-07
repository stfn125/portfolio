document.getElementById('logo').onclick = function () {
    window.location.href = './home.html'
}

document.querySelector('.see-my-work').onclick = function () {
    window.location.href = './project.html'
}

$(document).ready(function () {
    $('.intro-title').addClass('show')
    $('.intro-pharse').addClass('show')
    $('.see-more').addClass('show')

});


