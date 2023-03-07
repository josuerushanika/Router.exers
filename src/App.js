 // eslint-disable-next-line
import { 
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import About from "./Pages/About";

//layout

import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={RootLayout}>
        
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
  </Route>

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
   
    <RouterProvider router={router}/>
  
  );
}

export default App
