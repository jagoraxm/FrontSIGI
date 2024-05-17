import { useState } from "react";
import axios from "axios";
import FormData from "form-data";

const Login = () => {
    const [emailInput, setEmailInput] = useState("")
    const [passInput, setPassInput] = useState("")

    const login = () => {
        console.log(emailInput)
        console.log(passInput)

        /*const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Service-Id'] ='service-id-api';
        axios.defaults.headers.post['Service-Name'] ='service-name';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common = {'Authorization': `bearer ${token}`}*/

        let data = new FormData();

        data.append('username', emailInput);
        data.append('password', passInput);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://backendsigi-production.up.railway.app/login',
            headers: { "Content-Type": "multipart/form-data" },
            data : data
        };

        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
                <h5 className="text-4xl font-bold text-center">SIGI</h5>
                <form action="">
                    
                    <div className="relative my-4">
                        <input type="text" id="floating_standard" onChange={(event)=> setEmailInput(event.target.value)} className="block w-72 py-2.5 px-0 text-sm text-white-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_standard" className="absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Correo Electrónico</label>
                    </div>
                    <div className="relative my-4">
                        <input type="password" id="floating_standard" onChange={(event)=> setPassInput(event.target.value)} className="block w-72 py-2.5 px-0 text-sm text-white-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_standard" className="absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Contraseña</label>
                    </div>
                    <button type="button" onClick={login} className="w-full mb-4 text-[18px] mt-6 rounded bg-red-900 py-2 hover:bg-red-700 transition-colors duration-300 mb-6">Ingresar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;