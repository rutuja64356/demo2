import React from "react";

import {Link} from 'react-router-dom';
const AddmissionPage = () => {
    return(
        <div style={{ backgroundColor:"green" , minHeight:"90vh" , padding:"2rem"}}>
        <div>
        style={{
            maxWidth: "900px",
            margin: "auto",
            backgroundColor:"white",
            padding:"1rem 2rem",
            borderRadius:"8px",
            boxShadow:"-moz-initial",
            height:"70vh",
            overflow:"auto"
         }}
        
        <h1>Welcome to Vivekanand College!</h1>
           <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.

At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
            </p>
            <h2 style={{ fontsize:'24px' , fontwight:'bold' , marginBottom:'20px'}}>Program Details & Fee Structure(Annual)</h2>
          </div>  
          </div>

    )
}
export default AddmissionPage;