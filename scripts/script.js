const btn = document.querySelector('.profile__button-edit');
const overlay = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
const name = document.querySelector('.profile__title');
const subTitle = document.querySelector('.profile__subtitle');
const nameinput = document.querySelector('.popup__text_name');
const profinput = document.querySelector('.popup__text_prof');
const btnSave = document.querySelector('.popup__save');
const formElement = document.querySelector('.profile__modal-input');
const popup = document.querySelector('.popup__form');

function closeOverlay(){
    overlay.classList.remove('popup_open');
}

btn.addEventListener('click', function(){
    overlay.classList.add('popup_open');
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
    closeOverlay()
})

overlay.addEventListener('click', function(event){
    if (event.target === event.currentTarget){
        closeOverlay()
    }
})