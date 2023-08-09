import { Grid } from "@mui/material"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Grid item className="header" xs={10}>
      <div className="rectangle3">
        <Link to={"/"} style={{ color: "#000000", textDecoration: "none" }}>
          <h3>Home</h3>
        </Link>
      </div>
      <nav className="navsBox">
        <div className="rectangle4">
          <Link
            to={"/profile"}
            style={{ color: "#000000", textDecoration: "none" }}
          >
            <h3>Profile</h3>
          </Link>
        </div>
        <div className="rectangle4">
          <Link
            to={"/profile"}
            style={{ color: "#000000", textDecoration: "none" }}
          >
            <h3>Favorite</h3>
          </Link>
        </div>
        <div className="rectangle4">
          <Link
            to={"/profile"}
            style={{ color: "#000000", textDecoration: "none" }}
          >
            <h3>Cart</h3>
          </Link>
        </div>
      </nav>
    </Grid>
  )
}

export default Header
