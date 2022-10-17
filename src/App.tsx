import React from 'react';
// import logo from './logo.svg';
import './App.css';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react';


import { IonReactRouter } from '@ionic/react-router';
import Menu from './components/Menu';
import { Redirect, Route } from 'react-router-dom';
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import MasterPage from './pages/master';
import AdministrationPage from './pages/administration';
import ReportPage from './pages/report';
import TransactionPage from './pages/transaction';
import MasterItemPage from './pages/masteritem';
import MasterItemCategoryPage from './pages/masteritemcategory';
import MasterCustomerPage from './pages/mastercustomer';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main" >
            <Menu/>
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect to="/home" />
              </Route>
              <Route path="/home"><HomePage headerTitle='Home' /></Route>
              <Route path="/dashboard"><DashboardPage headerTitle='Dashboard' /></Route>
              <Route path="/master"><MasterPage headerTitle='Master' /></Route>
              <Route path="/masteritem" exact={true}><MasterItemPage headerTitle='Master Item' /></Route>
              <Route path="/masteritemcategory" exact={true}><MasterItemCategoryPage headerTitle='Master Item Category' /></Route>
              <Route path="/mastercustomer" exact={true}><MasterCustomerPage headerTitle='Master Customer' /></Route>
              
              
              <Route path="/transaction"><TransactionPage headerTitle='Transaction' /></Route>
              <Route path="/report"><ReportPage headerTitle='Report' /></Route>
              <Route path="/admin"><AdministrationPage headerTitle='Administration' /></Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
    </IonApp>
  );
}

export default App;
