import React from 'react';

const KinMaya = ({ kinMaya }) => {
    return(
        <div className="" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src={kinMaya.imgTone} alt="Tono Maya" style={{ width: '20px', height: 'auto' }} />
            <img src={kinMaya.imgSeal} alt="Sello Maya" style={{ width: '100px', height: 'auto', borderRadius: '50%' }} />
        </div>
    )
}

export default KinMaya