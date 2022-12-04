const btn = document.querySelector('.profile__but-edit');
const modal = document.querySelector('.profile__overlay');
const close = document.querySelector('.profile__modal-close');
const nam = document.querySelector('.profile__title');
const prof = document.querySelector('.profile__subt');
const nameinput = document.querySelector('.profile__modal-name');
const profinput = document.querySelector('.profile__modal-prof');
const btnSave = document.querySelector('.profile__modal-save');
const formElement = document.querySelector('.profile__modal-input');
const popup = document.querySelector('.profile__modal');

function overlay(){
    modal.classList.remove('profile__overlay-open');
}

btn.addEventListener('click', function(){
    modal.classList.add('profile__overlay-open');
    nameinput.value = nam.textContent;
    profinput.value = prof.textContent;
})

function handleFormSubmit(evt) {
    evt.preventDefault();
    nam.textContent = nameinput.value;
    prof.textContent = profinput.value;
    overlay()
}

modal.addEventListener('submit', handleFormSubmit);

close.addEventListener('click', function(){
    modal.classList.remove('profile__overlay-open')
})

modal.addEventListener('click', function(event){
    if (event.target === event.currentTarget){
        overlay()
    }
})