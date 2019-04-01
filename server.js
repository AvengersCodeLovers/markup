const express = require('express');
const app = express();

// Serve static files located at public directory.
app.use(express.static(__dirname + '/public'));

const port = process.env.MIX_PORT || 3000;

app.listen(port, () => {
    process.stdout.write(`Server is running at http://127.0.0.1:${port}`);
});
