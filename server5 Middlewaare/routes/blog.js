import express from 'express';
const router = express.Router();

// Middleware specific to the blog router
router.use((req, res, next) => {
    req.name = 'Abhishek Singh';
    console.log('Time: ', new Date().toLocaleString());
    next();
});

// Home page route of the blog
router.get('/', (req, res) => {
    res.send(`Home page, ${req.name}`);
});

// About page route of the blog
router.get('/about', (req, res) => {
    res.send("About page");
});

export default router;
