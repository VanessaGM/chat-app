import React from 'react';
import Contact from "./components/Contact";
import './components/Contact.css';


function App () {
  return (
    <div className="App">
   <Contact name="Elisa" avatar="https://randomuser.me/api/portraits/women/18.jpg" online={true} />
   <Contact name="Amélie" avatar="https://randomuser.me/api/portraits/women/24.jpg" online={false} />
   <Contact name="Jane" avatar="https://randomuser.me/api/portraits/women/19.jpg" online={true}/>
    </div>
  );
}

export default App;
