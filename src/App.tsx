import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Elements } from './routes/Routes';


const App = () => {
  return (
    <div>
       <RouterProvider router={Elements} />
    </div>
  );
}

export default App;
