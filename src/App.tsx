import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import { Calculator } from 'lucide-react';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  )
}
