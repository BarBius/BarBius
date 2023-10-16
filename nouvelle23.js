function toggleClass(button) {
    button.classList.toggle('selected');
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {   //anonyme fleche = () => { //
        toggleClass(this);
    });
});