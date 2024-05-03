import { Suspense, lazy } from 'react';
import "./App.scss";

// Lazy load all pages
const CoverPage = lazy(() => import('./pages/CoverPage/CoverPage'));
const NameDisplay = lazy(() => import('./pages/NameDisplay/NameDisplay'));
const Olivia = lazy(() => import('./pages/3OliviaCavallero/Olivia'));
const Shirell = lazy(() => import('./pages/2ShirellBattle/Shirell'));
const Aliah = lazy(() => import('./pages/4AliahChammoro/Aliah'));
const Gavin = lazy(() => import('./pages/5GavinCooper/Gavin'));
const Sera = lazy(() => import('./pages/6SeraCristinFerrante/Sera'));
const Caitlin = lazy(() => import('./pages/7CaitlinFracasso/Caitlin'));
const Annika = lazy(() => import('./pages/8AnnikaGeissberger/Annika'));
const Alyssa = lazy(() => import('./pages/9AlyssaJones/Alyssa'));
const Emma = lazy(() => import('./pages/10EmmaKeating/Emma'));
const Shannon = lazy(() => import('./pages/11ShannonKonecke/Shannon'));
const Madisyn = lazy(() => import('./pages/12MadisynMartinelli/Madisyn'));
const Deanna = lazy(() => import('./pages/13DeannaMcnally/Deanna'));
const Francesca = lazy(() => import('./pages/14FrancescaMorabito/Francesca'));
const Eva = lazy(() => import('./pages/15EvaReed/Eva'));
const David = lazy(() => import('./pages/16DavidRoot/David'));
const Natalie = lazy(() => import('./pages/17NatalieSweeney/Natalie'));
const Nicole = lazy(() => import('./pages/18NicoleTasca/Nicole'));
const Mo = lazy(() => import('./pages/19MoWalsh/Mo'));
const SierraWeissner = lazy(() => import('./pages/20SierraWeissner/Sierra'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CoverPage />
        <NameDisplay />
        <Olivia />
        <Shirell />
        <Aliah />
        <Gavin />
        <Sera />
        <Caitlin />
        <Annika />
        <Alyssa />
        <Emma />
        <Shannon />
        <Madisyn />
        <Deanna />
        <Francesca />
        <Eva />
        <David />
        <Natalie />
        <Nicole />
        <Mo />
        <SierraWeissner />
      </Suspense>
    </div>
  );
}

export default App;
