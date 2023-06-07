import './ClimateStats.css';
import { useClimateContext } from '../../context/ClimateContext';
function ClimateStats() {
  const climate = useClimateContext();
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climate.Temperature}°F
      </div>
      <div className="humidity">
        Humidity {climate.Humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;