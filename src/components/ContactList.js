import React from 'react';
import Contact from './Contact';

const users = [ 
    {
        name : 'Elisa',
        avatar : "https://randomuser.me/api/portraits/women/10.jpg",
        online : true,
    },
    {
        name : 'Jane',
        avatar : "https://randomuser.me/api/portraits/women/12.jpg",
        online : false,
    },
    {
        name : 'David',
        avatar : "https://randomuser.me/api/portraits/women/33.jpg",
        online : false,
    },
    {
        name : 'Ana',
        avatar : "https://randomuser.me/api/portraits/women/22.jpg",
        online : true,
    },
    {
        name : 'Edouard',
        avatar : "https://randomuser.me/api/portraits/women/15.jpg",
        online : true,
    }
];

const ContactList = () => {
    return users.map(user => Contact(user));
};






export default ContactList;













