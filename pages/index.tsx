import { Hero } from "../components/hero/hero";
import { Learn } from "../components/learn/learn";
import { Layout } from "../shared/layout/layout";

const hero = {
  title: "Lavender English, fast and fun learning.",
  image: {
    webp: "/webp/map.webp",
    fallbackImg: "/map.png",
    alt: "Map of Madrid"
  },
  button: {
    name: "Start Learning",
    link: "#signup"
  }
};

const learn = {
  title: "Learn at home, or in person...",
  description:
    "Start learning today, whether your new to english or a pro, we have courses for all abilities. \n\n Due to the current climate we are currently only hosting online lessons but will be hosting a number of outdoor lessons in the spring!",
  image: {
    webp: "/webp/learn.webp",
    fallbackImg: "learn.jpg",
    alt: "Learn at home or online."
  }
};

export default function Home() {
  return (
    <Layout>
      <Hero hero={hero} />
      <Learn learn={learn} />
    </Layout>
  );
}
