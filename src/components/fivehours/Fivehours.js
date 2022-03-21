import Hour from "./Hour";

const FiveDays = ({ list }) => {
  return (
    <>
      {
        list.map(e => { return <Hour key={e.dt_txt} timeHour={e.dt_txt} icon={e.weather[0].icon} temp={e.main.temp} min={e.main.temp_min} max={e.main.temp_max} /> })
      }
    </>)
};

export default FiveDays;
