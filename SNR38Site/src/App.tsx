import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage/CoverPage";
import NameDisplay from "./pages/NameDisplay/NameDisplay";
import Footer from "./components/footer/Footer";

import Olivia from "./pages/3OliviaCavallero/Olivia"; //Temp 1
import Shirell from "./pages/2ShirellBattle/Shirell"; //Temp 5
import Aliah from "./pages/4AliahChammoro/Aliah"; //Temp 3
import Gavin from "./pages/5GavinCooper/Gavin"; //Temp 5
import Sera from "./pages/6SeraCristinFerrante/Sera"; //Temp 4
import Caitlin from "./pages/7CaitlinFracasso/Caitlin"; //Temp 2
import Annika from "./pages/8AnnikaGeissberger/Annika"; //Temp 1
import Alyssa from "./pages/9AlyssaJones/Alyssa"; //Temp 3
import Emma from "./pages/10EmmaKeating/Emma"; //Temp 4
import Shannon from "./pages/11ShannonKonecke/Shannon"; //Temp 1
import Madisyn from "./pages/12MadisynMartinelli/Madisyn"; //Temp 3
import Deanna from "./pages/13DeannaMcnally/Deanna"; //Temp 4
import Francesca from "./pages/14FrancescaMorabito/Francesca"; //Temp 1
import Eva from "./pages/15EvaReed/Eva"; //Temp 3
import David from "./pages/16DavidRoot/David"; //Temp 4
import Natalie from "./pages/17NatalieSweeney/Natalie"; //Temp 5
import Nicole from "./pages/18NicoleTasca/Nicole"; //Temp 1
import Mo from "./pages/19MoWalsh/Mo"; //Temp 3
import Sierra from "./pages/20SierraWeissner/Sierra"; //Temp 4
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; // Adjust the import path as necessary

import "./App.scss";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route
          path="*"
          element={
            <>
              <CoverPage />
              <NameDisplay />
              <Footer />
            </>
          }
        />

        {/* Root route that shows the NameDisplay and CoverPage */}
        <Route
          path="/"
          element={
            <>
              <CoverPage />
              <NameDisplay />
              <Footer />
            </>
          }
        />

        {/* Individual designer routes */}
        <Route
          path="/olivia"
          element={
            <>
              <Olivia />
              <Footer />
            </>
          }
        />
        <Route
          path="/shirell"
          element={
            <>
              <Shirell />
              <Footer />
            </>
          }
        />
        <Route
          path="/aliah"
          element={
            <>
              <Aliah />
              <Footer />
            </>
          }
        />
        <Route
          path="/gavin"
          element={
            <>
              <Gavin />
              <Footer />
            </>
          }
        />
        <Route
          path="/sera"
          element={
            <>
              <Sera />
              <Footer />
            </>
          }
        />
        <Route
          path="/caitlin"
          element={
            <>
              <Caitlin />
              <Footer />
            </>
          }
        />
        <Route
          path="/annika"
          element={
            <>
              <Annika />
              <Footer />
            </>
          }
        />
        <Route
          path="/alyssa"
          element={
            <>
              <Alyssa />
              <Footer />
            </>
          }
        />
        <Route
          path="/emma"
          element={
            <>
              <Emma />
              <Footer />
            </>
          }
        />
        <Route
          path="/shannon"
          element={
            <>
              <Shannon />
              <Footer />
            </>
          }
        />
        <Route
          path="/madisyn"
          element={
            <>
              <Madisyn />
              <Footer />
            </>
          }
        />
        <Route
          path="/deanna"
          element={
            <>
              <Deanna />
              <Footer />
            </>
          }
        />
        <Route
          path="/francesca"
          element={
            <>
              <Francesca />
              <Footer />
            </>
          }
        />
        <Route
          path="/eva"
          element={
            <>
              <Eva />
              <Footer />
            </>
          }
        />
        <Route
          path="/david"
          element={
            <>
              <David />
              <Footer />
            </>
          }
        />
        <Route
          path="/natalie"
          element={
            <>
              <Natalie />
              <Footer />
            </>
          }
        />
        <Route
          path="/nicole"
          element={
            <>
              <Nicole />
              <Footer />
            </>
          }
        />
        <Route
          path="/mo"
          element={
            <>
              <Mo />
              <Footer />
            </>
          }
        />
        <Route
          path="/sierra"
          element={
            <>
              <Sierra />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
