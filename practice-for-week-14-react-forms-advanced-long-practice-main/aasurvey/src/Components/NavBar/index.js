import './navbar.css';
import {Switch,Route,Redirect,Link} from 'react-router-dom'


import App from '../../App';
const NavBar = () => {
    // const handleClick=(tabName)=>{
    //     switch(tabName){
    //         case('sample'):
    //             return (e) => navigate('/sample');
    //             break;
            
    //         case('sensory'):
    //             return (e) => navigate('/sensory');
    //             break;
    //         case('report'):
    //             return (e) => navigate('/report');
    //             break;
    //         case('home'):
    //             return (e) => navigate('/home');
    //             break;
    //     }
    // }
    return (
        <>
        <ul id='navbar'>
        <li className='buttons'><Link to={'/sample'}>Sample Survey</Link></li>
        <li id='sensory' className='buttons'><Link to={'/sensory'}>Sensory Preferences</Link></li>
        <li className='buttons'><Link to={'/report'}>Report</Link></li>
        <li className='buttons'><Link to={'/'}>Home</Link></li>
        </ul>
        </>
    )


}

export default NavBar;