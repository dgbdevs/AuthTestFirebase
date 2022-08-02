import React,{useState,useEffect} from 'react';
import {auth} from '../firebaseConfig'
import {
     createUserWithEmailAndPassword,
     sendEmailVerification ,
     signOut,
     onAuthStateChanged,
     signInWithEmailAndPassword } from 'firebase/auth'


const Index = () =>{
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const [user,setUser]=useState()

    useEffect(() => {
        verifyUser();
    }, [])

    const verifyUser = () =>{
        
        onAuthStateChanged(auth,(user) =>{
            if(user){
                setUser(user)
                
                if (user.emailVerified){
                    console.log('verificado')
                }else{
                    sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('Email enviado')
                        }).catch((error)=>{
                        console.log(error.message)
                        })
                  
                }
            }else{
                console.log('No user logged in')
            }
        })
     

    }
    
    const logOut = () =>{
        signOut(auth).then(()=>{
            console.log("signout ok")
            setUser()
        }).catch((error)=>{
            console.log(error.message)
        })
    }
   

    const createUser = (e) =>{
        e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('exito')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
        });
    }
    const loginUser = (e) =>{
        e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('exito')
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
        });
    }


    return(
        <div>
            {auth.currentUser ?
            <div>Bienvenido {user.email}
                {user.emailVerified ?
                <div>VERIFICADO</div>
                :
                <div>ANDA A VERIFICAR EL CORREO</div>
                }
                <button onClick={logOut}>LOGOUT</button>
            </div>
            :
            <div className='login'>
            <div className='col-6 d-flex'>
                <form onSubmit={loginUser}>
                    <label className='d-block p-2 m-2'>Usuario
                        <input type='email' onChange={(e)=>setEmail(e.target.value)}></input></label>
                    <label className='d-block p-2 m-2'>password
                        <input type='password' onChange={(e)=>setPassword(e.target.value)}></input></label>
                    <button type='submit'>Login</button>
                </form>
            </div>
            <div className='col-6 d-flex'>
                <form onSubmit={createUser}>
                    <label className='d-block p-2 m-2'>Usuario
                        <input type='email' onChange={(e)=>setEmail(e.target.value)}></input></label>
                    <label className='d-block p-2 m-2'>password
                        <input type='password' onChange={(e)=>setPassword(e.target.value)}></input></label>
                    <button type='submit'>SignUp</button>
                </form>
            </div>
            </div>
            }
        </div>
    )
}
export default Index;