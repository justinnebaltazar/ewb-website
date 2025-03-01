import { Carousel } from "react-bootstrap";
import testimonials from "../../data/testimonial.json";
import styles from "../Testimonial/Testimonial.module.css";

export const Testimonial = () => {
  return (
    <Carousel data-bs-theme="dark" indicators={false} controls={false} interval={7000}>
      {testimonials.map((testimonial, id) => (
        <Carousel.Item key={id}>
          <div className={styles.testimonial}>
            <h4 className={styles.quote} data-quote={testimonial.quote}>{testimonial.quote}</h4>
            <h2 className={styles.author}>{testimonial.author}</h2>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
