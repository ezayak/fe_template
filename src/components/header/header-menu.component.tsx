import './header.style.scss';
import { IconContext } from 'react-icons';
import { CgLogIn, CgLogOut } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
    const user: boolean = false;

    const onLogout = () => {
        
    }

    return (
        <div className='header-container'>
            <div className='header-menu'>
                <div className='header-menu-left'></div>
                <div className='header-menu-right'>
                    <IconContext.Provider value={{ className: 'menu-icon' }}>   
                        {
                            !user ? 
                                <div className='navigation-item'><Link to='/login'><CgLogIn /></Link></div>
                            :
                            <IconContext.Provider value={{ className: 'menu-icon' }}>    
                                <div className='navigation-item'><button className='btn-plain' onClick={onLogout}><CgLogOut /></button></div>
                            </IconContext.Provider>                            
                        } 
                    </IconContext.Provider>                    
                </div>
            </div>
        </div>
    );
}

export { HeaderMenu };