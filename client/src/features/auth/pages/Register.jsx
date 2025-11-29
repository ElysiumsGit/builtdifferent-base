import { Box, Checkbox, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import MyTypography from "../../../ui/components/Typography/MyTypography";
import MyTextField from "../../../ui/components/TextField/MyTextField";
import Logo from "../../../assets/logo.png";
import MyImage from "../../../ui/components/Images/MyImage";
import MyButton from "../../../ui/components/Button/MyButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LockIcon from "@mui/icons-material/Lock";
import GppGoodIcon from "@mui/icons-material/GppGood";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundImage: `url(https://dashboard-ecommerce-react.netlify.app/static/media/pattern.df9a7a28fc13484d1013.webp)`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
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
      {/* LEFT SECTION */}
      {!isMobile && (
        <Box flex={3}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"start"}
            height={"100%"}
            gap={4}
            paddingX={14}
          >
            <MyTypography fontWeight={900} variant="h3">
              Premium UX/UI Fashion eCommerce Dashboard & Admin Panel
            </MyTypography>
            <MyTypography variant="h6">
              Build stunning and intuitive dashboards with our fully-featured
              fashion eCommerce admin panel. Designed for efficiency and ease of
              use, it helps you manage products, orders, and analytics
              seamlessly.
            </MyTypography>
            <MyButton buttonText="Learn More" startIcon={SchoolIcon} hasIcon />
          </Box>
        </Box>
      )}

      {/* RIGHT SECTION */}
      <Box
        flex={1}
        sx={{
          backgroundColor: theme.palette.background.default,
          padding: 4,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <MyImage src={Logo} alt="Logo" md={45} sm={35} xs={35} />
          </Box>
          <MyTypography fontWeight="bold" variant={"h5"}>
            Register a new account
          </MyTypography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <MyTextField
            placeholder="Enter your name"
            hasStartIcon
            iconStart={AccountCircleIcon}
          />
          <MyTextField
            placeholder="Enter your email"
            hasStartIcon
            iconStart={EmailIcon}
          />
          <MyTextField
            placeholder="Enter your password"
            hasStartIcon
            iconStart={LockIcon}
            hasEndIcon
            iconEnd={RemoveRedEyeIcon}
          />
          <MyTextField
            placeholder="Confirm your password"
            hasStartIcon
            iconStart={GppGoodIcon}
            hasEndIcon
            iconEnd={RemoveRedEyeIcon}
          />
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"start"}
            sx={{
              width: "100%",
            }}
          >
            <Checkbox />
            <MyTypography>I agree to the all Terms & Condiotions</MyTypography>
          </Box>
          <MyButton buttonText="Register" sx={{ width: "100%" }} />
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
          >
            <MyTypography>Do you have an account? </MyTypography>
            <MyTypography onClick={() => navigate("/login")} color="#0858f7">
              Login{" "}
            </MyTypography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
