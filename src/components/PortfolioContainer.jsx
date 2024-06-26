import { useState } from 'react';
import NavTabs from './NavTabs';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Portfolio from '../pages/Portfolio';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <div className="name">
        <h1>Ashloraptor</h1>
        </div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
      <footer  id="footer">
      <address>
          <h3 id="Contact">Contact Me</h3>
          <a href="https://github.com/Ashloraptor">GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/ashley-lowe-5369a9310/">LinkedIn</a>
          <br></br>
          <a href="mailto:ashloraptor@gmail.com?subject=Employment Opportunity">Email</a>
          <br></br>
      </address>
  </footer>
    </div>
  );
}
