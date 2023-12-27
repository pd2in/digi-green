import { createContext, useState } from 'react';

export const HydroponicConfigContext = createContext({
  config: {},
  setConfig: (key) => {},
});

function HydroponicConfigContextProvider({ children }) {
  const [hydroponicConfig, setHydroponicConfig] = useState({
    PPM: {
      minimum: 0,
      maximum: 0,
    },
    pumpStatus: false,
    pumpActiveRangeHour: {
      startTime: { hour: 0, minute: 0 },
      endTime: { hour: 0, minute: 0 },
    },
    fertilizationSchedule: {
      numberOfDays: 0,
      startDate: { date: 1, month:1, year: 2000},
      fertilizationTime: {hour: 0, minute: 0},
    }
  });

  function setConfig(key, value) {
    setHydroponicConfig((prevHydroponicConfig) => ({
      ...prevHydroponicConfig,
      [key]: value,
    }));
  }

  const value = {
    config: hydroponicConfig,
    setConfig: setConfig,
  };

  return (
    <HydroponicConfigContext.Provider value={value}>
      {children}
    </HydroponicConfigContext.Provider>
  );
}

export default HydroponicConfigContextProvider;
