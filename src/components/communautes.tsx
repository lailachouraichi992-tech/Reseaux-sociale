import "../styles/communautes.css";
import { Link } from "react-router";

export default function Communautes() {
  return (

    <>


<div id="right-section">
    <i id="First-icon"  className="ri-threads-fill"></i> 
    
    <i id="Last-icon" className="ri-notification-line"></i>
     <input className="First-input" type="text" placeholder="text" />

        </div>
<div id="mid-section">
 
   
  <Link className="link-D" to="/accueil">accueil  </Link> <br /> <br />
  <Link className="link-D" to="/communautes"> communautes </Link>  <br /> <br />
  <Link className="link-D" to="/message"> message </Link>  <br /> <br />
  <Link className="link-D" to="/notifications"> notifications </Link> <br /> <br />
  <Link className="link-D" to="/profil"> profil </Link>

</div>

 

 

<div id="section">

      
  <div>
      <img id="img-A"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
    </div>
    
    <div>
      
       <h3 className="first-title"> <b>CHOURAICHI LAILA</b></h3>
        <p id="Second-title"> Compléter votre profil</p>


        </div>

        
  <div>
    
        
    <div className="section-1">
      
      <div>


        </div>

    <div id="section-2">
      
      
      <img className="img-J"

          src="/img/amie/onok-ukraine-14-juillet-2021-homme-affaires-tient-clique-icone-facebook-dans-ses-mains-reseau-social-reseau-mondial-connexion-client-donnees-reseau-international_150455-13919.jpg"
          alt="bright image1"
        />
       <h3 className="Title-1"> CHOURAICHI laila</h3> 
        <p className="Phrase-2"> Informatique / Natation / Voyage</p>
         <button className="last-button"> Ajouter </button>


        </div>

 
    <div id="section-3">
         <img className="img-J"

          src="/img/amie/onok-ukraine-14-juillet-2021-homme-affaires-tient-clique-icone-facebook-dans-ses-mains-reseau-social-reseau-mondial-connexion-client-donnees-reseau-international_150455-13919.jpg"
          alt="bright image1"
        />
       <h3 className="Title-2"> Informatique </h3>
        <p className="Phrase-2"> Soutenance et presentation du projet Finale "Threads"  </p>
        <button className="last-button"> Términer </button>



        </div>
   
    <div id="section-4">
         <img className="img-J"

          src="/img/amie/onok-ukraine-14-juillet-2021-homme-affaires-tient-clique-icone-facebook-dans-ses-mains-reseau-social-reseau-mondial-connexion-client-donnees-reseau-international_150455-13919.jpg"
          alt="bright image1"
        />

               <h3 className="Title-3"> Crée un threads</h3>

               <p className="Phrase-2">  Organisation et adaptation <br /> 
               Création des Applicaion Web <br /> 
               Capacité à travailler des projets </p>

        <button className="last-button"> Términer </button>


        </div>


</div>

        </div>
            
        </div>


    </>
  );
}
