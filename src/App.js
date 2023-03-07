 // eslint-disable-next-line
import { 
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink, 
  createRoutesFromElements
} from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
        
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>

  )
);
function App() {
  return (
   
    // <header>
    //   <nav>
    //     <h1>JobaRouter</h1>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="About">About</NavLink>
    //   </nav>
    // </header>
     <main>
      <Routes>
        
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
     </main>
  
  );
}

export default App
