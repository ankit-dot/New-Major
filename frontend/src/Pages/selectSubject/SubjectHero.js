import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { branches } from "../../Data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { useDebounce } from "../../Hooks";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SubjectCard from "./SubjectCard";

import { AnimatePresence,motion } from "framer-motion";


export default function SubjectHero({computerScienceSubjects , heading}) {
  const [searchQuery, setSearchQuery] = useState("");
  const debounce = useDebounce(searchQuery);
  console.log(debounce);

  

  const settings = {
    dots: true,
    infinite: true,
   
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #FDF6EC, #FFF)"
            : "linear-gradient(#02294F, #090E10)",
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 7, sm: 7 },
          pb: { xs: 8, sm: 10 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            component="h3"
            variant="h3"
            sx={{
              display: "flex",
              flexDirection: { xs: "column" , sm:"row" },
              alignSelf: "center",
              textAlign: "center",

              fontWeight: "500",
              justifyContent: "center",
            }}
          >
            Select your &nbsp;
            <Typography
              component="span"
              variant="h3"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light" ? "#E49010" : "primary.light",
                fontWeight: "500",
              }}
            >
              {heading}
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Explore our cutting-edge dashboard, delivering high-quality
            solutions tailored to your needs. <br />
            Elevate your experience with top-tier features and services.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search your Branch"
              placeholder="Search your Branch"
              inputProps={{
                autocomplete: "off",
                ariaLabel: "Search your Branch",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#E49010" }}
            >
              Search
            </Button>
          </Stack>
        </Stack>
        <Box id="image" marginTop={{ md: "2rem", sm: "1rem" }} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3rem",
            justifyContent: "center",
          }}
          className="mt-4"
        >
          <AnimatePresence>
            {computerScienceSubjects
              .filter((data) => {
                return debounce.toLowerCase() === ""
                  ? data
                  : data.name.toLowerCase().includes(debounce);
              })
              .map((data, index) => (
                <motion.div
                  className="empty_div hover:cursor-pointer hover:scale-200"
                 
                  layout
                  initial={{ opacity: 0,}}
                  animate={{ opacity: 1,}}
                  exit={{ opacity: 0, }}
                  transition={{ duration: 0.5 }}
                  
                  
                  
                >
                  <SubjectCard dataIndex={index} data={data} key = {index} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </Container>
    </Box>
  );
}
