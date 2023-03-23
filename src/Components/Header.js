import {useTheme} from '../Context/ThemeContext'
function Header() {
    const {theme} = useTheme();
  return (
    <>
    <br/>
        <label>Active Theme: {theme}</label>
        <div>Header</div>
    </>
    
  )
}

export default Header