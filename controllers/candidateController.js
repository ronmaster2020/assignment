const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');
const pool = require('../config/db');

const candidateController = {
    // Create a new job candidate
    createCandidate: asyncHandler(async (req, res) => {
        const { full_name, email, phone, resume_path } = req.body;

        const query = `
            INSERT INTO public.job_candidates (full_name, email, phone, resume_path)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [full_name, email, phone, resume_path || "12345.pdf"]

        // Await the query
        const result = await pool.query(query, values)
        const insertedCandidate = result.rows[0];

        console.log('Inserted candidate:', insertedCandidate);

        res.status(201).json({
            status: 'success',
            message: 'Candidate created successfully',
            data: insertedCandidate
        });
    }, 'Error creating Candidate')
};

module.exports = candidateController; 