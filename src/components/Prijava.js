import { Link } from "react-router-dom";

export default function Prijava() {
    return (
        <div className="prijava">
            <div className="naslov">Dobro došli</div>
            <form  method="GET">
                <div>
                    <label htmlFor="email" >E-mail adresa </label>
                    <input name="email" type="email" id="email" required></input>
                </div>
                <div>
                    <label htmlFor="password" >Lozinka </label>
                    <input name="password" type="password" id="password" required></input>
                </div>
                <div className="submit">
                    <button type="submit">Prijava</button>
                </div>
            </form>
            <div className="nemaNalog">Nemate nalog? <Link to="/Registracija">Registrujte se</Link>.</div>
        </div>
    );
}