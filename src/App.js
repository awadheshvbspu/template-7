
import './App.css';
import Achievement from './component/Achievement';
import CTA from './component/CTA';
import Categories from './component/Categories';
import Companies from './component/Companies';
import Courses from './component/Courses';
import Feedback from './component/Feedback';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Companies/>
        <Courses/>
        <Achievement/>
        <Categories/>
        <Feedback/>
        <CTA/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
