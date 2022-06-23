import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/logo1.jpg";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "160px", height: "41px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "18px", xs: "10px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Copyright © 2022 by FITNESS FREAK || All right reserved
    </Typography>
  </Box>
);

export default Footer;
