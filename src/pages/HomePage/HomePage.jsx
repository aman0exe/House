import Title from "../../components/Title/Title";
import Sell from "./Sell/Sell";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer"
import css from "./HomePage.module.css";
import { useEffect, useState } from "react";

function HomePage(props) {

  const api = "https://64c257b2eb7fd5d6ebcfa969.mockapi.io/houses"
  function fetchData(){
    try{
      fetch(api)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setHouses(data)
        })
    }catch(error){
      console.log(error)
    }
  }
  

  const [houses, setHouses] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Title title="Последние объявления" />
      <div className={css.announsments}>
        {houses.map((item) => (
          <Sell {...item} key={item.id}/>
        ))}
      </div>
      <Title title="О нас" />
      <div className={css.aboutUs}>
        <AboutUs />
      </div>
      <div className={css.footer}>
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
