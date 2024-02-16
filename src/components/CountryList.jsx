import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
// eslint-disable-next-line
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  // eslint-disable-next-line
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the city on the map" />
    );
  // eslint-disable-next-line
  const countries = cities.reduce(
    (acc, city) => acc.map((city) => city.country),
    []
  );
  return (
    <ul className={styles.countryList}>
      {/*  eslint-disable-next-line */}
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
