let modal = document.querySelector('.modal');
let button = document.getElementById('quoteBtn');
let closeBtn = document.querySelector('.close');

modal.onclick = function() {
    modal.style.display = 'block';
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}