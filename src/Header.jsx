import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

function Header(){
    const {theme,setTheme} = useContext(ThemeContext);

    return(
        <div>
            <h2  className={`${theme}`}>Current Theme: {theme}</h2>
            <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
        </div>
    )
}

export default Header