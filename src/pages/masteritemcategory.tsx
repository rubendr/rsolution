import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { refreshSharp, saveOutline } from "ionicons/icons";
export declare interface IProps {
    headerTitle: string;
}

const MasterItemCategoryPage: React.FC<IProps> = ({ headerTitle }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/home'></IonBackButton>
                    </IonButtons>
                    <IonTitle>{headerTitle}</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton title="Save data">
                            <IonIcon icon={saveOutline}></IonIcon>
                            <IonLabel>Save</IonLabel>
                        </IonButton>
                        <IonButton title="Refresh">
                            <IonIcon icon={refreshSharp}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Input-1</IonLabel>
                        <IonInput></IonInput>
                    </IonItem>
                    <IonItem >
                        <IonLabel position="floating">Input-2</IonLabel>
                        <IonInput></IonInput>
                    </IonItem>
                    <IonItem >
                        <IonLabel position="floating">Input-3</IonLabel>
                        <IonInput></IonInput>
                    </IonItem>
                </IonList>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonButtons>
                        <IonButton>
                            <IonIcon icon={saveOutline}> </IonIcon>
                            <IonLabel>Save</IonLabel>
                        </IonButton>
                        <IonButton title="Refresh">
                            <IonIcon icon={refreshSharp}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default MasterItemCategoryPage;