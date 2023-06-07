import './navbar.css';
import {Switch,Route} from 'react-router-dom'
const NavBar = () => {

    return (
        <>
        <Switch>
            <Route path='/sample'>
            {/* sample */}
            </Route>
            <Route path='/sensory'>
            {/* sample */}
            </Route>
            <Route path='/sensory'>
            {/* sample */}
            </Route>
            <Route path='/sensory'>
            {/* sample */}
            </Route>
        </Switch>
        <div id='navbar'>
        <button className='buttons'>Sample Survey</button>
        <button className='buttons'>Sensory Preferences</button>
        <button className='buttons'>Report</button>
        <button className='buttons'>Home</button>
        </div>
        </>
    )


}

export default NavBar;