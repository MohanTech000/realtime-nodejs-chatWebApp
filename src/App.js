import { useState } from "react";

import "./App.css";

//components
import AuthPage from "./components/Authpage";
import ChatsPage from "./components/ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;