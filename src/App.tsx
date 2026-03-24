import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from "react-router-dom";
import Home from '@/components/home';
import Calculator from '@/components/calculator/calculator';
import Doc from '@/components/doc/doc';
import File from '@/components/doc/file/file';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/doc" element={<Doc />} />
        <Route path="/doc/:file" element={<File />} />
      </Routes>
    </ThemeProvider>
  )
}
