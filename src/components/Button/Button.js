import "./Button.scss";

const Btn = ({ icon, btnText }) => {
    return(

        <button className="btn" >
            <img src={icon} alt="" />
            <span className="btn__txt">{btnText}</span>
        </button>
    )
}
export default Btn;