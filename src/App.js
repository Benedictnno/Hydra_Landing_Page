import { createContext, useState } from "react";
import Nav from "./Components/Nav";
import Top from "./Components/Top";
import Info from "./Components/Info";
import Intro from "./Components/Introduction/Intro";
import Cards from "./Components/Cards";
import Tech from "./Components/Introduction/Tech";
import Activities from "./Components/Activities";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
export const Appcomponet = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="App">
      <Appcomponet.Provider
        value={{ login, setLogin, signUp, setSignUp, open, setOpen }}
      >
        <Nav />
        <Top />
        <Info />
        <Intro />
        <Cards />
        <Tech />
        <Activities/>
        <Form/>
        <Footer/>
      </Appcomponet.Provider>
    </div>
  );
}

export default App;
