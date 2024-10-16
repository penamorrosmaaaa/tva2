// src/App.js
import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomeAdmin from "./HomeAdmin/HomeAdmin";
import NewPageAdmin from "./NewPageAdmin/NewPageAdmin";
import General from "./General/General";
import RequestCountGraph from "./RequestCountGraph/RequestCountGraph";
import DataTable from "./DataTable/DataTable";
import NewPage from "./NewPage/NewPage";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Box
          p={5}
          bg="linear-gradient(90deg, #000000, #7800ff)"
          minH="100vh"
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          overflow="auto"
          width="100%"
        >
          <Routes>
            {/* Redirect root path to /PopularObjects */}
            <Route path="/" element={<Navigate to="/PopularObjects" />} />

            {/* Popular Objects Page */}
            <Route
              path="/PopularObjects"
              element={
                <>
                  <Box width="100%" maxW="1200px" borderRadius="md" p={6} mb={0}>
                    <General />
                  </Box>
                  <Box
                    width="100%"
                    maxW="1600px"
                    borderRadius="md"
                    p={6}
                    mb={10}
                    position="relative"
                    overflow="hidden"
                  >
                    <RequestCountGraph />
                  </Box>
                  <Box
                    width="100%"
                    maxW="1500px"
                    borderRadius="md"
                    p={6}
                    mb={50}
                    position="relative"
                    zIndex={2}
                  >
                    <DataTable />
                  </Box>
                </>
              }
            />

            {/* Digital Calendar Page */}
            <Route path="/Digital-Calendar" element={<NewPage />} />

            {/* ADMIN - Popular Objects */}
            <Route path="/ADMIN-PopularObjects" element={<HomeAdmin />} />

            {/* ADMIN - Digital Calendar */}
            <Route path="/ADMIN-DIGITAL-CALENDAR" element={<NewPageAdmin />} />

            {/* Redirect any unknown routes to Popular Objects */}
            <Route path="*" element={<Navigate to="/PopularObjects" />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
