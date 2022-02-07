import React from 'react'
import './styles.css';
import { ReactComponent as YoutubeImage } from './youtube.svg';
import { ReactComponent as LinkedinImage } from './linkedin.svg';
import { ReactComponent as IntagramImage } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido por Alexandre Estevão
            <div className="footer-icons">
                <a href="http://www.youtube.com" target="_new">
                    <YoutubeImage />
                </a>
                <a href="http://www.linkedin.com" target="_new">
                    <LinkedinImage />
                </a>
                <a href="http://www.instagram.com" target="_new">
                    <IntagramImage />
                </a>
            </div>
        </footer>
    )
}

export default Footer;