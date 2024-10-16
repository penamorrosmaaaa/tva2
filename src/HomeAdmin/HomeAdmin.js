// src/HomeAdmin/HomeAdmin.js
import React, { useState, useEffect } from 'react';
import { Box, Text, Button, Link } from '@chakra-ui/react';
import { FiMaximize, FiMinimize } from 'react-icons/fi';
import DigitalBenchmarksMenu from '../components/DigitalBenchmarksMenu';
import eyeIcon from '../assets/eye-svgrepo-com.svg'; // Eye icon for HomeAdmin

const HomeAdmin = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    document.body.style.overflow = isFullScreen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isFullScreen]);

  return (
    <Box p={0} width="100vw" height="50vh" position="relative">
      {/* Digital Benchmarks Menu */}
      <DigitalBenchmarksMenu title="ADMIN - Popular Objects" icon={eyeIcon} />

      {/* Button for Google Drive Folder */}
      {!isFullScreen && (
        <Box p={5} textAlign="left" bg="linear-gradient(90deg, #000000, #7800ff)" color="white" position="relative" zIndex="100">
          <Text fontSize="lg" mb={2}>Access Google Drive Folder:</Text>
          <Link 
            href="https://drive.google.com/drive/u/0/folders/1qZP_dE9Hk7QTjSaf3hQPqHjgKbVHOGk5" 
            isExternal
          >
            <Button colorScheme="teal">Open Google Drive</Button>
          </Link>
        </Box>
      )}
      
      {/* Embed Google Sheet */}
      <Box 
        width="100%" 
        height={isFullScreen ? "100vh" : "calc(100vh - 180px)"}
        position={isFullScreen ? "fixed" : "relative"}
        top="0"
        left="0"
        zIndex={isFullScreen ? "900" : "auto"} 
        bg="white"
        pt={10}
      >
        <iframe 
          src="https://docs.google.com/spreadsheets/d/1I7rzIKf_CNjdP1iYGHivom5eS8YtGlSaP7ltG-HVw3w/edit?usp=sharing"
          width="100%" 
          height="100%" 
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
        
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
      </Box>
    </Box>
  );
};

export default HomeAdmin;
