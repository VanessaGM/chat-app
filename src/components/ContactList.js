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
        avatar : "https://randomuser.me/api/portraits/women/16.jpg",
        online : false,
    },
    {
        name : 'David',
        avatar : "https://randomuser.me/api/portraits/men/33.jpg",
        online : false,
    },
    {
        name : 'Ana',
        avatar : "https://randomuser.me/api/portraits/women/22.jpg",
        online : true,
    },
    {
        name : 'Edouard',
        avatar : "https://randomuser.me/api/portraits/men/28.jpg",
        online : true,
    }
];

const ContactList = () => {
    return users.map(user => {
        return <Contact user = {user}/>;
      });
};






export default ContactList;













