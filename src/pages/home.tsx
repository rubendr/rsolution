import { IonContent, IonFooter, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
export declare interface IProps {
    headerTitle: string;
}

const HomePage: React.FC<IProps> = ({ headerTitle }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start"></IonMenuButton>
                    <IonTitle>{headerTitle}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <h1>Welcome home!</h1>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonTitle>{headerTitle}</IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default HomePage;
