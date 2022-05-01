sendForm = () => {

    const btnOpenModal = document.querySelector('.card-details__button_delivery')
    const modal = document.querySelector('.modal')
    const btnCloseModal = document.querySelector('.modal__close')
    const modalTitle = modal.querySelector('.modal__title')
    const cardDetailsTitle = document.querySelector('.card-details__title')


    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTitle.textContent = cardDetailsTitle.textContent
    })
    btnCloseModal.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

sendForm()