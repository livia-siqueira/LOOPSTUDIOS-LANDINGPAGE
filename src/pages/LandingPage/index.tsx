import Footer from "../../components/Footer";
import ItemCreation from "../../components/ItemCreation";
import * as s from "./styles";

const dummy_datas = [
  {
    title: "deep earth",
    image: "images/desktop/image-deep-earth.jpg",
  },
  {
    title: "night arcade",
    image: "images/desktop/image-night-arcade.jpg",
  },
  {
    title: "soccer team vr",
    image: "images/desktop/image-soccer-team.jpg",
  },
  {
    title: "the grid",
    image: "images/desktop/image-grid.jpg",
  },
  {
    title: "from up above  vr",
    image: "images/desktop/image-from-above.jpg",
  },
  {
    title: "pocket boreals",
    image: "images/desktop/image-pocket-borealis.jpg",
  },
  {
    title: "the curiosity",
    image: "images/desktop/image-curiosity.jpg",
  },
  {
    title: "make it fisheye",
    image: "images/desktop/image-fisheye.jpg",
  },
];

const LandingPage: React.FC = () => {
  return (
    <s.Container>
      <s.DetailsImage>
        <s.Image src="images/desktop/image-interactive.jpg" />
        <s.Description>
          <s.Title>the leader in interactive vr</s.Title>
          <s.Text>
            Founded in 2011, Loopstudio has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </s.Text>
        </s.Description>
      </s.DetailsImage>
      <s.OurCreations>
        <s.HeaderCreations>
          <s.Title>our creations</s.Title>
          <s.Button>see all</s.Button>
        </s.HeaderCreations>
        <s.ContainerItensCreations>
          {dummy_datas.map((item) => {
            return <ItemCreation item={item} />;
          })}
        </s.ContainerItensCreations>
      </s.OurCreations>
      <Footer />
    </s.Container>
  );
};

export default LandingPage;
