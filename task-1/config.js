const button = document.getElementById('button')

button.addEventListener('click', async ()=> {
    try {
        const response = await fetch('http://127.0.0.1:3000');
        const data = await response.text();
        button.textContent = data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
})