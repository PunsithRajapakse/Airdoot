import React from 'react';
import './Rollingpage.css'; // Correct import path to your CSS file for styling
import RollingpageVideo from './New.mp4'; // Correct import path to your video file

const Rollingpage = ({ onFinish }) => {
    // Simulate a delay before finishing
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 7000); // 3000 milliseconds delay, adjust as needed
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="Rollingpage">
            <div className="background-video">
                <video autoPlay muted loop className="video-background">
                    <source src={RollingpageVideo} type="video/mp4" /> {/* Use imported video file */}
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Rollingpage;
