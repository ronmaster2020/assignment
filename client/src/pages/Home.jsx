import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Job Portal</h1>
      <p className="text-lg mb-8">
        Find your dream job or submit your application to join our team.
      </p>
      <Link 
        to="/apply" 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Apply Now
      </Link>
    </div>
  );
};

export default Home; 