import {
  Card,
  Input,
  Button,
  Typography,
  Alert
} from "@material-tailwind/react";
import { useState } from "react";
 
const AddUser = () => {

  const [open, setOpen] = useState(false)
  const [messageAlert, setMessageAlert] = useState("")
  const [color, setColor] = useState("blue")

  const RegistraUsuario = () => {
    setColor("red")
    setMessageAlert("Mensaje")
    setOpen(true)
  }

  return (
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Registro
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Ingresa el correo del usuario a dar de alta
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" action="">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            type="email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        
        <Button className="mt-6" onClick={RegistraUsuario} fullWidth>
          Alta de Usuario
        </Button>
      </form>
      <Alert open={open} color={color} onClose={() => setOpen(false)}>
        {messageAlert}
      </Alert>
    </Card>
  );
}

export default AddUser;