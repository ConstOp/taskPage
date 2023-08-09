import { Avatar, Card, CardContent, CardHeader, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getUser } from "../../features/user/asyncActions"
import { User } from "../../features/user/types"

const Subsection = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)
  const [userItem, setUserItem] = useState<User>(user)
  let id = Math.floor(Math.random() * 20) + 1

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(getUser(`${id}`))
    }, 4000)
    setUserItem(user)
    id = Math.floor(Math.random() * 20) + 1
    return () => clearTimeout(timerId)
  }, [id])

  return (
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
              alt={userItem.name}
              src={userItem.avatarUrl}
              sx={{ width: 200, height: 200 }}
            />
          }
          title={<h1>{userItem.name}</h1>}
        />
        <CardContent>
          <h2>{userItem.aboutMe}</h2>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Subsection
