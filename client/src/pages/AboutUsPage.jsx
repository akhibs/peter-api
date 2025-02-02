import React from "react";
import styles from "./../css/AboutUsPage.module.css";
import aboutUs from "./../assets/about-us.png";
import aboutUs2 from "./../assets/about-us2.png";
export default function AboutUsPage() {
  return (
    <div className={styles.AboutUsPage}>
      <title>Eliteload|About Us</title>
      <div className={styles.theAboutUsBox}>
        <section className={styles.theAboutUsCover}>
          <h3>ABOUT US</h3>
        </section>
      </div>
      <img src={aboutUs} />
      <section className={styles.writeup1}>
        <h2>WHO WE ARE</h2>
        <p className={styles.p1}>
          Eliteload is a world-leading provider of logistics, freight
          forwarding, and supply chain management services
        </p>
        <p className={styles.p2}>
          Our Focus is on simplifying complex supply chains, uncovering
          efficiency improvements that enable our customers to cut thier
          inventories, reducing operating costs, and making significant
          short-term savings for long-term competitiveness. We work to connect
          and simplify our customers supply chain(s). As one of the global
          leaders in the shipping service, we operate in more than 15 Countries
          worldwide and have over 15000 employees.
        </p>
      </section>
      <section className={styles.writeup2}>
        <h2>OUR MISSION & VISION</h2>
        <p className={styles.p1}>
          To meet our customers demand(s) for a personal & professional service
          by offering innovative supply chain solutions.
        </p>
        <p className={styles.p2}>
          We are proactively and constantly looking for new possibilities,
          therefore, an important part of our vision is to attract & retain.
          Procedures, values and attitudes are crucial to our reputation - not
          to mention the success we enjoy. We use modern means and innovations
          to facilitate our supply chain
        </p>
        <img src={aboutUs2} />
      </section>
    </div>
  );
}
