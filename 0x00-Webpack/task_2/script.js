import _ from 'lodash';

let count = 0;

function updateCounter() {
    count++;
    document.getElementById('count').innerText = `${count} clicks on the button`;
}

const debouncedUpdateCounter = _.debounce(updateCounter, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    button.addEventListener('click', debouncedUpdateCounter);
});