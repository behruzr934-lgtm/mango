const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);
// ROUTES
app.use('/auth', require('./routes/auth.routes'));
app.use('/products', require('./routes/product.routes'));
app.get('/test', (req,res)=>{
    res.json({ ok: true });
});


app.get('/test', (req, res) => {
    res.json({ 
        ok: true,
        secret: process.env.JWT_SECRET // временно!
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});