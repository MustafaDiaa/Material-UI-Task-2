import { Box, Button, Typography } from "@mui/material";
import PinterestIcon from "@mui/icons-material/Pinterest";
import bedroomImage from "../../assets/bedroom.jpg";

export default function PromotionalBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${bedroomImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
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
          variant="outlined"
          color="secondary"
          startIcon={<PinterestIcon />}
          sx={{
            borderRadius: "25px",
            backgroundColor: "white",
            color: "black",
            border: "2px solid #f50057",
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
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
          LABOUR DAY: ENJOY 20% OFF EQ3
        </Typography>
        <Typography variant="body2">
          Save on designs with longevity in mind. Now until September 3rd.
        </Typography>
      </Box>
    </Box>
  );
}
