import { Box, useTheme } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MyIcon from "../../../ui/components/Icon/MyIcon";
import MyButtonNav from "./MyButtonsNav";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const theme = useTheme();

  const navItems = [
    {
      link: "/dashboard",
      label: "Dashboard",
      icon: <MyIcon myIcon={DashboardIcon} />,
      dropdown: [],
    },
    {
      label: "Manage User",
      icon: <MyIcon myIcon={GroupIcon} />,
      dropdown: [
        { title: "User List", dropdownLink: "/dashboard/user/list" },
        { title: "Add User", dropdownLink: "/dashboard/user/add" },
      ],
    },
    {
      link: "/orders",
      label: "Products",
      icon: <MyIcon myIcon={ShoppingCartIcon} />,
      dropdown: [
        { title: "Product List", dropdownLink: "/dashboard/product/list" },
        { title: "Product Add", dropdownLink: "/dashboard/product/add" },
      ],
    },
    {
      link: "/orders",
      label: "Message",
      icon: <MyIcon myIcon={ShoppingCartIcon} />,
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
          display: "none",
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
