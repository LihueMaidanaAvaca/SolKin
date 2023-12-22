export default function Sinastria() {
    return (
        <>
           <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <input
                type="date"                
                style={{
                    fontSize: '1.5rem',
                    padding: '10px',
                    margin: '10px',
                }}
            />
            <input
                type="date"                
                style={{
                    fontSize: '1.5rem',
                    padding: '10px',
                    margin: '10px',
                }}
            />
            {/* <KinMaya kinMaya={kinMaya} /> */}
        </div>
        </>
    )
}