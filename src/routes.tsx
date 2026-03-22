import { Routes, Route } from "react-router-dom";

import Accueil from "./components/accueil";
import Communautes from "./components/communautes";
import Contenumultimedia from "./components/contenumultimedia";
import Invitation from "./components/invitation";
import Message from "./components/message";
import Notifications from "./components/notifications";
import Publication from "./components/publication";
import Profil from "./components/profil";
import Republications from "./components/republications";







function routes() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />

      <Route path="/accueil" element={<Accueil />} />
      <Route path="/communautes" element={<Communautes />} />
      <Route path="/contenumultimédia" element={<Contenumultimedia />} />
      <Route path="/republications" element={<Republications />} />
      <Route path="/invitation" element={<Invitation />} />
      <Route path="/message" element={<Message />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/publication" element={<Publication />} />
      <Route path="/profil" element={<Profil />} />

    </Routes>
  );
}

export default routes;