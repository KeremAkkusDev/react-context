import { useTheme } from '../Context/ThemeContext'
function Button() {
    const {theme,setTheme} = useTheme();
  return (
    <>  
        <label>Active Theme: {theme}</label>
        <button onClick={()=>{theme==='dark' ? setTheme('light') : setTheme('dark') }}>BUTTON</button>

    </>
  )
}

export default Button