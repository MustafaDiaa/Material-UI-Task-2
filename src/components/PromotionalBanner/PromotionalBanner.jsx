import { Box, Button, Typography } from "@mui/material";
import PinterestIcon from "@mui/icons-material/Pinterest";
import livingRoom from "../../assets/Living Room.jpg";

export default function PromotionalBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${livingRoom})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "16px",
          left: "16px",
          zIndex: 1,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<PinterestIcon />}
          sx={{
            borderRadius: "25px",
            backgroundColor: "#f50057",
            color: "white",
            padding: "8px 16px",
            "&:hover": {
              backgroundColor: "#c51162",
            },
          }}
        >
          Save
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          textAlign: "center",
          color: "#f5f5f5",
          padding: "10px",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
          LABOUR DAY: ENJOY 20% OFF EQ3
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "300" }}>
          Save on designs with longevity in mind. Now until September 3rd.
        </Typography>
      </Box>
    </Box>
  );
}
