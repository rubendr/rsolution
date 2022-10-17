import { IonBackButton, IonButtons, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
export declare interface IProps {
    headerTitle: string;
}

const TransactionPage: React.FC<IProps> = ({ headerTitle }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/home'></IonBackButton>
                    </IonButtons>
                    <IonTitle>{headerTitle}</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    )
}

export default TransactionPage;