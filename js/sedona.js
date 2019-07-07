var form  = document.querySelector('.form-booking');
var btnSearch  = document.querySelector('#init-form-booking');

form.classList.add('form-is-hide');

btnSearch.addEventListener('click', function(evt) {
    evt.preventDefault();
    form.classList.toggle('form-is-hide');
});
