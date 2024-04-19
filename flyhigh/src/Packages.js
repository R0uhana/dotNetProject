import Package from "./Package";
import TextBox from "./TextBox";
import React, { useState, useEffect } from 'react';
import Modal from "./Modal"
import axios from "axios";

const Packages = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentOffer, setCurrentOffer] = useState();

    const openModal = (offer) => {
        setIsOpen(true);
        setCurrentOffer(offer);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const [packages, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/packages');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const textContent = [
        {
            title: "Special Offers",
            id: 1,
            body: "Be inspired by our great travel packages, deals and exclusive travel perks!",
            footer: "Contact our expert travel advisors to discuss your holiday plans, seek advice or book your next escape. Enquire online or call 01 234 567 today."
        }
    ]

    const handleModalClick = (event) => {
        if (event.target.className === 'modalNew') {
            closeModal();
        }
    };

    return (

        <div>
            <TextBox text={textContent[0]} />

            {packages.map((offer) => {
                return <Package offer={offer} onClick={() => openModal(offer)} key={offer.id} />
            })}

            {isOpen && <Modal currentOffer={currentOffer} handleModalClick={handleModalClick} closeModal={closeModal} />}

        </div>
    );
}

export default Packages;