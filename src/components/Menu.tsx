import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { analyticsOutline, analyticsSharp, bookmarkOutline, constructOutline, constructSharp, documentOutline, documentSharp, 
   homeOutline, homeSharp, readerOutline, readerSharp, sendOutline, sendSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Dashboard',
    url: '/dashboard',
    iosIcon: analyticsOutline,
    mdIcon: analyticsSharp
  },
  {
    title: 'Master',
    url: '/master',
    iosIcon: documentOutline,
    mdIcon: documentSharp
  },
  {
    title: 'Transaction',
    url: '/transaction',
    iosIcon: sendOutline,
    mdIcon: sendSharp
  },
  {
    title: 'Report',
    url: '/report',
    iosIcon: readerOutline,
    mdIcon: readerSharp
  },
  {
    title: 'Administration',
    url: '/admin',
    iosIcon: constructOutline,
    mdIcon: constructSharp
  }
];

const labels:Array<any> = []; // ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay" className='noPrint'>
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>WebApp</IonListHeader>
          <IonNote>versi 1.0</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, indexx) => (
            <IonItem lines="none" key={indexx}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
