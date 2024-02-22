import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
// eslint-disable-next-line
function CityList() {
  const { cities, isLoading } = useCities();
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
