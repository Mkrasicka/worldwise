import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
// eslint-disable-next-line
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  // eslint-disable-next-line
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on the city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {/*  eslint-disable-next-line */}
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
