import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

const EthereumAddressList = () => {
    const [addresses, setAddresses] = useState([]);

    const generateAddresses = () => {
        const newAddresses = Array.from({ length: 5 }, () => faker.finance.ethereumAddress());
        setAddresses(newAddresses);
    };

    return (
        <div>
            <button onClick={generateAddresses}>Generate Ethereum Addresses</button>
            <ul>
                {addresses.map((address, index) => (
                    <li key={address}>{address}</li>
                ))}
            </ul>
            </div>
    );
};

export default EthereumAddressList;
