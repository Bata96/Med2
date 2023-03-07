export default function Prijava() {
    return (
        <div className="prijava">
            <div className="naslov">Registracija novog korisnika</div>
            <form>
                <div>
                    <label htmlFor="name">Ime i prezime</label>
                    <input type="name" name="name" id="name" required></input>
                </div>
                <div>
                    <label htmlFor="email">E-mail adresa</label>
                    <input type="email" name="email" id="email" required></input>
                </div>
                <div>
                    <label htmlFor="password">Lozinka</label>
                    <input type="password" name="password" id="password" required></input>
                </div>
                <div>
                    <label htmlFor="password2">Potvrdi lozinku</label>
                    <input type="password" name="password2" id="password2" required></input>
                </div>
                <div className="submit">
                    <button type="submit">Registruj se</button>
                </div>
            </form>
        </div>
    );
}