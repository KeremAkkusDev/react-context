import { useTheme } from '../Context/ThemeContext';
import Button from './Button';
import Header from './Header';
import Profile from './Profile';
import "../App.css"


function Container() {
    const {theme} = useTheme();
  return (
    <div className={`App ${theme}`}>
        <Button/>
        <Header/>
        <Profile/>
    </div>
  )
}

export default Container