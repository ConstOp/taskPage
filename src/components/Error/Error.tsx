import { Button } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()
  return (
    <div className="App">
      <div className="errorBox">
        <h1>Error</h1>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          ratione hic, provident illo cupiditate quod soluta dolore similique
          quasi ad?
        </h1>
        <Button
          variant="contained"
          onClick={(e) => navigate("/")}
          style={{
            width: "200px",
            margin: "3em 0em 3em 0em",
            borderRadius: "5px",
            border: "1.5px solid #35694F",
            background: "#35694F",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          Go back
        </Button>
      </div>
    </div>
  )
}

export default Error
