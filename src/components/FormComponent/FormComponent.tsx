import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material"

import { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import { onSubmitNewUser } from "../../features/user/asyncActions"
import { onSubmit } from "../../features/user/userSlice"
import { Link, useNavigate } from "react-router-dom"

const FormComponent = () => {
  let regexName = /^[a-z]+$/i
  let regexEmeil = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const id = Date.now()
  console.log(id)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isVaidName, setIsVaidName] = useState(true)
  const [isVaidEmail, setIsVaidEmail] = useState(true)

  const handleSubmit = () => {
    console.log(name, email)
    setIsVaidName(regexName.test(name))
    setIsVaidEmail(regexEmeil.test(email))
    console.log(isVaidName, isVaidEmail)
    if (
      regexName.test(name) &&
      regexEmeil.test(email) &&
      name !== " " &&
      email !== " "
    ) {
      navigate("/profile")
      console.log(isVaidName, isVaidEmail)
      const user = {
        id: id,
        name,
        email,
        avatarUrl: "https://joesch.moe/api/v1/random",
        aboutMe:
          "Adventurous traveler and foodie, savoring the tastes of the world and embracing cultural experiences.",
      }
      console.log(user)
      dispatch(onSubmitNewUser(user))
      dispatch(onSubmit(user))
      setName("")
      setEmail("")
    }
  }

  return (
    <Grid item className="forms" xs={10} md={5} lg={5}>
      <h2>Name</h2>
      {isVaidName ? (
        <TextField
          style={{ width: "100%" }}
          color="success"
          id="outlined-password-input"
          label=""
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          autoComplete="current-name"
        />
      ) : (
        <TextField
          error
          style={{ width: "100%" }}
          id="outlined-error-helper-text"
          defaultValue=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          helperText="Please provide a name!"
        />
      )}
      <h2>Email</h2>
      {isVaidEmail ? (
        <TextField
          style={{ width: "100%" }}
          color="success"
          id="outlined-password-input"
          label=""
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          autoComplete="current-email"
        />
      ) : (
        <TextField
          error
          style={{ width: "100%" }}
          id="outlined-error-helper-text"
          defaultValue=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          helperText="Please provide a email!"
        />
      )}
      <div className="inputs">
        <FormControlLabel
          style={{ margin: "3em 0em 0em 0em" }}
          control={<Checkbox color="success" />}
          label="I want to reveive updates via email"
        />
        <Button
          variant="contained"
          onClick={(e) => handleSubmit()}
          style={{
            width: "200px",
            margin: "3em 0em 3em 0em",
            borderRadius: "5px",
            border: "1.5px solid #35694F",
            background: "#35694F",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          Start the Cource
        </Button>
      </div>
    </Grid>
  )
}

export default FormComponent
