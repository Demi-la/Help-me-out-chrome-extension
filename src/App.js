import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import ChromeStore from './components/ChromeStore';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Popup from './components/Popup';
import Alert from './components/Alert';
// import Recording from '../public/background';
// import Background from '../public/background';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontFamily={"'Work Sans', sans-serif"}>
        {/* <ChromeStore /> */}
        <Popup/>
        {/* <Background/> */}
        {/* <Router>
          <Routes> */}
            {/* <Route exact path="/" element={<ChromeStore />} />
            <Route exact path="/popup" element={<Popup />} /> */}
            {/* <Route exact path="/alert" element={<Alert />} />
            <Route path="/movies/:id" element={<MovieDetails />} /> */}
          {/* </Routes>
        </Router> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
