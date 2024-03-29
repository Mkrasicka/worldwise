import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

// eslint-disable-next-line
function CityItem({ city }) {
  // eslint-disable-next-line
  const { currentCity } = useCities();
  // eslint-disable-next-line
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        // eslint-disable-next-line
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className="styles.date">{formatDate(date)}</time>
      </Link>
    </li>
  );
}

export default CityItem;
