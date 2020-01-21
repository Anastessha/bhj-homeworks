'use srict'

let tooltip = document.querySelectorAll('.has-tooltip');


for (let i = 0; i < tooltip.length; i++) {
    tooltip[i].addEventListener('click', (event) => {

        event.preventDefault();

        if (tooltip[i].querySelector('.tooltip')) {
            tooltip[i].querySelector('.tooltip').remove()
            return
        } else if (document.querySelector('.tooltip')) {
            document.querySelector('.tooltip').remove();
        }
    })
}

