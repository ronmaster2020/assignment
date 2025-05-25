import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-800">Job Portal</h1>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
