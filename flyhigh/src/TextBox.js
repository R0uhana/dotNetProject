const TextBox = (props) => {
    const title = props.text.title
    const body = props.text.body
    const footer = props.text.footer
    return ( 
        <div className="textBox">
            <h1>{title}</h1>
            <p>{body}</p>
            <p className="textFooter">{footer}</p>
        </div>
     );
}
 
export default TextBox;