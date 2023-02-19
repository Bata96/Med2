export default function Galery({slike}) {
    return (
        <div className="galerija">
            <h2>Naše slike:</h2>
            <div className="album">
                {slike.map((item) => <div className="slika"><img src={item.src} alt={item.alt} /></div>)}
            </div>
        </div>
    );
}