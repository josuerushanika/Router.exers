 // eslint-disable-next-line
import { BrowserRouter,Routes,Route,Link,NavLink } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>JobaRouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="About">About</NavLink>
      </nav>
    </header>
     <main>
      <Routes>
        
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
     </main>
    </BrowserRouter>
  );
}

export default App
