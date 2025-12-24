require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path = require('node:path');

const PASSWORD = process.env.PASSWORD;

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2 * 60 * 60 * 1000 } // 2 hours
}));

// Password page
app.get('/login', (req, res) => {
    if (req.session?.authenticated) {
        return res.redirect('/');
    }
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Handle login
app.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === PASSWORD) {
        req.session.authenticated = true;
        return res.redirect('/');
    }
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Middleware to protect static files
app.use((req, res, next) => {
    if (req.session?.authenticated) {
        return next();
    }
    if (req.path === '/login') return next();
    res.redirect('/login');
});

// Serve static files
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});