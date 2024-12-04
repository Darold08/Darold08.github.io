export default function Listas() {
    const racas = ['Vira-lata', 'Pit-bull', 'Pug', 'Shitzu', 'Labrador', 'Golden', 'Salsicha', 'Pastor-Alemão']

    const racasObj = [
        {
            id:1,
            raca: 'Vira-lata',
        },
        {
            id:2,
            raca: 'Pit-bull',
        },
        {
            id:3,
            raca: 'Pug',
        },
        {
            id:4,
            raca: 'Shitzu',
        },
        {
            id:5,
            raca: 'Labrador',
        },
        {
            id:6,
            raca: 'Golden',
        },
        {
            id:7,
            raca: 'Salsicha',
        },
        {
            id:8,
            raca: 'Pastor-alemão',
        }
    ]



    return (
        <div style={{ display:'flex', flexDirection: 'column', alignItems: 'center' ,

        }}>
               <h1>Listas</h1>
            {/* <p>{racasObj[0].raca}</p> */}
            <h2>Lista Comum</h2>
            <ul>
                {racas.map((raca, i) => (
                    <li key={i}>{i+1} - {raca}</li>
                ))}
            </ul>
            
            <div>
                <h2>Lista de Objetos</h2>
                {racasObj.map((racaObj) =>(
                    <div key={racaObj.id}>
                        <h3>{racaObj.id}</h3>
                        <p>{racaObj.raca}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
           