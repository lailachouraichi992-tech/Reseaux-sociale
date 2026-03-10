import "../styles/profil.css";
import { Link } from "react-router";

export default function Profil() {
  return (

    <>


    <body>
      
    

<div className="right-section">
    <i id="First-icon"  className="ri-threads-fill"></i> 
    
    <i id="Last-icon" className="ri-notification-line"></i>
     <input className="First-input" type="text" placeholder="text" />

        </div>


<div id="mid-section">
 
  <Link className="link-A" to="/accueil"> <i className="ri-home-line"></i> </Link> <br /> <br />
  <Link className="link-A" to="/communautes"> <i className="ri-group-line"></i> </Link>  <br /> <br />
  <Link className="link-A" to="/message"> <i className="ri-message-3-line"></i> </Link>  <br /> <br />
  <Link className="link-A" to="/notifications"><i className="ri-notification-2-line"></i> </Link> <br /> <br />
  <Link className="link-A" to="/profil"> <i className="ri-user-3-line"></i> </Link>

</div>
<div id="section">
  
  <div>
      <img className="img-A"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
    </div>
    
    <div>
      
       <h3 className="first-title"> <b>CHOURAICHI LAILA</b></h3>

        </div>
                  
                  
      <div>

          <button> <Link className="link-A" to="/Profil"> Profil </Link>   </button> 
       
   
  <Link className="Link-B" to="/Publication"> Publication</Link> 
        
  <Link className="Link-D" to="/contenumultimédia"> Contenu multimédia </Link>  

  <Link className="Link-E" to="/republications"> Republications</Link> 

          
 
  
    </div>

   
 
 
  <div>
      <img className="img-B"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
    </div>
    
    <div>
      
       <h3 className="Last-title"> <b>CHOURAICHI LAILA</b></h3>
        <p className="First-p"> laila chouraichi</p>

        </div>



        
          <img className="img-C"

          src="/img/photos/photos/adorable-chaton-dans-pull-motif-coeur-roses-roses-bougies_1298956-2102.avif"
          alt="bright image1"
        />
        
          <img className="img-D"

          src="/img/photos/photos/fc80a57ef506039be839fff2ac9ee773.jpg"
          alt="bright image1"
        />
          <img className="img-E"

          src="/img/photos/photos/mignon-chaton-moelleux-regardant-au-dessus-boite-cadeaux-forme-coeur-rose-entouree-roses-coeurs-flottants-rubans-creant-scene-romantique-charmante_759447-9859.avif"
          alt="bright image1"
        />
    
        
         
    
      

          
   <div className="icone">
        <i id="i-6" className="ri-heart-line"></i>
        <i id="i-7" className="ri-chat-ai-line"></i>
        <i id="i-8" className="ri-exchange-funds-line"></i>
        <i id="i-9" className="ri-send-ins-line"> </i>
      </div>

  
    </div>

      


<div >
    
  

          </div>
</body>
    </>
  );
}
