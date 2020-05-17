import React from 'react';
import './Home.scss'; 
import mainImage from '../assets/images/me1.jpg';
import FormDialog from './FormDialog';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CodeSharpIcon from '@material-ui/icons/CodeSharp';


function Home(props) {
    const [showModal, setShowModal] = React.useState(false);
    const {isMobileView} = props;

    return (
        <div className="home">
            <div className="details">
                <div className="main-title">Hi, I'm <span className="color-1">Batel</span>!</div>
                <div className="sub-title">Frontend developer.</div>
                <div className="sub-title"><FavoriteIcon className="love-icon color-2"/> <CodeSharpIcon className="code-icon"/>.</div>
                <div className="sub-title">I make things done.</div>
                <FormDialog className="say-hello-dialog-btn" open={showModal} onClose={()=>setShowModal(false)} isMobileView={isMobileView} />
                <span className="social-media-icons">
                    <a href="https://www.linkedin.com/in/batel-shafir/" target="_blank"><LinkedInIcon className="linkedIn-icon"/></a>
                    <a href="https://www.facebook.com/bshafir" target="_blank"><FacebookIcon className="facebook-icon"/></a>
                    <a href="https://www.instagram.com/batelshafir/" target="_blank"><InstagramIcon className="instagram-icon"/></a>
                </span>
            </div>
            <img className="main-img" src={mainImage}></img>
        </div>
    );
}

export default Home;