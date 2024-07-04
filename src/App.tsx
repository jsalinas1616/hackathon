import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import ForgotPassword from './components/login/ForgotPassword';


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
    </Router>
  )
}

export default App
