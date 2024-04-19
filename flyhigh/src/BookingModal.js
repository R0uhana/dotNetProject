import React, { useState } from "react";
import axios from "axios";

const BookingModal = ({ currentOffer, closeModal }) => {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [date, setDate] = useState()
    const [comment, setComment] = useState(null)


    const [numAdults, setNumAdults] = useState(0)
    const [numChildren, setNumChildren] = useState(0)
    const [numInfants, setNumInfants] = useState(0)

    const [guidePrice, setGuidePrice] = useState(0)
    const [guideChecked, setGuideChecked] = useState(false)

    const handleAdultChange = (event) => {
        setNumAdults(event.target.value)
    }
    const handleChildrenChange = (event) => {
        setNumChildren(event.target.value)
    }
    const handleInfantsChange = (event) => {
        setNumInfants(event.target.value)
    }
    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastName = (event) => {
        setLastName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePhone = (event) => {
        setPhone(event.target.value)
    }
    const handleDate = (event) => {
        setDate(event.target.value)
    }
    const handleComment = (event) => {
        setComment(event.target.value)
    }

    const totalPrice = parseInt(guidePrice) + (parseInt(numAdults) + parseInt(numChildren) + parseInt(numInfants)) * currentOffer.price

    const package_id = currentOffer.id;

    const handleAddData = async (event) => {
        event.preventDefault();
        const name = firstName + " " + lastName;
        try {
            const newData = {
                "name":name,
                "email":email,
                "phone":phone,
                "date":date,
                "comment":comment,
                "guide":guideChecked,
                "total":totalPrice,
                "package_id":package_id
            }
          await axios.post('http://localhost:5000/api/addBooking',  newData );
          alert("your message has been delivered")
          closeModal();
        } catch (error) {
            alert("Error delivering message");
            closeModal();
        }
      };

    return (

        <form action="/" className="bookBox">
            <h1>{currentOffer.title}</h1>
            <p style={{ "paddingBottom": "30px" }}>{currentOffer.description}</p>
            <div className="formNameInputs">
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" name="firstname" onChange={handleFirstName} placeholder="First Name" required />
                </div>
                <div className="smallInputGroup">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastname" onChange={handleLastName} placeholder="Last Name" required />
                </div>
            </div>
            <div className="formNameInputs">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onChange={handleEmail} placeholder="Email" required />
                </div>
                <div className="smallInputGroup">
                    <label htmlFor="phone">Phone:</label>
                    <input type="number" name="phone" onChange={handlePhone} placeholder="Phone Number" required />
                </div>
            </div>
            <div className="formNameInputs">
                <div >
                    <label htmlFor="date">Travel Date:</label>
                    <input type="date" name="date" onChange={handleDate} required />
                </div>
                <div className="numberInputs">
                    <div className="smallInputGroup" style={{ "alignItems": "center" }}>
                        <label htmlFor="adults">Adults:</label>
                        <input type="number" className="smallerInput" onChange={handleAdultChange} value={numAdults} min={0} required name="adults" />
                    </div>
                    <div className="smallInputGroup" style={{ "alignItems": "center" }}>
                        <label htmlFor="children">Children:</label>
                        <input type="number" className="smallerInput" onChange={handleChildrenChange} value={numChildren} min={0} required name="children" />
                    </div>
                    <div className="smallInputGroup" style={{ "alignItems": "center" }}>
                        <label htmlFor="infants">Infants:</label>
                        <input type="number" className="smallerInput" onChange={handleInfantsChange} value={numInfants} min={0} required name="infants" />
                    </div>
                </div>
            </div>
            <textarea name="comments" onChange={handleComment} placeholder="Tell Us About Your Holiday" cols="30" rows="10"></textarea>

            {currentOffer.guide && (
                <div style={{ "display": "flex" }}>
                    <p>Do you want a guide?</p>
                    <input type="radio" name="guide" id="guideYes" onChange={() => { setGuidePrice(99); setGuideChecked(true) }} />
                    <label htmlFor="guideYes">Yes</label>
                    <input type="radio" name="guide" id="guideNo" onChange={() => { setGuidePrice(0); setGuideChecked(false) }} defaultChecked />
                    <label htmlFor="guideNo">No</label>
                </div>
            )}
            <h2>Total:</h2>
            <p><b>Tickets: </b>{(parseInt(numAdults) + parseInt(numChildren) + parseInt(numInfants))} x {currentOffer.price}$</p>
            {guideChecked && <p><b>Guide:</b> 99$ </p>}
            <h3>Total: {totalPrice}$ </h3>

            <input type="submit" onClick={handleAddData} className="submitContactForm" />

        </form>

    );
}

export default BookingModal;