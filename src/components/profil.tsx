import "../styles/profil.css";
import { Link } from "react-router";
import { useState } from "react";



export default function Profil() {


  // 📌 Données des posts
  const [Images, setPosts] = useState([
    { id: 1, Image: "/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif", likes: 0 },
    { id: 2, Image: "/img/photos/photos/adorable-chaton-dans-pull-motif-coeur-roses-roses-bougies_1298956-2102.avif", likes: 0 },
    { id: 3, Image: "/img/photos/photos/adorable-chaton-dans-pull-motif-coeur-roses-roses-bougies_1298956-2102.avif", likes: 0 },
  ]);

  // ❤️ LIKE
  const LikeImage = (id) => {
    const updatedImages = Images.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedImages);
  };


  // 💬 COMMENTAIRE
  const CommenterImage = () => {
    alert("Commenter Image");
  };

  // 🔁 PARTAGE
  const ShareImage = () => {
    alert("Transférer Image");
  };

  // 📤 ENVOYER
  const  PartagerImage = () => {
    alert("Partager Image ");
  };







  return (

    <>


    <body>
      
    

<div className="right-section">
    <i id="First-icon"  className="ri-threads-fill"></i> 
    
    <i id="Last-icon" className="ri-notification-line"></i>
     <input className="First-input" type="text" placeholder="text" />

        </div>


<div className="section-Z">
 
        <Link to="/accueil"> <i id="icone-1" className="ri-home-line"></i> </Link> <br />
        <Link to="/communautes"> <i id="icone-1" className="ri-group-line"></i> </Link> <br />
        <Link to="/message"> <i id="icone-1" className="ri-chat-2-line"></i> </Link> <br />
        <Link to="/notifications">  <i id="icone-1" className="ri-notification-line"></i> </Link> <br />
        <Link to="/profil"> <i id="icone-1"  className="ri-user-line"></i> </Link> <br />
     
  </div>

<div id="BOX">
  
  <div>
      <img className="img-A"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
    </div>
    
    <div>
      
       <h3 id="first-title"> <b>CHOURAICHI LAILA</b></h3>

        </div>
                  
                  
      <div>

          <button> <Link className="link-A" to="/Profil"> Profil </Link>   </button> 
       
   
  <Link className="Link-B" to="/Publication"> Publication</Link> 
        
  <Link className="Link-Y" to="/contenumultimédia"> Contenu multimédia </Link>  

  <Link className="Link-E" to="/republications"> Republications</Link> 

          
 
  
    </div>

   
 
 
  <div>
      <img className="img-B"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
    </div>
    
    <div>
      
       <h3 id="Last-title"> <b>CHOURAICHI LAILA</b></h3>
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
    
        
         
    
      
   {/* 🔥 ICÔNES (UI + UX) */}
            <div id="icone">

            <i id="like-icon"
               className="ri-heart-line"
              onClick={LikeImage}
            ></i>

            <i id="comment-icon"
              className="ri-chat-ai-line"
              onClick={CommenterImage}
            ></i>

            <i id="share-icon"
              className="ri-exchange-funds-line"
              onClick={ShareImage}
            ></i> 

            <i id="send-icon"
              className="ri-share-line"
              onClick={PartagerImage}
            ></i>

          </div>
  
    </div>

      


<div >
    
  

          </div>
</body>
    </>
  );
}
