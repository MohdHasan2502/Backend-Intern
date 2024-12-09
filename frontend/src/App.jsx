
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import "./App.css";
import SignIn from '../src/components/Signup';
import Login from '../src/components/Login';

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/login';

  return (
    <div className="app">
      {!isAuthPage && (
        <>
          <header className="bg-gray-800 text-white p-4">
            <h1 className="text-3xl font-bold ml-[480px]">Role-based Access Control</h1>
            <nav>
              <ul className="flex space-x-4 justify-center mt-2">
                <li><Link to="/features" className="hover:text-gray-400">Features</Link></li>
                <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
                <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
                <li><Link to="/signin" className="hover:text-gray-400">Sign In</Link></li>
                <li><Link to="/login" className="hover:text-gray-400">Login</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            <section id="hero" className="bg-gray-100 py-10">
              <h2 className="text-4xl font-bold ml-72">Secure and Manage Access with Ease</h2>
              <p className="text-lg mb-6 ml-72">Implement role-based access control in your applications effortlessly.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-72">Get Started</button>
            </section>
            <section id="features" className="py-10">
              <h2 className="text-3xl font-bold mb-6 ml-72">Features</h2>
              <ul className="space-y-4">
                <li className="text- lg ml-72">Easy Role Management</li>
                <li className="text- lg ml-72">Secure Access Control</li>
                <li className="text- lg ml-72">Customizable Permissions</li>
              </ul>
            </section>
            <section id="about" className="bg-gray-100 py-10">
              <h2 className="text-3xl font-bold mb-6 ml-72">About Us</h2>
              <p className="text-lg ml-72">We provide solutions to manage user roles and permissions efficiently.</p>
            </section>
            <section id="contact" className="py-10">
              <h2 className="text-3xl font-bold mb-6 ml-72">Contact Us</h2>
              <p className="text-lg ml-72">Email: support@rbac.com</p>
            </section>
          </main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2023 Role-based Access Control. All rights reserved.</p>
          </footer>
        </>
      )}
       
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
  
    </div>
  );
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;