import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import OfferCard from "../components/OfferCard";
import ViewMoreButton from "../components/ViewMoreButton";

const Home = ({ searchBar, switchButton, priceRange }) => {
  //State to store data from de backend
  const [data, setData] = useState();
  //State and variable to handle viewMoreButton
  const [viewMore, setViewMore] = useState(1);
  const [viewMoreDisplayed, setViewMoreDisplayed] = useState(true);

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
              viewMore: viewMore,
            },
          }
        );
        //Store the data in the state data
        setData(response.data);

        //Set state of the viewMore button
        let numberOffersRequested = response.data.limit * viewMore;
        if (response.data.count < numberOffersRequested) {
          setViewMoreDisplayed(false);
        }
        //Change bool isLoading to notify data is received
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fecthData();
  }, [searchBar, switchButton, priceRange, viewMore]);
  // console.log(data);
  return (
    <div>
      <Hero />
      <div></div>
      {isLoading ? (
        <p>Waiting for data</p>
      ) : (
        <div>
          <div className="offers container">
            {data.offers.map((offer) => {
              return <OfferCard key={offer._id} offer={offer} />;
            })}
          </div>
          <ViewMoreButton
            viewMore={viewMore}
            setViewMore={setViewMore}
            viewMoreDisplayed={viewMoreDisplayed}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
