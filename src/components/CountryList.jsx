import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
// eslint-disable-next-line
function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  // eslint-disable-next-line
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the city on the map" />
    );
  // eslint-disable-next-line
  // eslint-disable-next-line
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((city) => city.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {/*       {/*  eslint-disable-next-line */}
      {countries.map((country) => (
        // eslint-disable-next-line
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
