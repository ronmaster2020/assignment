import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-8">
        {error?.message || 'Sorry, an unexpected error has occurred.'}
      </p>
      <Link 
        to="/" 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage; 