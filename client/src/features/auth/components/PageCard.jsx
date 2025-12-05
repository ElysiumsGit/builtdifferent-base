import { Box, ButtonBase, styled, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const CardText = styled(Typography)({
  color: "white",
});

const PageCard = () => {
  return (
    <ButtonBase
      sx={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        padding: "20px 20px 12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        borderRadius: 2,
        width: "100%",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={"start"}
      >
        <CardText sx={{ fontWeight: "bold" }}>Total Users</CardText>
        <CardText variant="h4" fontWeight={"bold"}>
          277
        </CardText>
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
    </ButtonBase>
  );
};

export default PageCard;
