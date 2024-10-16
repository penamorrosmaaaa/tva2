// src/components/DigitalBenchmarksMenu.js

import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import logo from '../assets/Diseño sin título (1).png'; // Logo image

const DigitalBenchmarksMenu = ({ title, icon }) => {
  return (
    <>
      {/* Logo on the Left (Fixed Position) */}
      <Box
        position="fixed"
        top="20px"
        left="50px"
        zIndex="1100"
        pointerEvents="none"
      >
        <Image src={logo} alt="Digital Benchmarks Logo" boxSize="145px" />
      </Box>

      {/* Wrapping the rest of the content */}
      <Box>
        {/* Centered Icon and Title */}
        <Box
          bg="linear-gradient(90deg, #000000, #7800ff)"
          color="white"
          p={5}
          width="100%"
          textAlign="center"
          mt="80px" // Adds space to prevent content from overlapping the logo
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={icon}
              alt="Menu Icon"
              boxSize="50px"
              filter="invert(1)"
              mb={2}
            />
            <Text fontSize="lg" fontWeight="bold">
              {title}
            </Text>
          </Box>
        </Box>

        {/* Add more content here */}
      </Box>
    </>
  );
};

export default DigitalBenchmarksMenu;
