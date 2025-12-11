import { Box, ButtonBase, Divider, useTheme } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyIcon from "../../../ui/components/Icon/MyIcon";
import MyTypography from "../../../ui/components/Typography/MyTypography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const MyButtonNav = ({ items }) => {
  const theme = useTheme();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <ButtonBase
        onClick={() => {
          if (items.dropdown?.length > 0) {
            setToggleDropdown((prev) => !prev);
          } else {
            navigate(items.link);
          }
        }}
        sx={{
          backgroundColor:
            location.pathname === items.link ? theme.palette.hover.primary : "",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 1.5,
          borderRadius: 2,
          width: "100%",
        }}
      >
        <Box display="flex" gap={1}>
          {items.icon}
          <MyTypography>{items.label}</MyTypography>
        </Box>

        {items.dropdown?.length > 0 && (
          <MyIcon
            myIcon={
              toggleDropdown ? KeyboardArrowDownIcon : KeyboardArrowRightIcon
            }
          />
        )}
      </ButtonBase>

      {items.dropdown?.length > 0 && toggleDropdown && (
        <Box display="flex" paddingX={3}>
          <Divider orientation="vertical" flexItem sx={{ marginRight: 2 }} />
          <Box>
            {items.dropdown.map((data, index) => (
              <Box key={index} sx={{ padding: "6px 0" }}>
                <Link to={data.dropdownLink} style={{ textDecoration: "none" }}>
                  <MyTypography
                    fontSize="14px"
                    color={
                      location.pathname === data.dropdownLink
                        ? "primary.main"
                        : theme.palette.typography.subtitle
                    }
                    sx={{
                      "&:hover": {
                        color: "primary.main",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {data.title}
                  </MyTypography>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default MyButtonNav;
