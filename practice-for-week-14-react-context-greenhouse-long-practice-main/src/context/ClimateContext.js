// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext,useContext,useState } from "react";

const ClimateContext = createContext();

export const useClimateContext = () => {return useContext(ClimateContext)};

export const ClimateProvider = (props) => {
    const [Temperature,setTemperature] = useState(50)
    const [Humidity,setHumidity] = useState(40)

    return (
        <ClimateContext.Provider value={{Temperature,setTemperature}}>
            {props.children}
        </ClimateContext.Provider>
    )
}