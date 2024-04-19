const InsertImages = (props) => {
    const images = props.images;
    return ( 
        <div className="images">
            {images.map((image) => {
                return <img src={require("./img/"+image.path)} alt="" key={image.id}/>
            })}
        </div>
     );
}
 
export default InsertImages;