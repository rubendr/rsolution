import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { addSharp, chevronForwardSharp, personAddSharp, refreshSharp, starSharp, walletSharp } from "ionicons/icons";

export declare interface IProps {
    headerTitle: string;
}

const MasterPage: React.FC<IProps> = ({ headerTitle }) => {
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/home'></IonBackButton>
                    </IonButtons>
                    <IonTitle>{headerTitle}</IonTitle>
                    <IonButtons slot='end'>
                       <IonButton title="Add New Menu">
                        <IonIcon icon={addSharp}></IonIcon>
                        <IonLabel>Add New</IonLabel>
                       </IonButton>
                       <IonButton title="Refresh">
                        <IonIcon icon={refreshSharp}></IonIcon>
                       </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem button mode="md" routerLink="/masteritem">
                    <IonIcon icon={walletSharp} slot='start'></IonIcon>
                        <IonLabel>Items</IonLabel>
                        <IonIcon icon={chevronForwardSharp} slot='end'></IonIcon>
                    </IonItem>
                    <IonItem button mode="md" routerLink="/masteritemcategory">
                    <IonIcon icon={starSharp} slot='start'></IonIcon>
                        <IonLabel>Item Category</IonLabel>
                        <IonIcon icon={chevronForwardSharp} slot='end'></IonIcon>
                    </IonItem>
                    <IonItem button mode="md" routerLink="/mastercustomer">
                        <IonIcon icon={personAddSharp} slot='start'></IonIcon>
                        <IonLabel>Customers</IonLabel>
                        <IonIcon icon={chevronForwardSharp} slot='end'></IonIcon>
                    </IonItem>
                </IonList>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonLabel>Master</IonLabel>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default MasterPage;