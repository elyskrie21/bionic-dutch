import React, {
    Component
} from 'react';
import {
    MDBLightbox
} from 'mdbreact';

function LightboxPage() {
    state = {
        noMargins: [{
                src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg'
            },
            {
                src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg'
            },
            {
                src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg'
            },
            {
                src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg'
            },
            {
                src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg'
            },
            {
                src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg'
            },
            {
                src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg'
            },
            {
                src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg'
            },
            {
                src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg'
            }
        ]
    };

    return ( <
        MDBLightbox md = '4'
        images = {
            this.state.noMargins
        }
        noMargins / >
    )

}

export default LightboxPage;