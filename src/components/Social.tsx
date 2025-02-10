
import { FaFacebook,FaLinkedin  } from "react-icons/fa";

const SocialMedia = () => {
    return (
      <div className="flex gap-4 mt-4 items-center">
        <a href="https://www.facebook.com/benjamin.nyankson.7/?_rdc=1&_rdr#" className="text-2xl text-white hover:text-blue-300"><FaFacebook/></a>
        <a href="https://www.linkedin.com/in/benjamin-nyankson-47806799/" className="text-2xl text-white hover:text-blue-300"><FaLinkedin /></a>
       
      </div>
    );
  };
  
  export default SocialMedia;
  