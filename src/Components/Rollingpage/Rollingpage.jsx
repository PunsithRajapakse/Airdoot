import React from 'react';
import './Rollingpage.css'; // Correct import path to your CSS file for styling
import RollingpageVideoDesktop from './New.mp4'; // Correct import path to your desktop video file
import RollingpageVideoMobile from './mobile.mp4'; // Correct import path to your mobile video file

const Rollingpage = ({ onFinish }) => {
    // Simulate a delay before finishing
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 6000); // 6000 milliseconds delay, adjust as needed
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="Rollingpage">
            <div className="background-video">
                <video autoPlay muted loop className="video-background desktop-video">
                    <source src={RollingpageVideoDesktop} type="video/mp4" /> {/* Use imported desktop video file */}
                    Your browser does not support the video tag.
                </video>
                <video autoPlay muted loop className="video-background mobile-video">
                    <source src={RollingpageVideoMobile} type="video/mp4" /> {/* Use imported mobile video file */}
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Rollingpage;
