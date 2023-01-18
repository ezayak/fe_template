import { FC, useState } from "react";
import './simple-alert.style.scss';

interface IAlertProps {
    alert_type?: string,
    onClose?: () => void,
    children: JSX.Element
}

const SimpleAlert : FC<IAlertProps> = ({
    alert_type,
    onClose,
    children
}) => {
    const [visible, setVisibility] = useState(true);

    const closeAlert = () => {
        setVisibility(false);

        if (onClose) onClose();
    }

    if (!visible) {
        return (
            <></>
        );
    }

    return (
        <div className="alert-container">
            {children}
            <button className="alert-close-button" onClick={closeAlert}></button>
        </div>
    )
}

export { SimpleAlert };