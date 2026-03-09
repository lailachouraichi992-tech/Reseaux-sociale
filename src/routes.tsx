import { Routes, Route } from "react-router-dom";

import Accueil from "./components/accueil";
import Communautes from "./components/communautes";
import Contenumultimedia from "./components/contenumultimedia";
import Invitation from "./components/invitation";
import Message from "./components/message";
import Notifications from "./components/notifications";
import Threads from "./components/threads";
import Profil from "./components/profil";
import Republications from "./components/republications";







function routes() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />

      <Route path="/Accueil" element={<Accueil />} />
      <Route path="/Communautes" element={<Communautes />} />
      <Route path="/Contenumultimédia" element={<Contenumultimedia />} />
      <Route path="/Republications" element={<Republications />} />
      <Route path="/Invitation" element={<Invitation />} />
      <Route path="/Message" element={<Message />} />
      <Route path="/Notifications" element={<Notifications />} />
      <Route path="/threads" element={<Threads />} />
      <Route path="/Profil" element={<Profil />} />

    </Routes>
  );
}

export default routes;