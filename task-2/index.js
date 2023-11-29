const button = document.getElementById('download');
const list = document.querySelector('.books-container');

button.addEventListener('click', async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000');
        const data = await response.json();
        appendDataToList(data);
    } catch (error) {
        console.error('Error get data:', error);
    }
});

function appendDataToList(data) {
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.author; 
        list.appendChild(listItem);
    });
}