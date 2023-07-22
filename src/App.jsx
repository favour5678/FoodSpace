import { RouterProvider } from 'react-router-dom';
import Router from "./routes/routing";
import { ShopContextProvider } from './context/ShopContext';

function App() {
  return (
    <>
      <ShopContextProvider>
        <RouterProvider router={ Router } />
      </ShopContextProvider>
    </>
  )
}


export default App;
