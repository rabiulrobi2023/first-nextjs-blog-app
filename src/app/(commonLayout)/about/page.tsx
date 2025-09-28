import { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "This is about us page",
};
const AboutPage = () => {
  return (
    <div>
      <p className={styles.text_style}>This is about page</p>
    </div>
  );
};

export default AboutPage;
