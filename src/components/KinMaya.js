import React from 'react';

const KinMaya = ({ kinMaya }) => {
    return(
        <div display="flex" alignItems="center" justifyContent="center">
            <img src={kinMaya.imgTone} alt="Tono Maya" style={{ width: '100px', height: 'auto' }} />
            <img src={kinMaya.imgSeal} alt="Sello Maya" style={{ width: '300px', height: 'auto' }} />
        </div>
    )
}

export default KinMaya