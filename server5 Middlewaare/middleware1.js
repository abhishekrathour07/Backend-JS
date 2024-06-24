// middleware is used to modify the request
// it run before every request function

import express from 'express';
import blogRoutes from './routes/blog.js';

const app = express();
const port = 3000;

// Using the blog routes with a prefix of '/blog'
app.use('/blog', blogRoutes);

// Middleware 1
app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
});

// Middleware 2
app.use((req, res, next) => {
    console.log("Middleware 2");
    next(); // Ensuring that the next middleware or route handler is called
});

// Route handler for the root path
app.get('/', (req, res) => {
    res.send("Hello everyone");
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});











