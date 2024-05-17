const RegisterConfirm = () => {
    return (
        <div>
            <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
                <h5 className="text-4xl font-bold text-center">Registro</h5>
                <form action="">
                    <div className="relative my-4">
                        <h2 className="text-base font-semibold leading-7 text-white-900">Información</h2>
                        <p className="mt-1 text-sm leading-6 text-white-600">Confirmación de Registro</p>
                        <div className="relative my-4">
                            <input type="password" id="hs-toggle-password1" className="block w-72 py-2.5 px-0 text-sm text-white-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <button type="button" data-hs-toggle-password='{
                                "target": "#hs-toggle-password1"
                            }' className="absolute top-0 end-0 p-3.5 rounded-e-md">
                            <svg className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                                <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                                <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                                <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                                <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
                            </svg>
                            </button>
                            <label htmlFor="floating_standard" className="absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Contraseña</label>

                        </div>

                        <div className="relative my-4">
                            <input type="password" id="hs-toggle-password-conf" className="block w-72 py-2.5 px-0 text-sm text-white-900 bg-transparent border-0 border-b-2 border-white-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-red-900 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_standard" className="absolute text-sm text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirmar Contraseña</label>
                        </div>

                        <div className="relative my-4">
                            <label htmlFor="floating_standard" className="absolute text-xl/6 text-white-500 dark:text-white-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-red-900 peer-focus:dark:text-red-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">[Correo electrónico a modificar]</label>
                        </div>
                        <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded bg-red-900 py-2 hover:bg-red-700 transition-colors duration-300 mb-6">Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterConfirm;