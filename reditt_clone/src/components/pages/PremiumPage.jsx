import styles from "./Premium.module.css";
import { ThemeTogglerCtx } from "../../App";
import { useContext } from "react";

const PremiumPage = () => {
  const { toggleTheme } = useContext(ThemeTogglerCtx);

  return (
    <main
      className={
        toggleTheme
          ? `${styles.mainContainer} ${styles.dark}`
          : `${styles.mainContainer}`
      }
    >
      <div className={styles.premiumPageImg}>
        <section>
          <div className={styles.logo}>
            <img
              src="https://icons.iconarchive.com/icons/uiconstock/premium-social/256/reddit-icon.png"
              width="90px"
              height="90px"
            />
            <p>Reddit Premium</p>
          </div>

          <p className={styles.text}>
            Help support Reddit and get VIP treatment and exclusive access.
          </p>
          <div className={styles.btns}>
            <button>$5.99/Month</button>
            <button>$49.99/Year</button>
          </div>
        </section>
      </div>
      <div
        className={
          toggleTheme
            ? `${styles.joinReddit} ${styles.dark}`
            : `${styles.joinReddit}`
        }
      >
        <h1>Reddit Premium Coming Soon...</h1>

        <section>
          <div
            className={
              toggleTheme ? `${styles.cards} ${styles.dark}` : `${styles.cards}`
            }
          >
            <div className={styles.cardsLogo1}></div>
            <h4>Ad-free Browsing</h4>
            <p>Enjoy redditing without interruptions from ad</p>
          </div>
          <div
            className={
              toggleTheme ? `${styles.cards} ${styles.dark}` : `${styles.cards}`
            }
          >
            <div className={styles.cardsLogo2}></div>
            <h4>Exclusive Avatar Gear</h4>
            <p>Outfit your avatar with the best gear and accessories</p>
          </div>
          <div
            className={
              toggleTheme ? `${styles.cards} ${styles.dark}` : `${styles.cards}`
            }
          >
            <div className={styles.cardsLogo3}></div>
            <h4>Members Lounge</h4>
            <p>Discover all the illuminati secrets in r/lounge</p>
          </div>
          <div
            className={
              toggleTheme ? `${styles.cards} ${styles.dark}` : `${styles.cards}`
            }
          >
            <div className={styles.cardsLogo4}></div>
            <h4>Custom App Icons*</h4>
            <p>Change your app icon to something more your style</p>
          </div>
        </section>
      </div>
      <div
        className={
          toggleTheme
            ? `${styles.footer} ${styles.darkFooter}`
            : `${styles.footer}`
        }
      >
        <div>
          <a
            className={
              toggleTheme
                ? `${styles.github} ${styles.darkFooter}`
                : `${styles.github}`
            }
            href="https://github.com/ujjwalkr01/ReactJs_projects.git"
            target="_blank"
          >
            Github
          </a>
          <p>Content Policy</p>
          <p>Privacy Policy</p>
          <p>User Agreement</p>
          <p>Mod Policy</p>
        </div>
        <p className={styles.companyTag}>
          {" "}
          Reddit, Inc. © 2023. All rights reserved.
        </p>
      </div>
    </main>
  );
};
export default PremiumPage;
