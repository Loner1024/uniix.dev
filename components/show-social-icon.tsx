'use client'
import React from 'react';
import {Github, Instagram, Twitter} from "@icon-park/react";

const ShowSocialIcon = () => {
    return (
        <div className={"flex lg:justify-end justify-center py-5 gap-2"}>
            <Github theme="outline" size="18" fill="#333" />
            <Twitter theme="outline" size="18" fill="#333"/>
            <Instagram theme="outline" size="18" fill="#333"/>
        </div>
    );
};

export default ShowSocialIcon;