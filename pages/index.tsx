import { CourseInfo } from "../components/course-info/course-info";
import { Hero } from "../components/hero/hero";
import { Learn } from "../components/learn/learn";
import { Testimonials } from "../components/testimonials/testimonials";

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

const testimonials = {
  title: "Testimonials",
  ratings: [
    {
      quote: "I loved learning with Grace, the course was so fun and engaging.",
      name: "Harriet Long",
      subscription: "13 Month Subscriber"
    },
    {
      quote: "I loved learning with Grace, the course was so fun and engaging.",
      name: "Harriet Long",
      subscription: "13 Month Subscriber"
    },
    {
      quote: "I loved learning with Grace, the course was so fun and engaging.",
      name: "Harriet Long",
      subscription: "13 Month Subscriber"
    }
  ]
};

const courseInfo = {
  title: "Our Course",
  description1:
    "This course is intended for advanced English speakers who are able to engage in conversations. This course aims to improve your use and knowledge of past tense verbs, phrasal verbs, idioms, pronunciation, word order and general vocabulary.",
  description2:
    "I am an experienced and certified English teacher based in Madrid, Spain. My teaching method is based on learning language through cultural exchanges. My courses involve teaching English by incorporating new grammar rules into conversation and discussion. Learn English while talking about fun and interesting topics!",
  image: {
    webp: "webp/course-info.webp",
    fallbackImg: "course-info.jpg",
    alt: "Learn more about the course by clicking here"
  },
  caption: {
    link: "/course",
    name: "Find out more"
  }
};

export default function Home() {
  return (
    <>
      <Hero hero={hero} />
      <Learn learn={learn} />
      <CourseInfo courseInfo={courseInfo} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}
