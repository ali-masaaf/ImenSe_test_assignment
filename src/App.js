import PagesLayout from './layouts/pagesLayout';
import EditTraining from './pages/editTraining';
import NoPage from './assets/styles/pages/noPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagesLayout/>}>
            <Route index element={<EditTraining/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
