import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';

// loads environmental variables 
dotenv.config();

// create the express app
const app = express();

// set port 
const port = process.env.PORT || 5000;

app.use( cors() );
app.use( express.json() );

// use product routes (specified in another doc but its like get, put, delete)
app.use( '/api/products', productRoutes );

app.listen( port, () => {
  console.log( `Server is running on port ${ port }` );
} );