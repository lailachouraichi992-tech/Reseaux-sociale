import "../styles/accueil.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Accueil() {

  // 📌 Données des posts
  const [posts, setPosts] = useState([
    { id: 1, video: "/video/video1.mp4", likes: 0 },
    { id: 2, video: "/video/video6.mp4", likes: 0 },
    { id: 3, video: "/video/video3.mp4", likes: 0 },
    { id: 4, video: "/video/video7.mp4", likes: 0 },
  ]);

  // ❤️ LIKE
  const likePost = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  // 💬 COMMENTAIRE
  const CommentePost = () => {
    alert("Commenter le post");
  };

  // 🔁 PARTAGE
  const sharePost = () => {
    alert("Revoyer le post");
  };

  // 📤 ENVOYER
  const sendPost = () => {
    alert("Partager le post");
  };

  return (
    <div>

      {/* 🔝 HEADER */}
      <div className="right-section">
        <i id="icon-1"  className="ri-threads-fill"></i>
        <i id="icon-2" className="ri-notification-line"></i>
        <input className="First-input" type="text" placeholder="Rechercher..." />
      </div>

      {/* 📌 MENU */}
      <div className="menu">
        <Link to="/accueil"> <i className="ri-home-line"></i> </Link> <br />
        <Link to="/communautes"> <i className="ri-group-line"></i> </Link> <br />
        <Link to="/message"> <i className="ri-chat-2-line"></i> </Link> <br />
        <Link to="/notifications">  <i className="ri-notification-line"></i> </Link> <br />
        <Link to="/profil"> <i className="ri-user-line"></i> </Link> <br />
      </div>

      {/* 📱 POSTS */}
      {posts.map((post) => (
        <div id="Section" key={post.id}>

          <img
            className="img-A"
            src="/img/amie/homme-gai-tenant-icone-facebook_53876-71093.avif"
            alt="profil"
          />

          <h3 className="first-title">CHOURAICHI LAILA</h3>

          <video className="first-Video" controls>
            <source src={post.video} type="video/mp4" />
          </video>

          {/* 🔥 ICÔNES (UI + UX) */}
          <div id="icone">

            <i id="like-icon"
              className="ri-heart-line"
              onClick={() => likePost(post.id)}
            ></i>
            <span>{post.likes}</span>

            <i id="comment-icon"
              className="ri-chat-ai-line"
              onClick={CommentePost}
            ></i>

            <i id="share-icon"
              className="ri-exchange-funds-line"
              onClick={sharePost}
            ></i>

            <i id="send-icon"
              className="ri-send-plane-line"
              onClick={sendPost}
            ></i>

          </div>

        </div>
      ))}

    </div>
  );
}
