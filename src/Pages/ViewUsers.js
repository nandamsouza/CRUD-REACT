import styles from './ViewUsers.module.css';
import Modal from '../Components/Layout/Modal';
import { useEffect, useState } from 'react';
import instance from '../Components/http';

export default function ViewUsers() {

    const [user, setUser] = useState();
    
    useEffect(() => {

       getList();

    }, []);

    function getList(){
        instance.get('/users').then((res) => {
            setUser(res.data);
        })
    };
   
    function deleteUser(id){
        instance.delete(`/users/${id}`).then((res)=>{
            console.log('ok')
        }).catch((error)=>{
            console.log(error)
        })
        getList();
    }
    
    return (
        <div className={styles.container}>
            <h1>View Users</h1>
            <div className={`card ${styles.card}`}>
                <ion-icon name="people-outline" id={styles.ionicon}></ion-icon>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                                user?.map(( i ,idx)=>{
                                    return(
                                    <tr key={idx}>
                                        <th scope="row">{idx+1}</th>
                                        <th>{i.name}</th>
                                        <th>{i.email}</th>
                                        <th>
                                            <span>
                                             <Modal ID={i.id}></Modal>
                                            </span>
                                            <button className={styles.btnTrash}
                                             onClick={()=> deleteUser(i.id)}>
                                                <ion-icon name="trash-sharp"></ion-icon>
                                            </button>
                                        </th>
                                    </tr>
                                    )
                                })
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}