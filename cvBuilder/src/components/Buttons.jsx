import '../styles/Buttons.css'

const Buttons = (props) => {
    return ( 
        <button className='btn' onClick={props.clickFunction}>{props.text}</button>
     );
}
 
export default Buttons;