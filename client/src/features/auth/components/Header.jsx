import {
  Box,
  ButtonBase,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Logo from "../../../assets/logo.png";
import MyImage from "../../../ui/components/Images/MyImage";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MyIconButton from "../../../ui/components/IconButton/IconButton";
import ThemeModeProvider from "../../../app/providers/ThemeModeProvider.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchBar from "../../../ui/components/TextField/SearchBar.jsx";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MyTypography from "../../../ui/components/Typography/MyTypography.jsx";

const Header = ({ hideNav }) => {
  const theme = useTheme();
  const { mode, toggleMode } = useContext(ThemeModeProvider);
  const [toggleNav, setToggleNav] = useState(true);
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.foreground.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 1,
        px: 2,
      }}
    >
      {/* LEFT SECTION — Logo */}
      <Box flex={1}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <MyImage src={Logo} alt="Logo" md={45} sm={35} xs={35} />
          <MyTypography
            variant={isMobile ? "h6" : "h5"}
            fontWeight={800}
            color={theme.palette.typography.title}
          >
            ELYSIUM
          </MyTypography>
        </Box>
      </Box>

      {/* RIGHT SECTION — Dark Mode, Notifications, User */}
      {!isMobile && (
        <Box display="flex" justifyContent={"space-between"} flex={4.3}>
          <Box display="flex" alignItems="center" gap={2} flex={1}>
            <MyIconButton
              Icon={toggleNav ? MenuIcon : MenuOpenIcon}
              onClick={() => {
                setToggleNav((prev) => !prev);
                hideNav();
              }}
            />

            <SearchBar />
          </Box>
          <Box display={"flex"} gap={2}>
            <Box display="flex" alignItems="center" gap={1}>
              <MyIconButton
                Icon={mode === "light" ? LightModeIcon : DarkModeIcon}
                onClick={toggleMode}
              />
              <MyIconButton Icon={NotificationsIcon} onClick={() => {}} />
            </Box>

            {/* User Info */}
            <ButtonBase
              sx={{
                gap: 1,
                p: 1,
                borderRadius: "8px",
                cursor: "pointer",
                transition: "0.2s ease",
                "&:hover": {
                  backgroundColor: theme.palette.hover.primary,
                },
              }}
            >
              <AccountCircleIcon
                sx={{
                  color: theme.palette.typography.title,
                  width: 40,
                  height: 40,
                  flexShrink: 0,
                }}
              />

              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"start"}
              >
                <MyTypography sx={{ fontWeight: "bold" }} type="title">
                  John Carlo Abanes
                </MyTypography>
                <MyTypography sx={{ fontSize: "12px" }} type="subtitle">
                  @JCA07
                </MyTypography>
              </Box>
            </ButtonBase>
          </Box>
        </Box>
      )}

      {isMobile && (
        <Box display={"flex"} gap={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <MyIconButton
              Icon={mode === "light" ? LightModeIcon : DarkModeIcon}
              onClick={toggleMode}
            />
            <MyIconButton Icon={NotificationsIcon} onClick={() => {}} />
            <MyIconButton
              Icon={toggleNav ? MenuOpenIcon : MenuIcon}
              onClick={() => setToggleNav((prev) => !prev)}
            />
            <AccountCircleIcon
              sx={{
                color: theme.palette.typography.title,
                width: { xs: "35px", sm: "35px", md: "40px" },
                height: { xs: "35px", sm: "35px", md: "40px" },
                flexShrink: 0,
              }}
            />
          </Box>

          {/* User Info */}
        </Box>
      )}
    </Box>
  );
};

export default Header;
