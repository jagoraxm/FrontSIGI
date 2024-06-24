import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import { Chip, Tooltip, IconButton } from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";

const DashboardMonitor2 = () => {

  const [open, setOpen] = useState(false)
  const [messageAlert, setMessageAlert] = useState("")
  const [color, setColor] = useState("blue")
  const [oficios, setOficios] = useState([])
  const authState = useSelector(state => state.auth)

  useEffect(() => {
    
    getOficios()
    
  }, [])
  
  const getOficios = async () => {
      
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://backendsigi-production.up.railway.app/oficiosM5',
      headers: { 
        "Authorization": `Bearer ${authState[0].auth.token}`,
        "Content-Type": "multipart/form-data" 
      }
    };
  
    await axios.request(config)
    .then(async (response) => {
      //dispatch(loginAction(response.data))
      //console.log("Oficios --> ", JSON.stringify(response.data.data));
      if(response.data){
        setColor("green")
        setMessageAlert("Oficio agregado correctamente...")
        setOpen(true)
        await setOficios(response.data.data)
        //navigate('/monitor1')
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

  const getcolor = (estatus) => {
    var color = "cyan"
    switch (estatus) {
      case "Carga Inicial":
        color = "blue"
        break;
      
      case "Pendiente de Folio":
        color = "green"
        break;
    
      case "En Evaluacion":
        color = "tean"
        break;

      case "En Evaluacion Externa":
        color = "cyan"
        break;

      case "Observado":
        color= "purple"
        break;

      case "Elaboracion Respuesta P/N":
        color = "indigo"
        break;
    
      default:
        break;
    }

    return color
  }

  return (
    <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Oficios</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Folio</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">No. de Oficio</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Fecha de Oficio</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Estatus</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {
                oficios.map(oficio => {
                  return (
                    <tr key={oficio.oficio}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{oficio.folio}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{oficio.oficio}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{oficio.fechaOficio}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center gap-2">
                          <Chip size="sm" variant="ghost" color={getcolor(oficio.estatus)} value={oficio.estatus} />
                        </div>
                      </td>
                      <td>
                        <Tooltip content="Editar Oficio">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardMonitor2;
