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
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);
  

  const RegistraUsuario = () => {
    if(validateEmail(email)) {
      setColor("green")
      setMessageAlert("Correo de registro enviado correctamente...")
      setOpen(true)
    } else {
      setColor("red")
      setMessageAlert("Correo invalido")
      setOpen(true)
    }
  }

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  }

  return (
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Registro
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Ingresa el correo del nuevo usuario
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" action="">
        <div className="relative flex w-full max-w-[24rem]">
          <Input
          type="email"
          label="Correo Electrónico"
          value={email}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          size="sm"
          onClick={RegistraUsuario}
          color={email ? "gray" : "blue-gray"}
          disabled={!email}
          className="!absolute right-1 top-1 rounded"
        >
          Registrar
        </Button>
        </div>
      </form>
      <Alert open={open} color={color} onClose={() => setOpen(false)}>
        {messageAlert}
      </Alert>
    </Card>
  );
}

export default AddUser;