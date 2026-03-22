import "../styles/invitation.css";
import { Link } from "react-router";

export default function invitation() {
  return (

    <>

    <body>
      
    

<div className="right-section">
    <i id="First-icon"  className="ri-threads-fill"></i> 
    
    <i id="Last-icon" className="ri-notification-line"></i>
     <input className="First-input" type="text" placeholder="text" />

        </div>
<div className="Box">
  
  <Link id="link-D" to="/accueil">  accueil</Link> <br /> <br />
  <Link id="link-D" to="/communautes">  communautes</Link>  <br /> <br />
  <Link id="link-D" to="/message">  message</Link>  <br /> <br />
  <Link id="link-D" to="/notifications">  notifications</Link> <br /> <br />
  <Link id="link-D" to="/profil">  profil</Link>

</div>




  


      
  <div className="Box-2">
      <img className="img-B"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
      
       <h1 className="Last-title"> Soumia_Loutfi </h1>
        <p className="First-p"> Voici mon message </p>
 


<button className="Button-1"> Confirmer  </button>

<button className="Button-2"> Surprimer </button>




        <hr />
      
  
  
      
  
      <img className="img-B"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
      
       <h1 className="Last-title"> Hajar_Andam</h1>
        <p className="First-p"> Voici mon message </p>


        

<button className="Button-1"> Confirmer  </button>

<button className="Button-2"> Surprimer </button>


        <hr />
      

 

      <img className="img-B"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
   

         <h1 className="Last-title"> Loubouna_goumri</h1>
        <p className="First-p"> Voici mon message </p>


        

<button className="Button-1"> Confirmer  </button>

<button className="Button-2"> Surprimer </button>


   <hr />

 
</div>
      
      
</body>


    </>
  );
}
