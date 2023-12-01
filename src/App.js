import PagesLayout from './layouts/pagesLayout';
import EditTraining from './pages/editTraining';
import NoPage from './pages/noPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React  from 'react'

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagesLayout/>}>
            <Route index element={<EditTraining/>}/>
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
