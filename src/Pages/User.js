import styles from './User.module.css';
import { useState } from 'react';
import instance from '../Components/http';
import Swal from 'sweetalert2';

export default function User(){
    const[name , setName] = useState('');
    const[email, setEmail] = useState('');

    const salve = async() => {
        Swal.showLoading()
       try {
           instance.post('/user',{
             name,
             email
           }).then(()=>{
                console.log('ok')
           })
            Swal.close()
            Swal.fire({
            icon:'success',
            title:'Salvo!'
         })
       } catch (error) {
            console.log(error)
       }
     };
     function cancel(){
        document.getElementById('lblName').value = "";
        document.getElementById('lblEmail').value= "";
     }
    return(
        <div className={styles.container}>
            <h1>Edit User</h1>
            <div className={`card ${styles.card}`}>
              <ion-icon name="person-add-outline"></ion-icon>
                <div className={`card-body ${styles.cardBody}`}>
                    <label className="form-label">Name</label>
                    <input type='text' className="form-control" id='lblName'
                     onChange={(e)=> setName(e.target.value)}>
                    </input>
                    <label className="form-label">Email</label>
                    <input type='text' className="form-control" placeholder="name@example.com" id='lblEmail'
                      onChange={(e)=>setEmail(e.target.value)}>
                    </input>
                    <button className='btn btn-primary'
                    onClick={()=>salve()}
                    >Submit</button>
                    <button className='btn btn-danger'onClick={()=>cancel()}>Cancel</button>
                </div>
            </div>
        </div>
    )
}