import React, { useEffect } from 'react';
import Veriff from '@veriff/js-sdk';
import { createVeriffFrame, MESSAGES } from '@veriff/incontext-sdk';
import { setVerifiedAdultStatus } from '../../store/actions';
import { useDispatch } from 'react-redux';
import styles from './Modal.module.scss';

// NC-17 / R
interface VeriffModalProps {
    CloseClicked: () => void;
    OnSuccess: () => void;
}

const VeriffModal: React.FC<VeriffModalProps> = ({ CloseClicked, OnSuccess }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const veriff = Veriff({
            apiKey: process.env['REACT_APP_VERIFF_KEY'] as string,
            parentId: 'veriff-root',
            onSession: (err, response) => {
                createVeriffFrame({
                    url: response.verification.url,
                    onEvent: (msg) => {
                        switch (msg) {
                            case MESSAGES.CANCELED:
                                dispatch(setVerifiedAdultStatus(false));
                                CloseClicked();
                                break;
                            case MESSAGES.FINISHED:
                                dispatch(setVerifiedAdultStatus(true));
                                OnSuccess();
                                break;
                        }
                    },
                });
            },
        });

        veriff.mount({
            formLabel: {
                givenName: 'First name',
                lastName: 'Family name',
                vendorData: 'Email',
            },
            submitBtnText: 'Get verified',
            loadingText: 'Please wait...',
        });
    }, []); //eslint-disable-line

    return (
        <div className={styles.Modal}>
            <div className={styles.ModalContent}>
                <span onClick={() => CloseClicked()} className={styles.ModalClose} />
                <div className={styles.ModalHeading}>
                    <h2>We need to verify your age.</h2>
                    <p>Please fill in the form and complete the verification.</p>
                </div>
                <div id="veriff-root"></div>
            </div>
        </div>
    );
};

export default VeriffModal;
