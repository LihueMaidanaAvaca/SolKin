import React from 'react';

const Oracle = ({ kinMaya }) => {
    return (
        <div display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <div>
                <img src={kinMaya.imgGuia} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div>
                <img src={kinMaya.imgLeft} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
                <img src={kinMaya.imgSeal} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
                <img src={kinMaya.imgRight} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div>
                <img src={kinMaya.imgHide} alt="Sello Maya" style={{ width: '100px', height: 'auto' }} />
            </div>
            
        </div>
    );
}

export default Oracle;
