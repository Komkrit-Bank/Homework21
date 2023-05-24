import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './scss/style.scss'
import './App.css'
import Water from './components/Water'  

type Inputs = {theme: string};
document.body.classList.add('light_mode');

function App() {
  const [theme, setTheme] = useState('light_mode');
  const { register, handleSubmit } = useForm<Inputs>();
  

  const changeTheme = (theme: string)=> {
    document.body.classList.value = theme
  }

  const onChange = (data:any) => {
    setTheme(data.theme);
    changeTheme(data.theme)
  }
  

  return (
    <div className= 'app'>
      <Water theme= { theme }/>
      <div className="theme_container">
          <FontAwesomeIcon icon={theme === 'light_mode'? faSun : faMoon} />
            <form onChange={handleSubmit(onChange)} className="">
                <select {...register("theme")} className="form-select">
                    <option value="light_mode">Light</option>
                    <option value="dark_mode">Dark</option>
                </select>
            </form>
      </div>
    </div>
  )
}

export default App
