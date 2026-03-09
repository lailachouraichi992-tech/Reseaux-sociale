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
<div id="mid-section">
 
  <Link id="link-A" to="/accueil"> <i className="ri-home-line"></i> </Link> <br /> <br />
  <Link id="link-A" to="/communautes"> <i className="ri-group-line"></i> </Link>  <br /> <br />
  <Link id="link-A" to="/message"> <i className="ri-chat-4-line"></i> </Link>  <br /> <br />
  <Link id="link-A" to="/notifications"><i className="ri-notification-line"></i> </Link> <br /> <br />
  <Link id="link-A" to="/profil"> <i className="ri-user-3-line"></i> </Link>

</div>




  


      
  <div className="section">
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
