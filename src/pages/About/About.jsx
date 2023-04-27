import React from 'react';
import Header from '../Shared/Header/Header';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import nizam from '../../../public/nizam.png';

const About = () => {
    return (
        <div>
            <Header/>
            <NavigationBar/>
            <h2 className='text-center my-5'>About Me</h2>
            <div className='d-flex align-items-center justify-content-around'>
                <div>
                    <img src={nizam}/>
                </div>
                <div className="w-50 fs-1">
                    <p>
                        I am Md Nizam Uddin. I am a Professional Web Developer. I completed total web developing course from
                        Programming Hero.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;