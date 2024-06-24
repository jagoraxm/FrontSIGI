import { useState } from 'react';

import Header from '../partials/Header';
import SidebarSIGI from '../partials/SidebarSIGI';
import DashboardMonitor from '../partials/dashboard/DashboardMonitor';
import AddUser from './AddUser';
import AddMonitor1 from './AddMonitor1';
import PropTypes from 'prop-types'
import DashboardMonitor2 from '../partials/dashboard/DashboardMonitor2';
import DashboardMonitor3 from '../partials/dashboard/DashboardMonitor3';
import DashboardMonitor4 from '../partials/dashboard/DashboardMonitor4';
import DashboardMonitor5 from '../partials/dashboard/DashboardMonitor5';
import DashboardMonitor6 from '../partials/dashboard/DashboardMonitor6';

const Monitor = ({param}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

    console.log("param --> ", param);
    const renderSwitch = (param) => {
        switch(param) {
            case 'DashboardMonitor':
                return (<DashboardMonitor />)
            case 'DashboardMonitor2':
                return (<DashboardMonitor2 />)
            case 'DashboardMonitor3':
                return (<DashboardMonitor3 />)
            case 'DashboardMonitor4':
                return (<DashboardMonitor4 />)
            case 'DashboardMonitor5':
                return (<DashboardMonitor5 />)
            case 'DashboardMonitor6':
                return (<DashboardMonitor6 />)
            case 'AddUser':
                return (<AddUser />)
            case 'AddMonitor1':
                return (<AddMonitor1 />)
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
                    <div>
                        
                            {renderSwitch(param)}
                        
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