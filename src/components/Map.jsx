import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  // pragmatic navigation
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h1>
        Position: {lat},{lng}
      </h1>
    </div>
  );
}

export default Map;
