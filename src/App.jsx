// // Bringing in the required import from 'react-router-dom'
// import { Outlet } from 'react-router-dom';
// import Nav from './components/NavTabs';
// // import Nav from './components/Nav';

// function App() {
//   // The Outlet component will conditionally swap between the different pages according to the URL
//   return (
//     <>
//       <Nav />
//       <Outlet />
//     </>
//   );
// }
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => <PortfolioContainer />;

export default App;
