const btn = document.querySelector('.profile__but-edit');
const modal = document.querySelector('.profile__overlay');
const close = document.querySelector('.profile__modal_close');
const nam = document.querySelector('.profile__title');
const prof = document.querySelector('.profile__subt');
const nameinput = document.querySelector('.profile__modal_name');
const profinput = document.querySelector('.profile__modal_prof');
const btnSave = document.querySelector('.profile__modal_save');
const formElement = document.querySelector('.profile__modal_input');
const popup = document.querySelector('.profile__modal');

function overlay(){
    modal.classList.remove('profile__overlay_open');
}

btn.addEventListener('click', function(){
    modal.classList.add('profile__overlay_open');
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
    modal.classList.remove('profile__overlay_open')
})

modal.addEventListener('click', function(event){
    if (event.target === event.currentTarget){
        overlay()
    }
})