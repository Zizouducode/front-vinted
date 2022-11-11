import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import OfferCard from "../components/OfferCard";

const Home = ({ searchBar, switchButton, priceRange }) => {
  //State to store data from de backend
  const [data, setData] = useState();

  //State to notify when the data is received
  const [isLoading, setIsLoading] = useState(true);

  //UseEffect required to fecth the data when the component is mount
  useEffect(() => {
    const fecthData = async () => {
      //Request to get the from the backend
      try {
        //Convert switch button to right format
        let sort = 1;
        if (switchButton) {
          sort = -1;
        }
        //Assign price min and price max for the filter
        const priceMin = priceRange[0];
        const priceMax = priceRange[1];

        const response = await axios.get(
          "https://site--backend-vinted--nfqr62d7mh6n.code.run/offers",
          {
            params: {
              title: searchBar,
              sort: sort,
              priceMin: priceMin,
              priceMax: priceMax,
            },
          }
        );
        //Store the data in the state data
        setData(response.data);
        //Change bool isLoading to notify data is received
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fecthData();
  }, [searchBar, switchButton, priceRange]);
  // console.log(data);
  return (
    <div>
      <Hero />
      <div></div>
      {isLoading ? (
        <p>Waiting for data</p>
      ) : (
        <div className="offers container">
          {data.offers.map((offer) => {
            return <OfferCard key={offer._id} offer={offer} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
