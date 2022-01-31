import * as s from "./styles";
import Nav from "../Nav";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const changeVisibleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <s.Container>
        <s.Content>
          <s.Title>loopstudios</s.Title>
          <s.Menu onClick={changeVisibleMenu}>
            <FiMenu color="white" size={36} />
          </s.Menu>
        
          <s.Nav>
            <Nav page="Header" />
          </s.Nav>
        </s.Content>
        <s.Description>
          <s.Text>immersive experiences that deliver</s.Text>
        </s.Description>
       
      </s.Container>
      {menu && (
            <s.MenuResposive>
              <Nav page="" />
            </s.MenuResposive>
          )}
    </>
  );
};

export default Header;
