import { useForm } from 'react-hook-form'
import { useState } from 'react';

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
    const onSubmit = (data:any) => {
        setResult(data.weight)
    }

    return(
        <>
            <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
            <h1>{waterCal(result)} มล.</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('weight')} placeholder='น้ำหนักของคุณ(กิโลกรัม)'/>
                <br/><button type='submit'>คำนวน</button>
            </form>
        </>
    )
}

export default Water