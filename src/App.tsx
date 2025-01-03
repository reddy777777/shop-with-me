
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { ProductDetail } from './pages/ProductDetail';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { AuthGuard } from './components/AuthGuard';

function App() {
  const handleSearch = (query: string) => {
    // Handle search query
    console.log('Search query:', query);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header onSearch={handleSearch} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/cart"
              element={
                <AuthGuard>
                  <Cart />
                </AuthGuard>
              }
            />
            <Route
              path="/product/:id"
              element={
                <AuthGuard>
                  <ProductDetail />
                </AuthGuard>
              }
            />
            <Route
              path="/dashboard"
              element={
                <AuthGuard>
                  <Dashboard />
                </AuthGuard>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;