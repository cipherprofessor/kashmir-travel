import React from 'react';
import { Box, Button, Checkbox, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CustomInput from "../Login/CustomInput";

const SignupPage = () => {
  // Function to handle Google sign-up response
  const responseGoogle = (response) => {
    console.log(response);
    // Send response.tokenId to your server for authentication
  };

  return (
    <Grid
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={6}
      minHeight={550}
      sx={{
        boxShadow: "15px 2px 5px -5px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 24, 57, 0.2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          borderRadius: "30px 0 0 30px",
        }}
      >
        <Box width="70%">
          <Box display="flex" flexDirection="column" alignItems="center">
            {/* LOGO */}
            <Box
              sx={{
                mt: "60px",
                width: "160px",
                height: "50px",
                bgcolor: "primary.main",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 20px green`,
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="white">
                Kashmir
              </Typography>
            </Box>
            {/* LOGO END */}

            <Typography color="white" fontWeight="bold" sx={{ textAlign: 'center', marginTop: 4 }}>
              Travel Made Easy For You
            </Typography>
            <Typography color="white" fontWeight="bold" sx={{ textAlign: 'center', marginTop: 4 }}>
              Sign up
            </Typography>
          </Box>

          {/* INPUTS */}
          <CustomInput
            label="Email ID"
            placeholder="Enter your E-mail ID..."
            isIconActive={false}
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password..."
            isIconActive={true}
          />
          {/* INPUT END */}

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            mt={2}
            width="100%"
            color="white"
          >
            <div style={{ display: "flex" }}>
              <Checkbox disableRipple sx={{ p: 0, pr: 1 }} />
              <Typography>Remember me</Typography>
            </div>
            <a
              href="#"
              style={{
                color: "green",
                textDecoration: "none",
              }}
            >
              Forget password?
            </a>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 4, boxShadow: `0 0 20px green` }}
          >
            Sign Up
          </Button>

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 4, boxShadow: `0 0 20px green` }}
            onClick={() => window.location.href = 'http://localhost:5000/auth/google'}
          >
            Sign Up with Google
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignupPage;
