
import './App.css';
import Home from './Home';
import Messages from './Messages';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
       <div className="App">
         <Home />
         <Routes >
         <Route path="/messages" element={<Messages />} />
         </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;
