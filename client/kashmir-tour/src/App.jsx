import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import AllTours from './pages/AllTours/AllTours';
import Signup from './components/Signup/Signup';
import MainLayout from './components/Login/MainLayout';
import SigninPage from './components/Login/Login';
import TitleBox from './components/Login/TitleBox';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alltours" element={< AllTours />} />
        <Route
          path="/signup"
          element={
            <MainLayout>
              <Box
                sx={{
                  width: {
                    sm: "90vw",
                    xs: "90vw",
                    md: "60vw",
                    lg: "60vw",
                    xl: "60vw",
                  },
                }}
              >
                {/* GRID SYSTEM */}
                <Grid container height="90vh">
                  <Signup />
                  <TitleBox />
                </Grid>
                {/* GRID SYSTEM END */}
              </Box>
            </MainLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <MainLayout>
              <Box
                sx={{
                  width: {
                    sm: "90vw",
                    xs: "90vw",
                    md: "60vw",
                    lg: "60vw",
                    xl: "60vw",
                  },
                }}
              >
                {/* GRID SYSTEM */}
                <Grid container height="90vh">
                  <SigninPage />
                  <TitleBox />
                </Grid>
                {/* GRID SYSTEM END */}
              </Box>
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
