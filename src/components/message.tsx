import "../styles/message.css";
import { Link } from "react-router";

export default function Message() {
  return (

    <>

    <body>
      
    

<div className="right-section">
    <i id="First-icon"  className="ri-threads-fill"></i> 
    
    <i id="Last-icon" className="ri-notification-line"></i>
     <input className="First-input" type="text" placeholder="text" />

        </div>
<div id="mid-section">
   
<Link id="link-D" to="/accueil"> <i className="ri-home-line">accueil</i> </Link> <br /> <br />
  <Link id="link-D" to="/communautes"> <i className="ri-group-line">communautes</i> </Link>  <br /> <br />
  <Link id="link-D" to="/message">  <i className="ri-chat-search-line">message</i> </Link>  <br /> <br />
  <Link id="link-D" to="/notifications"> <i className="ri-home-line">notifications</i> </Link> <br /> <br />
  <Link id="link-D" to="/profil">  <i className="ri-user-line">profil</i> </Link>


</div>




  


<button className="first-button"><Link className="link-B" to="/message"> Message </Link> </button>

<button className="Second-button"><Link className="link-B" to="/invitation"> invitation  </Link></button>


      
  <div className="section">
      <img className="img-B"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
      
       <h1 className="Last-title"> Soumia_Loutfi </h1>
        <p className="First-p"> Voici mon message </p>
 



        <hr />
      
  
  
      
  
      <img className="img-B"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
      
       <h1 className="Last-title"> Hajar_Andam</h1>
        <p className="First-p"> Voici mon message </p>

        <hr />
      

 

      <img className="img-B"
        src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
        alt="bright image1"
        />
   

         <h1 className="Last-title"> Loubouna_goumri</h1>
        <p className="First-p"> Voici mon message </p>

   <hr />

 
</div>
      
      
</body>


    </>
  );
}
