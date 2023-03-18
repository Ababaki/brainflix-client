import "./Upload.scss"
import thumbnail from "../assets/images/Upload-video-preview.jpg";
import iconPublish from "../assets/icons/publish.svg"
import Btn from "../components/Btn/btn"
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const initialValues = {title:"", description:""}

function Upload() {
    // Clean up formData state (if you can't it's also fine since you have better understanding)
    const [formData, setFormdata] = useState(initialValues)
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()
    console.log(formData)
    const handleSubmit = () => {
        setSuccess(true)
        // axios.post here to actually submit the form and upload a new video
       const redirect = setTimeout(() => {

            navigate('/');
         }, 3000)
      
    }
    return (
        <div className="upload-page">
        <div className="upload-page__title">
            <h1>Upload video</h1>
        </div>
        <div className="upload-cont">
            <div className="upload-cont__thumbnail">
                <p>VIDEO THUMBNAIL</p>
                <img src={thumbnail} alt="thumbnail" />
            </div>
            <form className="upload-cont__info" onSubmit={handleSubmit}>
                <div className="input-area" >
                    <p>TITLE YOUR VIDEO</p>
                    <input type="text" name="video title" placeholder="Add a title to your video" onChange={(e) => setFormdata({...formData, title:e.target.value}) }/>
                </div>
                <div className="input-area">
                    <p>ADD A VIDEO DESCRIPTION</p>
                    <textarea name="" placeholder="Add a Description to your video" onChange={(e) => setFormdata({...formData, description:e.target.value}) }></textarea>
                </div>
                <div className="btns">
            {/* change to link  */}
            <button className="btns-cancel" > Cancel </button>
           {/* move button component to the form section */}
           <button>

            <Btn icon={iconPublish} btnText="Publish"/>
           </button>
        </div>
            </form>
        </div>
      
        <div>

            
            {success && <div className="success-cont"> <p className="success-cont__message">Video Uploaded! YAAAY!!!</p> </div>}
            
        
        </div>
    </div>
  
    );
}

export default Upload;