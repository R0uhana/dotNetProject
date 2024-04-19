const Package = (props) => {
    const offer = props.offer;
    return (
        <div className="package" onClick={props.onClick}>
            <div className="packageTextLeft">
                <h1>{offer.title}</h1>
                <p>{offer.description}</p>
            </div>
            <img src={require("./img/" + offer.image)} alt="" />
                <ul className="packageTextRight">
                    <li>Price: {offer.price}$</li>
                    <li>Duration: {offer.duration} Days / {offer.duration +1} Nights</li>
                    <li>Accomodation: {offer.accomodation}</li>
                    {offer.guide && <li>Guide: Available</li>}
                </ul>
        </div>
    );
}

export default Package;