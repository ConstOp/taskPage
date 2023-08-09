import { Grid } from "@mui/material"
import Header from "../Header/Header"
import FormComponent from "../FormComponent/FormComponent"
import Subsection from "../Subsection/Subsection"

const Home = () => {
  return (
    <div className="App">
      <Grid container className="App">
        <Header />
        <h1>Submit your details</h1>
        <Grid container className="contBox">
          <FormComponent />
          <Subsection />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
