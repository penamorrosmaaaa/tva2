// src/NewPageAdmin/NewPageAdmin.js
import React, { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { FiMaximize, FiMinimize } from 'react-icons/fi';
import DigitalBenchmarksMenu from '../components/DigitalBenchmarksMenu';
import calendarIcon from '../assets/calendar-time-svgrepo-com.svg'; // Calendar icon for Digital Calendar

const NewPageAdmin = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    document.body.style.overflow = isFullScreen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isFullScreen]);

  return (
    <Box color="white" width="100vw" height="100vh" p={0} m={0}>
      {/* Digital Benchmarks Menu */}
      <DigitalBenchmarksMenu title="ADMIN - Digital Calendar" icon={calendarIcon} />

      {/* Embed Google Sheet */}
      <Box 
        bg="linear-gradient(90deg, #000000, #7800ff)" 
        width="100vw" 
        height={isFullScreen ? "100vh" : "800px"} 
        position={isFullScreen ? "fixed" : "relative"}
        top={isFullScreen ? "0" : "auto"}
        left={isFullScreen ? "0" : "auto"}
        zIndex={isFullScreen ? "1000" : "auto"}
        p={0} 
        m={0} 
        overflow="hidden"
      >
        <Button 
          position="absolute" 
          top="10px" 
          right="10px" 
          zIndex="1100" 
          colorScheme="teal"
          onClick={toggleFullScreen}
        >
          {isFullScreen ? <FiMinimize /> : <FiMaximize />}
        </Button>
        <iframe 
          src="https://docs.google.com/spreadsheets/d/1oaMzcoyGzpY8Wg8EL8wlLtb4OHWzExOu/edit?usp=sharing"
          width="100%" 
          height="100%" 
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default NewPageAdmin;
