import { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { useNavigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";

const RegisterConfirm = () => {

    const [emailInput, setEmailInput] = useState("")
    const [passInput, setPassInput] = useState("")
    const [passConfInput, setPassConfInput] = useState("")
    const [nameInput, setNameInput] = useState("")
    const [userInput, setUserInput] = useState("")
    const [open, setOpen] = useState(false)
    const [messageAlert, setMessageAlert] = useState("")
    const [color, setColor] = useState("blue")

    const navigate = useNavigate();

    const register = () => {
        console.log(emailInput)
        console.log(passInput)
        console.log(passConfInput)
        console.log(nameInput)
        console.log(userInput)

        let data = new FormData();

        data.append('username', userInput);
        data.append('password', passInput);
        data.append('email', emailInput);
        data.append('completeName', nameInput);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://backendsigi-production.up.railway.app/register',
            headers: { "Content-Type": "multipart/form-data" },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data))
            if(response.data.result === "ok"){
                setColor("green")
                setMessageAlert("Usuario creado...")
                setOpen(true)
            }
        })
        .catch((error) => {
            setColor("red")
            console.log(error);
            setMessageAlert(error.message)
            setOpen(true)
        });
    }

    return (    
        <>    
        <Alert open={open} color={color} onClose={() => navigate('/login')}>
            {messageAlert}
        </Alert>
        <div className='text-white h-[100vh] flex items-center justify-center bg-cover' style={{backgroundImage:"url('../assets/IPNDECORA.jpg')"}}>
        <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
        <h5 className="text-4xl font-bold text-center">Registro</h5>
                <form action="">
                    <div className="relative my-4">
                        <h2 className="text-base font-semibold leading-7 text-white-900">Información</h2>
                        <p className="mt-1 text-sm leading-6 text-white-600">Posterior al registro espera el correo de verificación</p>

                        <div className="relative my-4">
                            <input type="password" id="hs-toggle-password-conf" className="block w-72 py-2.5 px-0 text-sm text-white-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_standard" className="absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirmar Contraseña</label>
                        </div>

                        <div className="relative my-4">
                            <label htmlFor="floating_standard" className="absolute text-xl/6 text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">[Correo electrónico a modificar]</label>
                        </div>
                        <button type="submit" className="w-full text-[18px] mt-6 rounded bg-red-900 py-2 hover:bg-red-700 transition-colors duration-300 mb-6">Confirmar</button>
                    </div>
                </form>
        </div>
        
    </div>
    </>
    )
}

export default RegisterConfirm;