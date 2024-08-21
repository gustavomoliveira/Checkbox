//checkboxes: troca de classes com js;
let checkbox = document.querySelectorAll('.checkbox');

checkbox.forEach(e => {
    e.addEventListener('click', function() {
        this.classList.toggle('checkbox--checked');
    });
})



