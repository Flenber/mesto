const btn = document.querySelector('.profile__button-edit');
const overlay = document.querySelector('.overlay');
const closePopup = document.querySelector('.modal__close');
const name = document.querySelector('.profile__title');
const subTitle = document.querySelector('.profile__subtitle');
const nameinput = document.querySelector('.modal__name');
const profinput = document.querySelector('.modal__prof');
const btnSave = document.querySelector('.modal__save');
const formElement = document.querySelector('.profile__modal-input');
const popup = document.querySelector('.modal');

function closeOverlay(){
    overlay.classList.remove('overlay__open');
}

btn.addEventListener('click', function(){
    overlay.classList.add('overlay__open');
    nameinput.value = name.textContent;
    profinput.value = subTitle.textContent;
})

function handleFormSubmit(evt) {
    evt.preventDefault();
    name.textContent = nameinput.value;
    subTitle.textContent = profinput.value;
    closeOverlay()
}

popup.addEventListener('submit', handleFormSubmit);

closePopup.addEventListener('click', function(){
    overlay.classList.remove('overlay__open')
})

overlay.addEventListener('click', function(event){
    if (event.target === event.currentTarget){
        closeOverlay()
    }
})