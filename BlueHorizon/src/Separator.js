import { NavLink } from "react-router-dom";

const Separator = (props) => {
    return ( 
       <div className="separator">
            <p>{props.text}</p>
            <NavLink to="/packages" className="separatorLink">Packages</NavLink >
       </div>
     );
}
 
export default Separator;