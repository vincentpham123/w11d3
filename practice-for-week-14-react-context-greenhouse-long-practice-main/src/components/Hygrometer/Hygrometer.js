import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimateContext } from "../../context/ClimateContext";
import {useState,useEffect} from 'react';
function Hygrometer() {
  const climate = useClimateContext();
  const [newHumid,setNewHumid] = useState(climate.Humidity);
  useEffect(()=> {
    console.log('triggered')
    setTimeout(()=>{
      if (newHumid>climate.Humidity){
        climate.setHumidity(climate.Humidity+2);
    } else if (newHumid<climate.Humidity){
        climate.setHumidity(climate.Humidity-2);
    }
    }
    ,1000)
    },[newHumid,climate.Humidity]
  )
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {climate.Humidity}%</div>
      <ReactSlider
        value={climate.Humidity}
        onAfterChange={(val) => setNewHumid(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;