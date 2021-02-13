import { GraphQLClient } from "graphql-request";

import { CourseInfo } from "../components/course-info/course-info";
import { Hero } from "../components/hero/hero";
import { Learn } from "../components/learn/learn";
import { SignUp } from "../components/signup/signup";
import { Testimonials } from "../components/testimonials/testimonials";

export async function getStaticProps() {
  const cms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ckkv07huzd0yg01z0elt9eh9g/master"
  );

  const { landingPage } = await cms.request(
    `{
      landingPage(locales: en, stage: PUBLISHED, where: {id: "ckl2wdgjcdo670b56vesjxo97"}) {
        hero {
          title
          image {
            url
          }
          cta {
            name
            link
          }
        }
        learning {
          title
          description
          image {
            url
          }
        }
        course {
          title
          description1
          description2
          image {
            url
          }
          cta {
            name
            link
          }
        }
        signUp {
          title
          features {
            image {
              url
            }
            description
          }
          cta {
            name
            link
          }
        }
        testimonial {
          title
          quotes {
            quote
            name
            subscriber
          }
        }
      }
    }
    `
  );

  return {
    props: {
      landingPage
    }
  };
}

export default function Home({ landingPage }) {
  return (
    <>
      <Hero hero={landingPage.hero} />
      <Learn learn={landingPage.learning} />
      <CourseInfo courseInfo={landingPage.course} />
      <SignUp signup={landingPage.signUp} />
      <Testimonials testimonials={landingPage.testimonial} />
    </>
  );
}
