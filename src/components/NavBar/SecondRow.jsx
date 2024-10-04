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
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <div style={{ display: "flex", gap: "16px" }}>
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
                sx={{ fontWeight: "600" }}
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
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: "#fff", borderRadius: "5px" }}
          />
        </Grid>
      </Grid>
    </Toolbar>
  );
}
