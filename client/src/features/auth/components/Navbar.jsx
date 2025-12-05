import { Box, useTheme } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MyIcon from "../../../ui/components/Icon/MyIcon";
import MyButtonNav from "./MyButtonsNav";
import GroupIcon from "@mui/icons-material/Group";

const Navbar = () => {
  const theme = useTheme();

  const navItems = [
    {
      link: "/",
      label: "Dashboard",
      icon: <MyIcon myIcon={DashboardIcon} />,
      dropdown: [],
    },
    {
      link: "/users",
      label: "Manage User",
      icon: <MyIcon myIcon={GroupIcon} />,
      dropdown: [],
    },
    {
      link: "/orders",
      label: "Products",
      icon: <MyIcon myIcon={DashboardIcon} />,
      dropdown: [
        {
          title: "Product List",
        },
        {
          title: "Product View",
        },
        {
          title: "Product Upload",
        },
      ],
    },
    {
      link: "/orders",
      label: "Orders",
      icon: <MyIcon myIcon={DashboardIcon} />,
      dropdown: [],
    },
  ];

  return (
    <Box
      padding={2}
      display="flex"
      flexDirection="column"
      gap={1}
      sx={{
        overflowY: "auto",
        height: "100vh",
        backgroundColor: theme.palette.foreground.default,

        "&::-webkit-scrollbar": {
          display: "none", // ✅ hide scrollbar
        },
      }}
    >
      {navItems.map((item, index) => (
        <MyButtonNav key={index} items={item} />
      ))}
    </Box>
  );
};

export default Navbar;
