const acordeonTigger = document.querySelectorAll(`.acordeon .tigger`);

acordeonTigger.forEach((tigger) =>{
    tigger.addEventListener('click', (e) =>{
        const acordeon = tigger.parentElement
        const isOpen = acordeon.classList.contains(`Open`)

        if (isOpen) {
            acordeon.classList.remove(`Open`)
        } else {
            acordeon.classList.add(`Open`)
        }
    })
})
