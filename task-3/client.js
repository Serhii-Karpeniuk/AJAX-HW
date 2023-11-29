document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000');
        const userData = await response.json();
        renderUserInfo(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});

function renderUserInfo(userData) {
    const userInfoContainer = document.getElementById('user-info');
    userInfoContainer.innerHTML = `
        <img src="${userData.avatar}" alt="User Avatar">
        <p>Name: ${userData.name}</p>
        <p>Age: ${userData.age}</p>
        <p>Gender: ${userData.gender}</p>
        <p>Country: ${userData.country}</p>
        <p>Login: ${userData.login}</p>
        <p>Password: ${userData.password}</p>
        <p>Email: ${userData.email}</p>
    `;
}