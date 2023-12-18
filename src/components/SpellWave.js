import React from 'react';
import imgSeals from '../utils/imgSeals';

const SpellWave = ({ kinMaya }) => {
    const magnetNum = kinMaya.onda;

    return (
        <div
            style={{ maxWidth: '500px', margin: 'auto' }} // Ajusta el maxWidth según tus necesidades
        >
            <div>
                <img src={kinMaya.imgWave} alt="Hun" style={{ width: '125px', height: 'auto' }} />
            </div>
            <div
                display="flex"
                justifyContent="space-between" // Distribuye el espacio entre los elementos
            >
                <img src={imgSeals(magnetNum+1)} alt="Ka" style={{ width: '100px', height: 'auto' }} />
                <div >
                    <img src={imgSeals(magnetNum+12)} alt="Oxlahun" style={{ width: '100px', height: 'auto' }} />
                    <img src={imgSeals(magnetNum+11)} alt="Lahat" style={{ width: '100px', height: 'auto' }} />
                </div>
            </div>
            <div
                display="flex"
                justifyContent="space-between" // Distribuye el espacio entre los elementos
            >
                <img src={imgSeals(magnetNum+2)} alt="Ox" style={{ width: '100px', height: 'auto' }} />
                <img src={imgSeals(magnetNum+10)} alt="Onda Maya" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div
                display="flex"
                justifyContent="space-between" // Distribuye el espacio entre los elementos
            >
                <img src={imgSeals(magnetNum+3)} alt="Kan" style={{ width: '100px', height: 'auto' }} />
                <img src={imgSeals(magnetNum+9)} alt="Onda Maya" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div
                display="flex"
                justifyContent="space-between" // Distribuye el espacio entre los elementos
            >
                <img src={imgSeals(magnetNum+4)} alt="Ho" style={{ width: '100px', height: 'auto' }} />
                <img src={imgSeals(magnetNum+5)} alt="Onda Maya" style={{ width: '100px', height: 'auto' }} />
                <img src={imgSeals(magnetNum+6)} alt="Onda Maya" style={{ width: '100px', height: 'auto' }} />
                <img src={imgSeals(magnetNum+7)} alt="Onda Maya" style={{ width: '100px', height: 'auto' }} />
                <img src={imgSeals(magnetNum+8)} alt="Onda Maya" style={{ width: '100px', height: 'auto' }} />
            </div>
            {/* ...resto de tus imágenes */}
        </div>
    );
};

export default SpellWave;
