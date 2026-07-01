const express = require('express');
const helmet = require('helmet'); // Security
const morgan = require('morgan'); // Logging
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// 1. Master Security & Logging
app.use(helmet());
app.use(morgan('combined'));
app.use(express.static('public'));

// 2. Master Route Handler
app.get('/', (req, res) => {
    res.send('<h1>ENHYPEN MASTER NODE - SYSTEM ONLINE</h1>');
});

// 3. Centralized Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('<h1>System Error: Master Controller Offline</h1>');
});

// 4. Initialization
app.listen(port, '127.0.0.1', () => {
    console.log(`[MASTER ENGINE] Online at http://127.0.0.1:${port}`);
})

