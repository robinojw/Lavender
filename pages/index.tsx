import { Hero } from "../components/hero/hero";
import { Layout } from "../shared/layout/layout";

const hero = {
  title: "Lavender English, fast and fun learning.",
  image: {
    webp: "/map.png",
    fallbackImg: "/map.png",
    alt: "Map of Madrid"
  },
  button: {
    name: "Start Learning",
    link: "#signup"
  }
};

export default function Home() {
  return (
    <Layout>
      <Hero hero={hero} />
    </Layout>
  );
}
