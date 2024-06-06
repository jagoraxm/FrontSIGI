import { useEffect, useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "@material-tailwind/react";

const ConfirmEmail = () => {

    const [open, setOpen] = useState(false)
    const [messageAlert, setMessageAlert] = useState("")
    const [color, setColor] = useState("blue")

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      if(params.token){

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://backendsigi-production.up.railway.app/checkAuth',
            headers: { 
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${params.token}`
            }
        };

        axios.request(config)
        .then((response) => {
            console.log("LOGIN --> ", JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
      }
    }, [])

    return (    
        <>    
        <Alert open={open} color={color} onClose={() => navigate('/login')}>
            {messageAlert}
        </Alert>
        <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{backgroundImage:"url('../assets/IPNDECORA.jpg')"}}>
            <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
                <h5 className="text-4xl font-bold text-center">Registro</h5>
                    Confirmado...
            </div>
        </div>
    </>
    )
}

export default ConfirmEmail;