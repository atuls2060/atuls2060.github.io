import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import GithubStats from './pages/GithubStats';
import { Box, Container, VStack } from '@chakra-ui/react';
import Tools from './pages/Tools';

function App() {
  return (
    <Box bg="bgColor">
      <Navbar />
      <Container minW={{ base: '90%', md: '80%', xl: '60%' }}>
        {/* 160 */}
        <VStack align="stretch" spacing="100px">
          <Home />
          <About />
          <Skills />
          <Tools />
          <Projects />
          <GithubStats />
          <Contact />
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
