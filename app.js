const RESULT_WINDOW = document.querySelector('.operations__result');

window.addEventListener('click', e => {
    if (e.target.className !== 'row') return;

    RESULT_WINDOW.innerText += e.target.innerText;
});