import { Box, ButtonBase, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const DashBoardCard = ({ isArrow = "up" }) => {
  return (
    <ButtonBase
      sx={{
        width: "100%",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        borderRadius: 2,
        padding: "20px 20px 12px 20px",
        position: "relative",
      }}
    >
      <Box
        position="absolute"
        left={20}
        top={15}
        zIndex={1}
        sx={{
          opacity: 0.3,
          pointerEvents: "none",
        }}
      >
        {isArrow === "up" ? (
          <TrendingUpIcon
            sx={{
              height: "140px",
              width: "100px",
              color: "#fff",
            }}
          />
        ) : (
          <TrendingDownIcon
            sx={{
              height: "110px",
              width: "110px",
              color: "#fff",
            }}
          />
        )}
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        alignItems={"start"}
        justifyContent={"start"}
        width={"100%"}
        zIndex={2}
      >
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"start"}
            justifyContent={"start"}
          >
            <Typography fontWeight={"bold"} color="white">
              Total Users
            </Typography>
            <Typography fontWeight={"bold"} color="white" fontSize={"2rem"}>
              277
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "grey",
                borderRadius: "8px",
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <AccountCircleIcon
                sx={{ color: "white", width: "40px", height: "40px" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          width={"100%"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Typography color="white">Last Month</Typography>
          <IconButton
            onClick={() => {}}
            sx={{
              width: { xs: "35px", sm: "35px", md: "40px" },
              height: { xs: "35px", sm: "35px", md: "40px" },
            }}
            flexshrink={0}
          >
            <MoreVertIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </ButtonBase>
  );
};

export default DashBoardCard;
