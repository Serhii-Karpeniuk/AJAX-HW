const http = require('http');
const apiUser = ('https://randomuser.me/api/'); 
const cors = require('cors');

const corse = {
    origin: 'http://127.0.0.1:5500',
}

const server = http.createServer(async (req, res) => {
    try {
        cors(corse)(req, res, () => {});

        const response = await fetch(apiUser);
        const userData = await response.json();

        const user = userData.results[0];
        const formattedUserData = {
            avatar: user.picture.large,
            name: `${user.name.first} ${user.name.last}`,
            age: user.dob.age,
            gender: user.gender,
            country: user.location.country,
            login: user.login.username,
            password: user.login.password,
            email: user.email,
        };

        res.end(JSON.stringify(formattedUserData));
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
});

const port = 3000;
server.listen(port, "127.0.0.1", () => {
    console.log("Server is running");
});
