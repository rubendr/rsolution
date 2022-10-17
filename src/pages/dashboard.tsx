import React, { memo, useRef } from 'react';
import {
    IonButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar,
    IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem,
    IonList, IonRow, useIonAlert, IonLabel, IonBackButton
} from "@ionic/react";

import {
    Chart as ChartJS,
    ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
} from 'chart.js';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { printOutline, reloadOutline } from 'ionicons/icons';

ChartJS.register(ArcElement, Tooltip, Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement, BarElement,
    Title,
    Legend, ChartDataLabels);

export declare interface IProps {
    headerTitle: string;
}

const DashboardPage: React.FC<IProps> = ({ headerTitle }) => {
    const searchdata = useRef<any>(null);
    const [presentAlert] = useIonAlert();

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                plugins: {
                    datalabels: {
                        display: true,
                        color: 'white'
                    }
                }
            },
        ],
    };

    const printDashboard = () => {
        const message = "OK";
        presentAlert({
            header: 'Message',
            message: message,
            buttons: ['OK'],
            backdropDismiss: false
        });
       window.print();
    }

    return (
        <IonPage>
            <IonHeader className='noPrint'>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/home'></IonBackButton>
                    </IonButtons>
                    <IonTitle>{headerTitle}</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton onClick={() => printDashboard()}>
                            <IonIcon icon={printOutline}></IonIcon>
                        </IonButton>
                        <IonButton onClick={() => window.location.reload()}>
                            <IonIcon icon={reloadOutline}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol sizeLg='6' sizeSm='12' sizeMd='6' sizeXl='4' sizeXs='12' className="ion-align-self-center">
                            <Doughnut data={data} />
                        </IonCol>
                        <IonCol sizeLg='6' sizeSm='12' sizeMd='6' sizeXl='4' sizeXs='12' className="ion-align-self-center">
                            <Line options={options} data={data} />
                        </IonCol>
                        <IonCol sizeLg='6' sizeSm='12' sizeMd='12' sizeXl='4' sizeXs='12' className="ion-align-self-center">
                            <Bar options={options} data={data} />
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <IonList>
                    <IonItem>
                        <IonLabel>Data</IonLabel>
                        <IonInput ref={searchdata} placeholder='Search..'></IonInput>
                    </IonItem>
                </IonList>

                <IonGrid>
                    <IonRow>
                        <IonCol>No#</IonCol>
                        <IonCol>Label</IonCol>
                        <IonCol>value</IonCol>
                    </IonRow>
                    {
                         data.labels.map((r, i) => {
                            return <IonRow key={i}>
                                <IonCol>{i + 1}</IonCol>
                                <IonCol>{r}</IonCol>
                                <IonCol>{data.datasets[0].data[i]}</IonCol>
                            </IonRow>;
                        })
                    }
                </IonGrid>

            </IonContent>
        </IonPage>
    )
}

export default memo<any>(DashboardPage);
