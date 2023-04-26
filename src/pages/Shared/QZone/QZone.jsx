// import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary mt-5'>
            <h4 className='text-center fs-2 text-light'>QZone</h4>
            <img src={qzone1} alt='qzone1' />
            <img src={qzone2} alt='qzone2' />
            <img src={qzone3} alt='qzone3' />
        </div>
    );
};

export default QZone;