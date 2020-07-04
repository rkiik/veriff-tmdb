import React, { useState, useEffect } from 'react';
import Veriff from '@veriff/js-sdk';
import { createVeriffFrame, MESSAGES } from '@veriff/incontext-sdk';
import { setVerifiedAdultStatus }from '../../store/actions';
import { connect } from 'react-redux';

function Modal(props: any) {
    useEffect(() => {
        const veriff = Veriff({
            apiKey: process.env["REACT_APP_VERIFF_KEY"] as string,
            parentId: "veriff-root",
            onSession: (err, response) => {
                createVeriffFrame({ 
                    url: response.verification.url,
                    onEvent: function(msg) {
                        switch(msg) {
                        case MESSAGES.CANCELED:
                            props.setVerifiedAdultStatus(false);
                            break;
                        case MESSAGES.FINISHED:
                            props.setVerifiedAdultStatus(true);
                            break;
                        }
                    }    
                })
            }
        });

        veriff.mount({
            formLabel: {
            givenName: 'First name',
            lastName: 'Family name',
            vendorData: 'Email'
            },
            submitBtnText: 'Get verified',
            loadingText: 'Please wait...'
        });
    }, []);

  return (
    <div id='veriff-root'></div>
  );
}

const mapDispatchToProps = { setVerifiedAdultStatus };

export default connect(null, mapDispatchToProps)(Modal);
