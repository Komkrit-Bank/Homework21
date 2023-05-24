import { useForm } from 'react-hook-form'
import { useState } from 'react';
import '../scss/style.scss'

type Inputs = {
    weight: number,
    theme: string
};

const Water = (props: any)=>{
    const { theme } = props
    const [result, setResult] = useState(0);

    const waterCal = (weight: any) => {
        const result = weight * 2.2 * 30/2
        return weight === 0? 'x' : result
    };

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit = (data:any) => setResult(data.weight)

    const card_theme = (data: string) => {
        if (data === 'light_mode'){
            return "card border border-warning border-3 " + theme + '--card';
        } else {
            return "card border border-white border-5 " + theme + '--card';
        }
    }

    const button_theme = (data: string) => {
        if (data === 'light_mode') {
            return 'btn btn-lg btn-warning my-3'
        } else {
            return 'btn btn-lg btn-dark my-3'
        }
    }
    
    return(
        <>
            <div className= {card_theme(theme)}>
                <div className="card-body">
                    <div className="card-title m-3">
                        <h2 className={'form-label '+ theme +'--text'}>ควรดื่มน้ำวันละเท่าไหร่ ?</h2>
                        <h3 className='form-label'>{waterCal(result).toLocaleString("en-US")} มล.</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('weight')} className='form-control  mt-5 input__weight' placeholder='น้ำหนักของคุณ(กิโลกรัม)'/>
                        <br/><button type='submit' className={ button_theme(theme) }>คำนวน</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Water