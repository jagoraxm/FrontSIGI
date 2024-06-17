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
        <div className="relative flex w-full max-w-[24rem]">
          <Input
          type="email"
          label="Email Address"
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
          Invitar
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