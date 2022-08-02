import React,{useState} from 'react';
import { Container } from 'reactstrap';
import '../style.css'
import Avatar from '../Imagenes/avatar_default.jpg'
import Index from './Index.js';
import Documentacion from './Documentacion'
import ReciboDeSueldo from './RecibosDeSueldo'
import Perfil  from './Perfil'
import Novedades from './Novedades'
import Licencias from './Licencias'
import Turnos from './Turnos.js'
import {FaBars, FaHome, FaAddressCard ,FaCopy, FaCalendarDay, FaUmbrellaBeach, FaUserEdit,FaRegNewspaper} from 'react-icons/fa'

const Inicio = () =>{
    const[comp,setComp]=useState(<Index/>)

    return(
       <div className='d-flex justify-content-space-between col-12'>
           <div className='d-sm-flex d-none col-sm-3 menu'>
               <div className='userinfo'>
                    <div className='userpic'>
                        <img className='userimg' src={Avatar}></img>
                    </div>
                    <div><h5>Nombre Usuario</h5></div>
                    <div>
                        <progress color='secondary' value={50/100}></progress>
                        <h6>Nivel 1</h6>
                    </div>
               </div>
               <hr></hr>

               <div className='optionsmenu'>
                    <div className='itemmenu btn'onClick={()=>setComp(<Index/>)}>
                        <div className='tag'><FaHome/> <h6>_Inicio</h6></div>
                    </div>
                    <div className='itemmenu btn'onClick={()=>setComp(<Documentacion/>)}>
                        <div className='tag'><FaAddressCard/> <h6>_Documentacion</h6></div>
                    </div>
                    <div className='itemmenu btn'onClick={()=>setComp(<ReciboDeSueldo/>)}>
                        <div className='tag'><FaCopy/><h6>_Recibo de Sueldo</h6></div>
                    </div>
                    <div className='itemmenu btn'onClick={()=>setComp(<Turnos/>)}>
                        <div className='tag'><FaCalendarDay/> <h6>_Turnos</h6></div>
                    </div>
                    <div className='itemmenu btn'onClick={()=>setComp(<Licencias/>)}>
                        <div className='tag'><FaUmbrellaBeach/> <h6>Licencias</h6></div>
                    </div>
                    <div className='itemmenu btn'onClick={()=>setComp(<Novedades/>)}>
                        <div className='tag'><FaRegNewspaper/> <h6>_Novedades</h6></div>
                    </div>
                    <div className='itemmenu btn'onClick={()=>setComp(<Perfil/>)}>
                        <div className='tag'><FaUserEdit/> <h6>_Perfil</h6></div>
                    </div>
               </div>
           </div>
           <div className='col-md-9'>
           <div className='fixed-action-btn d-flex d-sm-none menuHamburg'>
                <a className="btn-floating btn-lg turquoise" id="openNav">
                <FaBars/>
                 </a>
            </div>
               {comp}
           </div>
       </div>
       

    )

}

export default Inicio