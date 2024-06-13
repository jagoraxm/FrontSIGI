import { useState } from 'react';

import Header from '../partials/Header';
import SidebarSIGI from '../partials/SidebarSIGI';
import DashboardMonitor from '../partials/dashboard/DashboardMonitor';
import AddUser from './AddUser';
import PropTypes from 'prop-types'

const Monitor = ({param}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

    console.log("param --> ", param);
    const renderSwitch = (param) => {
        switch(param) {
            case 'DashboardMonitor':
                return (<DashboardMonitor />)
            case 'AddUser':
                return (<AddUser />)
            default:
                return null;
        }
    }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SidebarSIGI sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />  

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    
                    {/* Cards */}
                    <div className="grid grid-cols-12 justify-items-center gap-6">
                        <div className='col-span-12'>
                            {renderSwitch(param)}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
);
}

Monitor.propTypes = {
    param: PropTypes.string.isRequired
}

export default Monitor;