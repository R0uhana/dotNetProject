import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useEffect } from "react";

const PopupForm = (props) => {

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

    const [isOpen, setIsOpen] = useState(false);
    const [currentOffer, setCurrentOffer] = useState();

    const changeSelect = (event) => {
        const Currid = event.target.value
        const offer = packages.find((u) => u.id == Currid);
        setCurrentOffer(offer)
        setIsOpen(true)
    }

    const handleModalClick = (event) => {
        if (event.target.className === 'modalNew') {
            closeModal();
        }
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return (
        <div>
            <div className='modal'>
                <div className='content'>
                    <h1>Choose Package:</h1>
                    <select name="selectPackage" id="selectPackage" defaultValue={""} onChange={changeSelect}>
                        <option value="" disabled>Packages</option>
                        {packages.map((offer) => {
                            return <option value={offer.id} key={offer.id}>{offer.title}</option>
                        })}
                    </select>
                    <NavLink to="/packages" className="navbar-link" onClick={() => props.close()}>Or Check All Packages</NavLink >
                </div>

            </div>
            {isOpen && <Modal currentOffer={currentOffer} handleModalClick={handleModalClick} closeModal={closeModal} />}
        </div>
    );
}

export default PopupForm;