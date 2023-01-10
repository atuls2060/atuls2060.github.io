import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import GithubStats from './Pages/GithubStats';
import { Container, IconButton, VStack } from '@chakra-ui/react';
import { RxArrowUp } from 'react-icons/rx';
import { HashLink } from 'react-router-hash-link';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container minW="60%">
        <VStack align="stretch" spacing="160px">
          <Home />
          <About />
          <Skills />
          <Projects />
          <GithubStats />
          <Contact />
        </VStack>
      </Container>
      <HashLink smooth to="#home"><IconButton zIndex={12} position="fixed" bottom="2rem" right="2rem" bg="brand" icon={<RxArrowUp color='white' />} /></HashLink>
      <Footer />
    </div>
  );
}

export default App;
