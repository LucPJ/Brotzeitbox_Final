import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements
  } from "react-router-dom";
import App from "../App";
import KategorieFiltered from "../components/filteredComponents/KategorieFiltered";
import Homepage from "../components/Homepage";
  import KategorienListe from '../components/Lebensmittel/KategorienListe'
import Lebensmittel from "../components/Lebensmittel/Lebensmittel";
import LebensmittelDetails from "../components/Lebensmittel/LebensmittelDetails";
  
  // You can do this:
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Homepage/>}>
        <Route path="/lebensmittel" element={<Lebensmittel />} />
        <Route path="/lebensmittel/:lebensmittel" element={<LebensmittelDetails />} />
        <Route path="/kategorien" element={<KategorienListe />} />
        <Route path="/kategorien/:kategorie" element={<KategorieFiltered />} />
        <Route path="*" element={<h1 >Error Page</h1>} />
      </Route>
    )
  );
  
  export default router;