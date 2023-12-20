import React from 'react';
import imgSeals from '../utils/imgSeals';

const SpellWave = ({ kinMaya }) => {
    const magnetNum = kinMaya.onda;

    return (
        <div className="container d-flex justify-content-center align-items-center" >
            <div
                style={{ maxWidth: '400px', margin: '4px' }} // Ajusta el maxWidth según tus necesidades
            >
                <div>
                    <img src={kinMaya.imgWave} alt="Hun" style={{ width: '75px', height: 'auto', borderRadius: '50%' }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }} // Distribuye el espacio entre los elementos
                >
                    <img src={imgSeals(magnetNum + 1)} alt="Ka" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                    <div >
                        <img src={imgSeals(magnetNum + 12)} alt="Oxlahun" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                        <img src={imgSeals(magnetNum + 11)} alt="Lahat" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }} // Distribuye el espacio entre los elementos
                >
                    <img src={imgSeals(magnetNum + 2)} alt="Ox" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                    <img src={imgSeals(magnetNum + 10)} alt="Buluk" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }} // Distribuye el espacio entre los elementos
                >
                    <img src={imgSeals(magnetNum + 3)} alt="Kan" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                    <img src={imgSeals(magnetNum + 9)} alt="Lahun" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }} // Distribuye el espacio entre los elementos
                >
                    <img src={imgSeals(magnetNum + 4)} alt="Ho" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                    <img src={imgSeals(magnetNum + 5)} alt="Uak" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                    <img src={imgSeals(magnetNum + 6)} alt="Uuk" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                    <img src={imgSeals(magnetNum + 7)} alt="Uahak" style={{ width: '50px', height: 'auto', borderRadius: '50%' }} />
                    <img src={imgSeals(magnetNum + 8)} alt="Bolon" style={{ width: '50px', height: 'auto', borderRadius: '50%'}} />
                </div>
            </div>
        </div>
    );
};

export default SpellWave;
