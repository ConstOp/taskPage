import { Avatar, Card, CardContent, CardHeader, Grid } from "@mui/material"
import { useAppSelector } from "../../app/hooks"

const Profile = () => {
  const user = useAppSelector((state) => state.user.newUser)

  console.log("render")

  return (
    <Grid container className="App">
      <Grid item className="subsection" xs={10} md={5} lg={5}>
        <Card
          sx={{
            maxWidth: "100%",
            padding: "5%",
            borderRadius: "31px",
            boxShadow: "15px 11px 30px 0px rgba(75, 92, 84, 0.14)",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                alt={user.name}
                src="https://joesch.moe/api/v1/random"
                sx={{ width: 200, height: 200 }}
              />
            }
            title={<h1>{user.name}</h1>}
          />
          <CardContent>
            <h2>{user.aboutMe}</h2>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Profile
