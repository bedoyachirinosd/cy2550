import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PublisherList = () => {
    const [publishers, setPublishers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/publishers').then((response) => {
            setPublishers(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Publishers</h1>
            <ul>
                {publishers.map((publisher) => (
                    <li key={publisher.id}>
                        {publisher.name} ({publisher.address})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PublisherList;
