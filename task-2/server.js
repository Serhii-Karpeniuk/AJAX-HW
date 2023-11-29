const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    fs.readFile('books.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading books.json:', err);
            res.statusCode = 500;
            res.end('Internal Server Error');
            return;
        }

        try {
            const books = JSON.parse(data);
            const groupedAuthors = getAuthors(books);

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(groupedAuthors));
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    });
});

function getAuthors(arr) {
    const uniqueAuthors = [...new Set(arr.map(book => book.author))];

    const authorsArray = uniqueAuthors.map(author => ({ author }));

    return authorsArray;
}

const port = 3000;

server.listen(port, "127.0.0.1", () => {
    console.log("Server is running");
});
