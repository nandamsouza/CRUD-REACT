import styles from '../Layout/Modal.module.css';
import {  useState } from 'react';

export default function Modal(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    

    const Name = (e)=>{
        setName(e.target.value);
    };

    const Email = (e) =>{
        setEmail(e.target.value);
    }
   
   
    return(    
        <>
            <button type="button" className={`${styles.btnModal}`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <ion-icon name="pencil-sharp"></ion-icon>
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-5" id="staticBackdropLabel">Edit User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                       <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name" onChange={Name}/>
                                <label htmlFor="floatingInput">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={Email}/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                       </div>
                      <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}
