"use client";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "Frequently Asked Questions(FAQs)",
    rows: [
        {
            title: "What is ManasCare?",
            content: `ManasCare is a mental health app that offers self-care tools, guided exercises, and access to counsellors for support.`,
        },
        {
            title: "Can I talk to a counsellor through ManasCare?",
            content:
                `Yes! You can connect with qualified counsellors directly in the app for professional guidance and support`,
        },
        {
            title: "Do I need to share personal details?",
            content: `No, your privacy is protected. You can use most features anonymously, and any shared details stay safe and confidential.`,
        },
        {
            title: "Who can use ManasCare?",
            content: `Anyone looking to manage stress, anxiety, or improve emotional well-being can use ManasCare—whether a student, working professional, or anyone in need of support.`
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    arrowIcon: "V",
    tabFocus: true
};

export default function FAQs(){

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}