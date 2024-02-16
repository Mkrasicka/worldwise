import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

// eslint-disable-next-line
function CityItem({ city }) {
  // eslint-disable-next-line
  const { cityName, emoji, date } = city;
  return (
    <div className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className="styles.date">{formatDate(date)}</time>
    </div>
  );
}

export default CityItem;
