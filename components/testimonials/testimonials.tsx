import styles from "./testimonials.module.scss";

interface Rating {
  quote: string;
  name: string;
  subscriber: string;
}

interface TestimonialsContent {
  quotes: Array<Rating>;
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
        {testimonials.quotes.map((rating, index) => (
          <div key={index} className={styles.card}>
            <img src="/quote.svg" loading="lazy" alt="" />
            <p className={styles.quote}>{rating.quote}</p>
            <div className={styles.subText}>
              <p>{rating.name}</p>
              <p>{rating.subscriber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
