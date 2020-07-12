import React from 'react';
import styles from './Switch.module.scss';

interface SwitchProps {
    isOn: boolean;
    offText: string;
    onText: string;
    handleToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, offText, onText, handleToggle }) => {
    return (
        <>
            <input
                checked={isOn}
                onChange={handleToggle}
                className={styles.SwitchCheckbox}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label className={styles.SwitchLabel} htmlFor={`react-switch-new`}>
                <span className={styles.SwitchOffText}>{offText}</span>
                <span className={styles.SwitchOnText}>{onText}</span>
                <span className={styles.SwitchButton} />
            </label>
        </>
    );
};

export default Switch;
