import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimateContext } from "../../context/ClimateContext";
import {useState,useEffect} from 'react';
function Thermometer() {
  const climate = useClimateContext();
  const [newTemp,setNewTemp] = useState(climate.Temperature);
  useEffect((prevtemp)=> {
    console.log('triggered')
    setTimeout(()=>{
      if (newTemp>climate.Temperature){
        climate.setTemperature(climate.Temperature+1);
    } else if (newTemp<climate.Temperature){
        climate.setTemperature(climate.Temperature-1);
    }
    }
    ,1000)
    },[newTemp,climate.Temperature]
  )
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {climate.Temperature}°F</div>
      <ReactSlider
        value={climate.Temperature}
        onAfterChange={(val) => setNewTemp(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;