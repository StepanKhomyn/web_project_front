import {Route, Routes} from 'react-router-dom'
import LoginPage from './pages/registration/LoginPage';
import RegisterPage from './pages/registration/RegisterPage';
import CarsList from './pages/cars-list/CarsList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CarsList/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
