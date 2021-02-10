import styles from "./testimonials.module.scss";

interface Rating {
  quote: string;
  name: string;
  subscription: string;
}

interface TestimonialsContent {
  ratings: Array<Rating>;
  title: string;
}

interface TestimonialsProps {
  testimonials: TestimonialsContent;
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className={styles.testimonials}>
      <h2>{testimonials.title}</h2>
      <div className={styles.ratings}>
        {testimonials.ratings.map((rating, index) => (
          <div key={index} className={styles.card}>
            <img src="/quote.svg" loading="lazy" alt="" />
            <p className={styles.quote}>{rating.quote}</p>
            <div className={styles.subText}>
              <p>{rating.name}</p>
              <p>{rating.subscription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
