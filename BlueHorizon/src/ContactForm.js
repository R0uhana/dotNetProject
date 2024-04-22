import React, {useState} from "react";
import axios from "axios";

const ContactForm = () => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleAddData = async (event) => {
        event.preventDefault();
        const name = firstName + " " + lastName;
        try {
            const newData = {
                "name":name,
                "email":email,
                "message":message
            }
          await axios.post('http://localhost:5000/api/addContact',  newData );
          alert("your message has been delivered")
        } catch (error) {
            alert("Error delivering message")
        }
      };

      const changeFirst = (event) => {
        const first = event.target.value;
        setFirstName(first)
      }
      const changeLast = (event) => {
        const last = event.target.value;
        setLastName(last)
      }
      const changeEmail = (event) => {
        const email = event.target.value;
        setEmail(email)
      }
      const changeMessage = (event) => {
        const message = event.target.value;
        setMessage(message)
      }

    return (
        <div className="contactBox">

            <form action="/">
                <h1>Start planning your holiday with FlyHigh Agency today.</h1>
                <p> Contact our expert team for inspiration, advice, or a quote.</p>
                <img src={require("./2.png")} className='logoNav' alt="" />
                <div className="formBox">
                    <div className="formNameInputs">
                        <div>
                            <input type="text" name="firstname" onChange={changeFirst} placeholder="First Name" />
                        </div>
                        <div>
                            <input type="text" name="lastname" onChange={changeLast} placeholder="Last Name" style={{"marginLeft":"10px"}}/>
                        </div>
                    </div>
                    <div className="formEmail">
                        <input type="text" name="messsage" onChange={changeEmail} placeholder="Email" />
                    </div>
                    <textarea name="message" placeholder="Your Message" onChange={changeMessage} cols="30" rows="10"></textarea>
                    <div className="checkbox">
                        <h2>Let Us Know:</h2>
                        <div>
                            <input type="checkbox" name="checkbox1"  id="checkbox1"/>
                            <label htmlFor="checkbox1"> I'm ready to book - contact me as soon as possible.</label>
                            <div>

                            </div>
                            <input type="checkbox" name="checkbox2" id="checkbox2"/>
                            <label htmlFor="checkbox2"> Add me to your email list.</label>
                        </div>
                        <div>

                            <input type="checkbox" name="checkbox3" id="checkbox3"/>
                            <label htmlFor="checkbox3"> Other</label>
                        </div>
                    </div>
                    <button onClick={handleAddData} className="submitContactForm">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;