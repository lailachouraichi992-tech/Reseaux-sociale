import "../styles/communautes.css";
import { Link } from "react-router";
import { useState } from "react";


export default function Communautes() {
 // 📌 Données des posts
  const [posts, setPosts] = useState([
    { id: 1, video: "/video/video1.mp4", likes: 0 },
    { id: 2, video: "/video/video6.mp4", likes: 0 },
   
  ]);

  // 💬 Ajouter une communautes
  const AjouterCommunautes = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, AjouterCommunautes: post.AjouterCommunautes + 1 } : post
    );
    setPosts(updatedPosts);
  };


  // 💬 Ajouter une communautes
  const ajouterCommunautes = () => {
    alert("AjouterCommunautes");
  };

  // 💬 Supprimer une communautes
  const supprimerCommunautes = () => {
    alert("SupprimerCommunautes");
  };


  return (

    <>


<div id="right-section">
    <i id="First-icon"  className="ri-threads-fill"></i> 
    
    <i id="Last-icon" className="ri-notification-line"></i>
     <input className="First-input" type="text" placeholder="text" />

        </div>
<div className="section-J">
 
    <Link to="/accueil"> <i className="ri-home-line"></i> </Link> <br />
        <Link to="/communautes"> <i className="ri-group-line"></i> </Link> <br />
        <Link to="/message"> <i className="ri-chat-2-line"></i> </Link> <br />
        <Link to="/notifications">  <i className="ri-notification-line"></i> </Link> <br />
        <Link to="/profil"> <i className="ri-user-line"></i> </Link> <br />
     

</div>

 

 

<div className="Section-K">

      
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

    <div className="section-2">
      
      
      <img className="img-J"

          src="/img/amie/onok-ukraine-14-juillet-2021-homme-affaires-tient-clique-icone-facebook-dans-ses-mains-reseau-social-reseau-mondial-connexion-client-donnees-reseau-international_150455-13919.jpg"
          alt="bright image1"
        />
       <h3 className="Title-1"> CHOURAICHI laila</h3> 
        <p className="Phrase-2"> Informatique / Natation / Voyage</p>
          <button id="ajouterCommunautes" 
              onClick={ajouterCommunautes} 
            ></button>
        </div>

 
    <div id="section-3">
         <img className="img-J"

          src="/img/amie/onok-ukraine-14-juillet-2021-homme-affaires-tient-clique-icone-facebook-dans-ses-mains-reseau-social-reseau-mondial-connexion-client-donnees-reseau-international_150455-13919.jpg"
          alt="bright image1"
        />
       <h3 className="Title-2"> Informatique </h3>
        <p className="Phrase-2"> Soutenance et presentation du projet Finale "Threads"  </p>

           <button className="supprimerCommunautes"
              onClick={supprimerCommunautes}
            ></button>


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

     <button id="supprimerCommunautes"
              onClick={supprimerCommunautes}
            ></button>

        </div>


</div>

        </div>
            
        </div>


    </>
  );
}
