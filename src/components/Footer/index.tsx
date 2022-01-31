import Nav from "../Nav/index";
import * as s from "./styles";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
const Footer: React.FC = () => {
  return (
    <s.Container>
      <s.ContentInfos>
        <s.Title>loopstudios</s.Title>
        <Nav page="Footer" />
      </s.ContentInfos>
      <s.ContentSocialMedia>
        <s.NavIcons>
          <AiFillFacebook color="white" size={30} style={{marginRight: '10px'}} />
          <AiOutlineTwitter color="white" size={30} style={{marginRight: '10px'}} />
          <BsPinterest color="white" size={30} style={{marginRight: '10px'}}/>
          <AiOutlineInstagram color="white" size={30} />
        </s.NavIcons>
        <s.Details>@ 2021 Loopsstudios. All rigths reserved.</s.Details>
      </s.ContentSocialMedia>
    </s.Container>
  );
};

export default Footer;
