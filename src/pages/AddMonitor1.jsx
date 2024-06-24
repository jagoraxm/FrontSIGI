import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
  IconButton
} from "@material-tailwind/react";
import { useState } from "react";
import { PhotoIcon } from '@heroicons/react/24/solid'
import axios from "axios";
import FormData from "form-data";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddMonitor1 = () => {

  const [open, setOpen] = useState(false)
  const [messageAlert, setMessageAlert] = useState("")
  const [color, setColor] = useState("blue")
  const [oficio, setOficio] = useState(null)
  const [fechaOficio, setFechaOficio] = useState(null)
  const [folio, setFolio] = useState(null)

  const authState = useSelector(state => state.auth)

  const navigate = useNavigate();

  const [arch, setArch] = useState([])

  const RegistraUsuario = () => {
    if(oficio === null && fechaOficio === null && folio === null){
      setColor("red")
      setMessageAlert("Se deben llenar los valores correctamente")
      setOpen(true)
    } else {

      let data = new FormData()
  
      data.append('oficio', oficio)
      data.append('folio', folio)
      data.append('fechaOficio', fechaOficio)
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://backendsigi-production.up.railway.app/addOficio',
        headers: { 
          "Authorization": `Bearer ${authState[0].auth.token}`,
          "Content-Type": "multipart/form-data" 
        },
        data : data
      };
  
      axios.request(config)
      .then((response) => {
          //dispatch(loginAction(response.data))
          console.log("addOficio --> ", JSON.stringify(response.data));
          if(response.data.result == "ok"){
              setColor("green")
              setMessageAlert("Oficio agregado correctamente...")
              setOpen(true)
              //navigate('/monitor1')
          } else {
              setColor("yellow")
              setMessageAlert(response.data.msg)
              setOpen(true)
              //navigate('/monitor')
          }
      })
      .catch((error) => {
          console.log("errorOficio --> ", JSON.stringify(error.response.data.msg));
          setColor("red")
          console.log(error);
          if(error.response.data)
            setMessageAlert(error.response.data.msg)
          else
            setMessageAlert(error.message)
          setOpen(true)
      });
    }
  }

  const cerrar = () => {
    if(color == "red") setOpen(false)
    if(color == "green") navigate('/monitor1')
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
      <form className="mt-8 mb-2 max-w-screen-lg" action="">
      <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Folio
          </Typography>
          <Input
            size="lg"
            placeholder="Folio"
            type="number"
            onChange={(event) => setFolio(event.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            No. de Oficio
          </Typography>
          <Input
            size="lg"
            placeholder="Oficio"
            type="number"
            onChange={(event) => setOficio(event.target.value)}
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
            onChange={(event) => setFechaOficio(event.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Imágenes a cargar...
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Carga archivo...</span>
                      <input id="file-upload" name="file-upload" onChange={imagen} type="file" accept="image/*,.pdf" className="sr-only" multiple />
                    </label>
                    <p className="pl-1"></p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF máximo 10MB</p>
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
        <Alert open={open} color={color} onClose={() => cerrar()}>
          {messageAlert}
        </Alert>
      </form>
    </Card>
  );
}

export default AddMonitor1;