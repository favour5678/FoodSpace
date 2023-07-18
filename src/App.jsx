import { RouterProvider } from 'react-router-dom';
import Router from "./routes/routing";

function App() {
  return (
    <>
      <RouterProvider router={ Router } />
    </>
  )
}


export default App;
