import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import GithubStats from './Pages/GithubStats';
import { Box, Container, VStack } from '@chakra-ui/react';
import Tools from './Pages/Tools';

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
