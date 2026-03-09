import "../styles/contenumultimedia.css";
import { Link } from "react-router";

export default function Contenumultimedia() {
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
  <Link className="link-A" to="/enregistrement"> <i className="ri-bookmark-line"></i> </Link>  <br />   <br />
  <Link className="link-A" to="/message"> <i className="ri-chat-4-line"></i> </Link>  <br /> <br />
  <Link className="link-A" to="/notifications"><i className="ri-notification-line"></i> </Link> <br /> <br />
  <Link className="link-A" to="/profil"> <i className="ri-user-3-line"></i> </Link>



</div>

<div id="section">
  
  <div>
      <img className="img-A"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
    </div>
    
    <div className="IDENTIFICATION">
      
       <h3 className="first-title"> <b>CHOURAICHI LAILA</b></h3>
        <p className="Last-p"> laila chouraichi</p>

        </div>
                  <div>


       <button>Modifier le profil</button>

       <div className="Links"></div>

       
  <Link className="Link-B" to="/threads"> Threads</Link> 
        
  <Link className="Link-D" to="/contenumultimédia"> Contenu multimédia </Link>  

  <Link className="Link-E" to="/republications"> Republications</Link> 


          

          
 
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



         <div>
         
        
          <img className="img-D"

          src="/img/photos/photos/adorable-chaton-dans-pull-motif-coeur-roses-roses-bougies_1298956-2102.avif"
          alt="bright image1"
        />
          <img className="img-E"

          src="/img/photos/photos/fc80a57ef506039be839fff2ac9ee773.jpg"
          alt="bright image1"
        />

          <img className="img-F"

          src="/img/photos/photos/pexels-secret-garden-333350-931162.jpg"
          alt="bright image1"
        />

         
      </div>

      

    


          
   <div className="icone">
        <i id="i-6" className="ri-heart-line"></i>
        <i id="i-7" className="ri-chat-ai-line"></i>
        <i id="i-8" className="ri-exchange-funds-line"></i>
        <i id="i-9" className="ri-send-ins-line"> </i>
      </div>

  

  
    </div>
      
          </div>

    

</body>

  
  
    </>
  );
}
