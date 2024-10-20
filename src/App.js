// App.js
import React, { useState, useEffect } from 'react';
import {db, auth} from './firebase.js'
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import './App.css';

const App = () => {
    const [name, setName] = useState('');
    const [namesList, setNamesList] = useState([]);

    useEffect(() => {
        fetchNames();
    }, []);

    const fetchNames = async () => {
      // GET NAMES
    };

    const handleAddName = async () => {
      // ADD NAMES
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="title">Name List</h2>
                <input 
                    type="text" 
                    placeholder="Enter a name" 
                    value={name} 
                    onChange={handleNameChange} 
                    className="input"
                />
                <button onClick={handleAddName} className="button">Add</button>
                <ul className="name-list">
                    {namesList.map((item, index) => (
                        <li key={index} className="name-item">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
