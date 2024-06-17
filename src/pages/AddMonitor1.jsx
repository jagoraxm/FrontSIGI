import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
  List,
  ListItem,
  ListItemSuffix,
  IconButton,
  Avatar
} from "@material-tailwind/react";
import { useState } from "react";
import { PhotoIcon } from '@heroicons/react/24/solid'
 
const TrashIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
        clipRule="evenodd"
      />
    </svg>
  );
}
 
const ListWithIcon = ({ files }) => {

  console.log(files);
  return (
    <Card className="w-96">
      <List>
        {files.map(value => {
          return (
          <ListItem ripple={false} className="py-1 pr-1 pl-4" key={value}>
            <Avatar src={value} alt="avatar" variant="square" size="lg" />
            <div>
              <Typography variant="h6">{value}</Typography>              
            </div>
            <ListItemSuffix>
              <IconButton variant="text" color="blue-gray">
                <TrashIcon />
                <TrashIcon />
              </IconButton>
            </ListItemSuffix>
          </ListItem>
        )})
        }
      </List>
    </Card>
  );
}

const AddMonitor1 = () => {

  const [open, setOpen] = useState(false)
  const [messageAlert, setMessageAlert] = useState("")
  const [color, setColor] = useState("blue")

  const [arch, setArch] = useState([])

  const RegistraUsuario = () => {
    setColor("red")
    setMessageAlert("Mensaje")
    setOpen(true)
  }

  const imagen = ({ target }) => {
    try {
      console.log("array --> ", target.files);
      const findFile = arch.find(file => file === target.value)
      console.log("findFile -->", findFile)
      if(findFile === undefined) {
        const image = URL.createObjectURL(target.files[0])
        setArch([...arch, image])
      } else {
        console.log("no se agregó el archivo")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Agrega elemento de trabajo
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Ingresa el correo del usuario a dar de alta
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" action="">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            No. de Oficio
          </Typography>
          <Input
            size="lg"
            placeholder="Oficio"
            type="text"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Fecha de Oficio
          </Typography>
          <Input
            size="lg"
            placeholder="DD/MM/AAAA"
            type="date"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" onChange={imagen} type="file" accept="image/*,.pdf" className="sr-only" multiple />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {arch.map((value) => (
          <div key={value}>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center"
              src={value}
              alt="gallery-photo"
            />
            <div className="flex items-center gap-12">
            <a href="#buttons-with-link">
              <IconButton size="sm" color="red">
                <i className="fas fa-trash" />
              </IconButton>
            </a>
            <a href="#buttons-with-link">
              <IconButton size="sm" color="lime">
                <i className="fas fa-pencil" />
              </IconButton>
            </a>
            </div>
          </div>
        ))}
      </div>
        
        <Button className="mt-6" onClick={RegistraUsuario} fullWidth>
          Alta de Folio
        </Button>
      </form>
      <Alert open={open} color={color} onClose={() => setOpen(false)}>
        {messageAlert}
      </Alert>
    </Card>
  );
}

export default AddMonitor1;