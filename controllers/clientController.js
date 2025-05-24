const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const pool = require('../config/db');

const clientController = {
    // Create a new client
    createClient: asyncHandler(async (req, res) => {
        const { full_name, company_name, email, phone, short_description } = req.body;

        const query = `
            INSERT INTO public.potential_clients (full_name, company_name, email, phone, short_description)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [full_name, company_name, email, phone, short_description]

        // Await the query
        const result = await pool.query(query, values)
        const insertedClient = result.rows[0];

        console.log('Inserted user:', insertedClient);

        res.status(201).json({
            status: 'success',
            message: 'Client created successfully',
            data: insertedClient
        });
    }, 'Error creating client')
};

module.exports = clientController; 