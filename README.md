# Recruitment Platform

A full-stack web application for managing recruitment processes, built with React, TypeScript, and Node.js.

## Project Structure

```
├── backend/           # Node.js Express server
├── client/           # React TypeScript frontend
└── package.json      # Root package.json for backend
```

## Tech Stack

### Backend

- Node.js with Express
- PostgreSQL database
- Joi for validation
- Multer for file uploads
- CORS enabled
- Environment variables with dotenv

### Frontend

- React 19 with TypeScript
- Vite for build tooling
- React Hook Form for form handling
- Zod for schema validation
- Bootstrap for styling
- ESLint for code quality

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd assignment
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
cd client
npm install
```

4. Set up environment variables:

   - Create a `.env` file in the root directory
   - Add the following variables:

     ```
     PORT=3000

     DB_USER=
     DB_HOST=
     DB_NAME=
     DB_PASSWORD=
     DB_PORT=
     ```

## Development

1. Start the backend server:

```bash
npm run dev
```

2. In a new terminal, start the frontend development server:

```bash
cd client
npm run dev
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Building for Production

1. Build the frontend:

```bash
cd client
npm run build
```

2. Start the production server:

```bash
npm start
```

## Features

- Candidate application form with file upload
- Client registration form
- Form validation with Zod
- File upload handling
- Responsive design with Bootstrap
- TypeScript for type safety
- ESLint for code quality

## Project Structure Details

### Backend

- Express server setup
- File upload handling with Multer
- Database integration with PostgreSQL
- API endpoints for form submissions
- Validation middleware

### Frontend

- React components organized by atomic design
- Form handling with React Hook Form
- TypeScript interfaces and types
- Responsive UI components
- File upload component with preview

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
