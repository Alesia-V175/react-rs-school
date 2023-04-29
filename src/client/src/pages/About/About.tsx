import banner from '../../assets/images/about-banner.jpg';
import styles from './About.module.scss';

const About = (): JSX.Element => (
  <>
    <div className={styles.about__banner}>
      <img src={banner} alt="banner" className={styles.about__banner_img}/>
    </div>
    <div className={styles.about__content}>
      <h1 className={styles.about__title}>All about us</h1>
    </div>
  </>
);

export default About;
