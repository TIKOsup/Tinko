import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from '@/components/home';
import Calculator from '@/components/calculator/calculator';
import Doc from '@/components/doc/doc';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/doc" element={<Doc />} />
    </Routes>
  )
}
