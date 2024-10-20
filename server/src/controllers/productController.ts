import { Request, Response } from 'express';
import pool from '../db';
import { Product } from '../models/product';

// getProducts
export const getProducts = async ( req: Request, res: Response ) => {
  try {
    // Use SQL query to fetch all products 
    // [ rows ] destructures the array that is returned since only the first
    // element is our actual results, the rest is just field info - [rows] 
    // returns just the first element.
    const [ rows ] = await pool.query( 'SELECT * FROM products' )
    // Send results as a json response
    res.json( rows );
  } catch ( error ) {
    console.error( error );
    // If an error occurs, send a 500 status code and error message
    res.status( 500 ).json( { error: 'Server error' } );
  }
};

// getProduct
export const getProduct = async ( req: Request, res: Response ) => {
  // reads id from url parameter
  const id = parseInt( req.params.id )

  try {
    const [ rows ]: any = await pool.query( ' SELECT * FROM products where id = ?', [ id ] );
    if ( rows.length === 0 ) {
      res.status( 404 ).json( { error: 'product not found' } );
    } else {
      res.json( rows[ 0 ] )
    }
  } catch ( error ) {
    console.error( error );
    res.status( 500 ).json( { error: 'Server error' } );
  }
}

// createProduct
export const createProduct = async ( req: Request, res: Response ) => {
  // Extract product data from the request body, aka user input 
  const { name, description, price, stock }: Product = req.body;

  try {
    const [ result ]: any = await pool.query(
      'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)',
      [ name, description, price, stock ]
    );

    // Create a new product object with the inserted ID
    const newProduct = { id: result.insertId, name, description, price, stock };

    // Send the new product as a JSON response with a 201 (Created) status
    res.status( 201 ).json( newProduct );
  } catch ( error ) {
    console.error( error )
    res.status( 500 ).json( { error: 'Server error' } );
  }
};

// updateProduct
export const updateProduct = async ( req: Request, res: Response ) => {
  // reads id from url parameter
  const id = parseInt( req.params.id )
  const { name, description, price, stock }: Product = req.body;

  try {
    // Execute a SQL query to update the product
    const [ result ]: any = await pool.query(
      'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?',
      [ name, description, price, stock, id ]
    );

    if ( result.affectedRows === 0 ) {
      // If no rows were affected, the product wasn't found
      res.status( 404 ).json( { error: 'product not found' } );
    } else {
      const updatedProduct = { id, name, description, price, stock };
      res.json( updateProduct );
    }
  } catch ( error ) {
    console.error( error )
    res.status( 500 ).json( { error: 'Server error' } );
  }
}

// deleteProduct
export const deleteProduct = async ( req: Request, res: Response ) => {
  // reads id from url parameter
  const id = parseInt( req.params.id )
  try {
    const [ result ]: any = await pool.query( 'DELETE FROM product where id = ?', [ id ] );
    if ( result.affectedRows === 0 ) {
      res.status( 404 ).json( { error: 'product not found' } );
    } else {
      res.json( { message: 'product deleted successfully' } );
    }
  } catch ( error ) {
    console.error( error )
    res.status( 500 ).json( { error: 'server error' } )
  }
};