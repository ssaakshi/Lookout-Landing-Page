import './App.css';
import { Blog } from './components/Blog';
import { Card } from './components/Card';
import { Container } from './components/Container';
import { Content } from './components/Content';
import { Featuresheader } from './components/Featuresheader';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar';
import { ContactUs} from './components/ContactUs';


function App() {
  return (
    <div className='page-main-div'>
      <Navbar />
      <Container />
      <Featuresheader />
      <Content />
      <Content reverse />
      <Feedback />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
