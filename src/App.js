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
    <Route path="/" element={<RootLayout />}>
        
    <Route index element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
  </Route>

  )
);
function App() {
  return (
   
    <RouterProvider router={router}/>
  
  );
}

export default App
