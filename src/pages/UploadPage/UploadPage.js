import "./UploadPage.scss"
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import iconPublish from "../../assets/icons/publish.svg"
import Btn from "../../components/Button/Button"
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const initialValues = {title:"", description:""}

function Upload() {
    // Clean up formData state (if you can't it's also fine since you have better understanding)
    const [formData, setFormdata] = useState(initialValues)
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()
    console.log(formData)
    

    const handleSubmit = (event) => {
        event.preventDefault();
        postVideo(event).then(() => {
            setSuccess(true);
            setFormdata({title:"", description:""});
            const redirect = setTimeout(() => {
                navigate('/');
            }, 3000)
          }).catch((error) => {
            console.log("Error 404: Video Upload Post " + error);
          });
      };
      
    const postVideo = (event) => {
    const videoData = {
        title: formData.title,
        description: formData.description,
    };
    
    return axios.post("http://localhost:7070/videos", videoData)
        .then((response) => {
        console.log(response.data);
        });
    };

    return (
        <div className="upload-page">
            <div className="upload-page__title">
                <h1>Upload video</h1>
            </div>
            <div className="upload-cont">
                <div className="upload-cont__thumbnail-title">
                    <p className="upload-cont__label">VIDEO THUMBNAIL</p>
                    <img className="upload-cont__photo" src={thumbnail} alt="thumbnail" />
                </div>
                <form className="upload-cont__info" onSubmit={handleSubmit}>
                    <div className="upload-cont__input-title" >
                        <p className="upload-cont__label">TITLE YOUR VIDEO</p>
                        <input className="upload-cont__field" type="text" name="title" placeholder="Add a title to your video" value={formData.title} onChange={(e) => setFormdata({...formData, title:e.target.value}) }/>
                    </div>
                    <div className="upload-cont__input-des">
                        <p className="upload-cont__label">ADD A VIDEO DESCRIPTION</p>
                        <input className="upload-cont__field--des" name="description" placeholder="Add a Description to your video" value={formData.description} onChange={(e) => setFormdata({...formData, description:e.target.value}) }></input>
                    </div>
                    <div className="btns">
                        <Link to="/" className="btns-cancel">Cancel</Link>
                        <Btn icon={iconPublish} btnText="Publish"/>
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