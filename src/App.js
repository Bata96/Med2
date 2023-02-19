import './styles/App.css';
import { useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Pčele from './components/Pčele';
import Galery from './components/Galery';
import Sale from './components/Sale';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Home from './components/Home';
import Pića from "./components/Pića";
import Voće from "./components/Voće";
import Džem from "./components/Džem";

function App() {
  const [proizvodi] = useState([
        {key: "1",  kol: 1, id: "1" , src:"https://poljomarket.rs/img/slj1.jpg", alt: "sljiva", ime: "Šljiva", kg: "1 l", cena: 25, kod: "voće" },
        {key: "2",  kol: 1, id: "2" , src:"https://online.idea.rs/images/products/100/100104329_1l.jpg?1558624232", alt: "kajsija", ime: "Kajsija", kg: "1 l", cena: 70, kod: "voće" },
        {key: "3",  kol: 1, id: "3" , src:"https://www.kurir.rs/data/images/2019/08/22/22/1956675_stockphotodarkbluegrapewithleavesisolatedonwhitebackgroundwithclippingpathfulldepthoffield604667843_ff.jpg", alt: "grozđe", ime: "Grožđe", kg: "1 l", cena: 100, kod: "voće" },
        {key: "4",  kol: 1, id: "4" , src:"https://www.princfruit.rs/images/usluga/dunja-izvoz-princ-fruit-01.jpg", alt: "dunja", ime: "Dunja", kg: "1 l", cena: 100, kod: "voće" },
        {key: "5",  kol: 1, id: "5" , src:"https://plitvicemarketi.rs/images/thumbs/0009926_tresnje-kg_511.jpeg", alt: "tresnja", ime: "Trešnja", kg: "1 l", cena: 120, kod: "voće" },
        {key: "6",  kol: 1, id: "6" , src:"https://online.idea.rs/images/products/489/489000002_1l.jpg?1580991178", alt: "kompot od dunje", ime: "Kompot od dunje", kg: "1 l", cena: 600, kod: "džem" },
        {key: "7",  kol: 1, id: "7" , src:"https://img.goglasi.com/img/227183949", alt: "dzem od šipka", ime: "Džem od šipka", kg: "1 l", cena: 600, kod: "džem" },
        {key: "8",  kol: 1, id: "8" , src:"https://online.idea.rs/images/products/434/434105182_1l.jpg?1567008645", alt: "dzem od maline", ime: "Džem od maline", kg: "1 l", cena: 600, kod: "džem" },
        {key: "9",  kol: 1, id: "9" , src:"https://www.swisslion-takovo.com/wp-content/uploads/2017/12/marmelada-kajsija-800g-1.jpg", alt: "dzem od kajsije", ime: "Marmelada od kajsije", kg: "1 l", cena: 600, kod: "džem" },
        {key: "0",  kol: 1, id: "10", src:"https://www.swisslion-takovo.com/wp-content/uploads/2017/12/dzem-sljiva-800g-1.jpg", alt: "dzem od sljive", ime: "Džem od šljive", kg: "1 l", cena: 600, kod: "džem" },
        {key: "10", kol: 1, id: "11", src:"https://www.swisslion-takovo.com/wp-content/uploads/2017/12/dzem-visnja-1.jpg", alt: "dzem od visnje", ime: "Džem od višnje", kg: "1 l", cena: 600, kod: "džem" },
        {key: "11", kol: 1, id: "12", src:"https://kulinar.rs/slike/Rakija-DUNJA-Kovilj-07l-324x324.jpg", alt: "dunjevaca", ime: "Rakija od dunje", kg: "1 l", cena: 1200, kod: "pića" },
        {key: "12", kol: 1, id: "13", src:"https://kulinar.rs/slike/Rakija-KAJSIJA-Kovilj-324x324.jpg", alt: "kajsijevaca", ime: "Rakija od kajsije", kg: "1 l", cena: 1000, kod: "pića" },
        {key: "13", kol: 1, id: "14", src:"https://kulinar.rs/slike/Rakija-SLJIVA-Kovilja-07l.jpg", alt: "sljivovica", ime: "Rakija od šljive", kg: "1 l", cena: 500, kod: "pića" },
        {key: "14", kol: 1, id: "15", src:"https://www.ideaonline.me/images/products/451/451000291_1l.jpg?1513863791", alt: "lozovaca", ime: "Lozova rakija", kg: "1 l", cena: 700, kod: "pića" },
        {key: "15", kol: 1, id: "16", src:"https://cenoteka.rs/assets/images/articles/belo-vino-plantaze-moje-vino-1l-1005847-large.jpg", alt: "belo vino", ime: "Belo vino", kg: "1 l", cena: 1000, kod: "pića" },
        {key: "16", kol: 1, id: "17", src:"https://cenoteka.rs/assets/images/articles/crno-vino-plantaze-cabernet-0-75l-1005858-large.jpg", alt: "crno vino", ime: "Crno vino", kg: "1 l", cena: 1000, kod: "pića" },
        {key: "17", kol: 1, id: "18", src:"https://s.cdnmpro.com/284187778/p/l/8/primed-bagremov-med-700g~738.jpg", alt: "tegla sa medom", ime: "Bagremov med", kg: "1 kg", cena: 1200, kod: "med" },
        {key: "18", kol: 1, id: "19", src:"https://s.cdnmpro.com/284187778/p/l/8/primed-bagremov-med-700g~738.jpg", alt: "tegla sa medom", ime: "Bagremov med", kg: "500 g", cena: 600, kod: "med" },
        {key: "19", kol: 1, id: "20", src:"https://s.cdnmpro.com/284187778/p/l/6/primed-lipov-med-700g~736.jpg", alt: "tegla sa medom", ime: "Lipov med", kg: "1 kg", cena: 1000, kod: "med" },
        {key: "20", kol: 1, id: "21", src:"https://s.cdnmpro.com/284187778/p/l/6/primed-lipov-med-700g~736.jpg", alt: "tegla sa medom", ime: "Lipov med", kg: "500 g", cena: 500, kod: "med" },
        {key: "21", kol: 1, id: "22", src:"https://primed.rs/wp-content/uploads/2021/03/SUNCOKRETOV-MED-700g-1.jpg", alt: "tegla sa medom", ime: "Suncokretov med", kg: "1 kg", cena: 800, kod: "med" },
        {key: "22", kol: 1, id: "23", src:"https://primed.rs/wp-content/uploads/2021/03/SUNCOKRETOV-MED-700g-1.jpg", alt: "tegla sa medom", ime: "Suncokretov med", kg: "500 g", cena: 400, kod: "med" },
        {key: "23", kol: 1, id: "24", src:"https://primed.rs/wp-content/uploads/2021/03/primed-livadski-med-700g_739.jpg", alt: "tegla sa medom", ime: "Livadski med", kg: "1 kg", cena: 1000, kod: "med" },       
        {key: "24", kol: 1, id: "25", src:"https://primed.rs/wp-content/uploads/2021/03/primed-livadski-med-700g_739.jpg", alt: "tegla sa medom", ime: "Livadski med", kg: "500 g", cena: 500, kod: "med" },       
        {key: "25", kol: 1, id: "26", src:"https://admin.skolazdravlja.ba/uploads/images/bigstock-Propolis-Granules-In-A-Wooden-229463932.jpg", alt: "propolis", ime: "Propolis", kg: "500 g", cena: 1000, kod: "pp" },
        {key: "26", kol: 1, id: "27", src:"https://etarskaibiljnaulja.rs/1909/pcelinji-zuti-vosak-cera-alba-yellow-beeswax.jpg", alt: "vosak", ime: "Vosak", kg: "1 kg", cena: 200, kod: "pp" },
        {key: "27", kol: 1, id: "28", src:"http://pcelar-milojkovic.com/images_lrg/perga-lrg.jpg", alt: "perga", ime: "Perga", kg: "500 g", cena: 1000, kod: "pp" },
        {key: "28", kol: 1, id: "29", src:"http://webpcelarstvo.mojsajt.rs/uploads/31255/images/matica-pcela_5719cb43ec0e5.jpg?w=400&r=4x3", alt: "matica", ime: "Matice", kg: "1 komad", cena: 1000, kod: "pp" }
  ]);

  const [slike] = useState([
    {src: "https://med.elvod.rs/wgc_media/photos/kosnice.jpg", alt: "pcelinjak"},
    {src: "https://www.treehugger.com/thmb/V91hmHh7kkDUKipIszgWZN9TiO8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1034249376-f18308ef6b4a431fbb6f9ceebc083830.jpg", alt: "pcele na ramu"},
    {src: "https://www.sciencefriday.com/wp-content/uploads/2017/08/Beehive-macro_large-min.jpg", alt: "ram sa medom"},
    {src: "https://media.istockphoto.com/id/520733611/photo/jar-of-honey-with-honeycomb.jpg?s=612x612&w=0&k=20&c=k7s6XnJvM1O3kLfy5XUn1M169j11Zcca9rFgvIBGkUE=", alt: "teglica meda"},
    {src: "https://www.beepods.com/wp-content/uploads/2020/05/200518.v1_PopularityRed_AS.png", alt: "pcele na cvetu"},
    {src: "https://www.njuskalo.hr/image-w920x690/nekretnine/poljoprivredno-zemljiste-nijemci-50000-m2-slika-118695637.jpg", alt: "slika"},
    {src: "https://www.rasadnicarstvo.rs/storage/fruits/covers/lvTrG6xktif4DQrecmMYUiOhi3Em7M3psle_1280w.jpeg", alt: "slika"},
    {src: "https://agromedia.rs/wp-content/uploads/2020/09/vocnjak_1-2.jpg", alt: "slika"},
    {src: "http://www.agrotv.net/wp-content/uploads/2017/09/coverimg25580617as.jpg", alt: "slika"},
    {src: "https://www.rasadniktojkic.com/wp-content/uploads/2022/09/vocna-sadnica-roxana.jpg", alt: "slika"},
    {src: "https://akademskarakija.rs/wp-content/uploads/2021/11/kazan-za-pecenje-rakije-100l-novo-3764286-5898824.jpg", alt: "slika"},
    {src: "https://glossy.espreso.co.rs/data/images/2020/09/17/15/304337_shutterstock-370674275_ff.jpg", alt: "slika"},
    {src: "https://89c0719238.clvaw-cdnwnd.com/19c2c28c9e2de1efed700587b2c5113e/200000830-61b7561b7d/20200526_152340.jpg?ph=89c0719238", alt: "slika"},
    {src: "https://medjimurje.hr/upload/publish/29845/vrcanje-meda-4-_595f8a9c74296.jpg", alt: "slika"},
    {src: "https://cdn.agroklub.com/upload/images/text/thumb/grozd-cover-1-880x495.jpg", alt: "slika"},
    {src: "https://www.vino.rs/images/stories/sekcije/vinskeprice/2020/kako-se-pravi-vino/02-kako-se-pravi-vino.jpg", alt: "slika"},
    {src: "http://vinskivodic.rs/pub/vinski_recnik/vinograd.jpg", alt: "slika"},
    {src: "http://wiki.poljoinfo.com/wp-content/uploads/2014/12/plodovi-tresnje.jpg", alt: "slika"},
    {src: "https://podravkaiovariations.azureedge.net/896a0578-6406-11eb-9d23-0242ac120062/v/f2b1f6a6-64bc-11eb-b6c2-0242ac130010/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp", alt: "slika"},
    {src: "https://agrosavjet.com/wp-content/uploads/2020/07/sljiva.jpg", alt: "slika"}
  ]); 

  
  const [korpa, setKorpa] = useState([]);
  const [prazna, setPrazna] = useState(["prazna"]);
  const [stavke, setStavke] = useState(0);

  const dodajUKorpu = (id) => {
    const proizvod = document.getElementById(id);
    if(korpa[0] === undefined) {
      const a = proizvodi.filter((item) => item.id === proizvod.id );
      setKorpa(a);
      setPrazna(["puna"]);
      setStavke(stavke + 1);
    } else {
      const a = proizvodi.filter((item) => item.id === proizvod.id);
      const menjanje = korpa.indexOf(a[0]);
      if (menjanje >= 0) {
        korpa[menjanje].kol = korpa[menjanje].kol + 1;
        setKorpa(korpa);
        setStavke(stavke + 1);
      } else {
        setKorpa(korpa.concat(a));
        setStavke(stavke + 1);
      }
      
    }
    
  }

  return (
    <div className="App">
      <NavBar korpa={korpa} stavke={stavke}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/med' element={<Pčele korpa={korpa} setKorpa={setKorpa} proizvodi={proizvodi} dodaj={dodajUKorpu} />} />
        <Route path='/pića' element={<Pića korpa={korpa} setKorpa={setKorpa} proizvodi={proizvodi} dodaj={dodajUKorpu} />} />
        <Route path='/voće' element={<Voće korpa={korpa} setKorpa={setKorpa} proizvodi={proizvodi} dodaj={dodajUKorpu} />} />
        <Route path='/džem' element={<Džem korpa={korpa} setKorpa={setKorpa} proizvodi={proizvodi} dodaj={dodajUKorpu} />} />
        <Route path='/galerija' element={<Galery slike={slike} />} />
        <Route path='/prodaja' element={<Sale korpa={korpa} setKorpa={setKorpa} proizvodi={proizvodi} dodaj={dodajUKorpu} />} />
        <Route path='/korpa' element={<Cart korpa={korpa} setKorpa={setKorpa} prazna={prazna} setPrazna={setPrazna} stavke={stavke} setStavke={setStavke} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
