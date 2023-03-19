import "./Button.scss";

const Btn = ({ icon, btnText }) => {
    return(

        <div className="btn" >
            <img src={icon} alt="" />
            <span className="btn__txt">{btnText}</span>
        </div>
    )
}
export default Btn;