import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import Logo from "../../../assets/logo.png";
import MyImage from "../../../ui/components/Images/MyImage";
import MyTypography from "../../../ui/components/Typography/MyTypography";
import MyTextField from "../../../ui/components/TextField/MyTextField";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MyButton from "../../../ui/components/Button/MyButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email !== "abierajc0707@gmail.com" &&
      formData.password !== "qweqwe"
    ) {
      console.log("Invalid Credentials");
    } else {
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: `url(https://dashboard-ecommerce-react.netlify.app/static/media/pattern.df9a7a28fc13484d1013.webp)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "cover", // Ensure the background covers the screen area without zooming
        backgroundAttachment: "fixed", // Keeps the background fixed during scroll
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          zIndex: 0,
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          gap: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box>
            <MyImage src={Logo} alt="Logo" md={45} sm={35} xs={35} />
          </Box>
          <MyTypography variant={"h5"} fontWeight={"bold"}>
            Login to Built Different
          </MyTypography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: theme.palette.background.default,
            display: "flex",
            border: `1px solid ${theme.palette.border.default}`,
            flexDirection: "column",
            gap: 2,
            borderRadius: 2,
            padding: 4,
          }}
        >
          <MyTextField
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            hasStartIcon
            iconStart={EmailIcon}
          />
          <MyTextField
            name={"password"}
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            hasEndIcon
            hasStartIcon
            iconStart={LockIcon}
            iconEnd={RemoveRedEyeIcon}
          />

          <MyButton type={"submit"} />

          <MyTypography
            onClick={() => console.log("Forgot Password")}
            color={theme.palette.typography.subtitle}
            textAlign="center"
            fontWeight="bold"
            fontSize="12px"
            sx={{
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            FORGOT PASSWORD
          </MyTypography>
        </Box>

        <Box
          sx={{
            border: `1px solid ${theme.palette.border.default}`,
            backgroundColor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: 2,
            width: "100%",
            paddingY: 2,
          }}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
          >
            <MyTypography>Do you have an account? </MyTypography>
            <MyTypography onClick={() => navigate("/register")} color="#0858f7">
              Register{" "}
            </MyTypography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
