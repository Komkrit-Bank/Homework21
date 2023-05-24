import { useForm } from "react-hook-form";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import '../scss/style.scss';

type Select = {
    theme: string;
};

export default function Theme() {
    const [theme, setTheme] = useState();
    const { register, handleSubmit } = useForm<Select>();
    const onChange = (data:any) => setTheme(data.theme);
    
    return (
        <>
            <div className="theme_container">
                <FontAwesomeIcon icon={theme === 'light_mode'? faSun : faMoon} />
                <form onChange={handleSubmit(onChange)} className="">
                    <select {...register("theme")} className="form-select">
                        <option value="light_mode">Light</option>
                        <option value="dark_mode">Dark</option>
                    </select>
                </form>
            </div>
        </>
    )
}