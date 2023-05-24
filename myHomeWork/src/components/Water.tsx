import { useForm } from 'react-hook-form'
import { useState } from 'react';
import Theme from './Theme';
import '../scss/style.scss'

type Inputs = {
    weight: number;
};

const Water = ()=>{
    const [result, setResult] = useState(0);
    const waterCal = (weight: any) => {
        const result = weight * 2.2 * 30/2
        return weight === 0? 'x' : result
    };

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit = (data:any) => setResult(data.weight)
    
    return(
        <>
            <div className="card border border-warning border-3">
                <div className="card-body">
                    <div className="card-title m-3">
                        <h2 className='form-label' style={{color: 'orange', fontWeight: 'bold'}}>ควรดื่มน้ำวันละเท่าไหร่ ?</h2>
                        <h3 className='form-label'>{waterCal(result).toLocaleString("en-US")} มล.</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('weight')} className='form-control  mt-5 input__weight' placeholder='น้ำหนักของคุณ(กิโลกรัม)'/>
                        <br/><button type='submit' className='btn btn-lg btn-warning my-3'>คำนวน</button>
                    </form>
                </div>
            </div>
            <Theme/>
        </>
    )
}

export default Water