import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

export default function SecondRow() {
  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#f5f5f5", // Light gray background for a clean look
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {[
              "Living",
              "Dining",
              "Bedroom",
              "Outdoor",
              "Office",
              "Lighting",
              "Rugs",
              "Accessories",
              "Brands",
              "Inspiration",
              "Gifts",
              "Sale",
            ].map((link) => (
              <Link
                key={link}
                href="#"
                underline="none"
                variant="body2"
                color="inherit"
                sx={{
                  fontWeight: "600",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "#4CAF50", // Green color on hover
                  },
                }}
              >
                {link}
              </Link>
            ))}
          </div>
        </Grid>

        <Grid item>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search"
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#4CAF50" }} />{" "}
                  {/* Green icon color */}
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#ddd", // Light border color
                },
                "&:hover fieldset": {
                  borderColor: "#4CAF50", // Green border on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#4CAF50", // Green border when focused
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </Toolbar>
  );
}
