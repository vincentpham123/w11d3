import './LightSwitch.css';
import {useTheme} from '../../context/ThemeContext';
function LightSwitch() {
  const theme = useTheme();
  return (
    <div className={`light-switch ${theme.themeName}`}> 
      <div className="on" onClick={()=>theme.setThemeName('day')}>DAY</div>
      <div className="off" onClick={()=>theme.setThemeName('night')}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;