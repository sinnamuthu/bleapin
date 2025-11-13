import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './404';
import { AnimatedSwitch } from 'react-router-transition';
import config from './Config';
import AddLead from './dashboard/AddLead';
import DashboardNavbar from './DashboardNavbar';

class DashboardApp extends Component {
    render() {
        return (
            <div>
                <AnimatedSwitch
                  atEnter={{ opacity: 0 }}
                  atLeave={{ opacity: 0 }}
                  atActive={{ opacity: 1 }}
                  className="switch-wrapper"
                >
                    <Route exact path={config.ROUTE_URL+'/dashboard'} component={Dashboard}/>
                    <Route path={config.ROUTE_URL+'/dashboard/add-lead'} component={AddLead}/>
                    <Route component={NotFound}/>
                </AnimatedSwitch>
            </div>
        );
    }
}

export default DashboardApp;

if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <DashboardApp />
        </BrowserRouter>
        , document.getElementById('root')
    );
}
