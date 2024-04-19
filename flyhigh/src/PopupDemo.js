import React from 'react';
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import PopupForm from './PopupForm';

const PopupDemo = () => {

    return (
        <div>
            <Popup trigger=
                {<button className="navbar-link-book">Book Now</button>}
                modal nested>
                {
                    close => (
                        <div>
                            <div>
                                <span className='close' onClick=
                                    {() => close()}>
                                    &times;
                                </span>
                            </div>
                            <PopupForm close={close}/>
                        </div>
                    )
                }
            </Popup>
        </div>
    );
}

export default PopupDemo;