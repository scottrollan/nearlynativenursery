import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './About.module.scss';
import jimDebi from '../../media/jimDebi.jpg';
import name from '../../media/N3nameTransparent.png';

const About = () => {
  return (
    <Container className={styles.about} id="about">
      <img src={name} alt="" style={{ width: '100%' }} />
      <p>
        <strong>Nearly Native Nursery</strong> is a specialty nursery that
        promotes, sells, and propagates southeastern native plants for all types
        of landscapes. We offer a wide variety of native southeastern plant life
        not found in your typical garden center.
      </p>
      <figure className={styles.figure}>
        <img src={jimDebi} alt="" style={{ width: '100%' }} />
        <figcaption>Owners: Debi &amp; Jim Rodgers</figcaption>
      </figure>
      <p>
        Native plants offer a tough, verastile and beautiful alternative with
        lower maintenance to the imported, more exotic general nursery stock.
        Native plants are more suitable to local water, soil and pest
        conditions. Many of these native plants also serve as food for beautiful
        songbirds as well as hosts for many species of butterflies and moths.
        Once established, native plants can tough out drought and water
        restrictions that many other plants are unable to tolerate.
      </p>
      <p>
        There is always a native alternative to an exotic plant, and many times
        the native species will be a much more interesting and spectacular
        specimen. Specific site requirements, such as low, soggy ground, or
        steep, dry slopes can become beautiful focal points with the right
        native plants in place. Our staff is knowledgeable and eager to discuss
        native plants with all of our customers. If we cannot think of the right
        native option or options for you instantly, we will research your
        situation and get back to you with a response as soon as possible.
      </p>
      <p>
        So, if you are near Atlanta, Georgia, stop by the Nearly Native
        Nursery’s retail location in Fayetteville and check out our dazzling
        array of gorgeous native plants available for you. We hope that you find
        our site interesting and educational!
      </p>
    </Container>
  );
};

export default About;
