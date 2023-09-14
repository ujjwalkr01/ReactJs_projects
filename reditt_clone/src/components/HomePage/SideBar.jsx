import styles from "./SideBar.module.css";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import {
  BsFillHouseDoorFill,
  BsBank,
  BsChevronDoubleDown,
  BsRocketTakeoff,
  BsCashCoin,
} from "react-icons/bs";
import { FcBullish, FcReddit, FcSupport, FcVip } from "react-icons/fc";
import {
  SlGameController,
  SlPlane,
  SlSocialDribbble,
  SlSupport,
} from "react-icons/sl";
import { TfiHelpAlt, TfiBook, TfiHeadphone } from "react-icons/tfi";
import { ImFilm, ImBullhorn, ImKeyboard } from "react-icons/im";
import { GrCoatCheck, GrCafeteria } from "react-icons/gr";
import { PiMicrophoneStageThin } from "react-icons/pi";
import { FiCpu } from "react-icons/fi";
import { BiPodcast } from "react-icons/bi";
import { TbJewishStarFilled } from "react-icons/tb";
import {
  RiDraftLine,
  RiFileList3Line,
  RiSteeringFill,
  RiScales3Line,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.parentContainer}>
      <div className={styles.firstSection}>
        <p>
          <BsFillHouseDoorFill />
          <Link to="/">Home</Link>
        </p>
        <p>
          <HiMiniArrowTopRightOnSquare />
          <a href="" target="_blank">
            {" "}
            Popular
          </a>
        </p>
      </div>
      <hr />
      <div className={styles.secndSection}>
        <h4 style={{ fontWeight: "500" }}>TOPICS</h4>
        <ul>
          <li>
            <SlGameController />
            <a
              href="https://www.reddit.com/t/call_of_duty_warzone/"
              target="_blank"
            >
              Gaming
            </a>
          </li>
          <li>
            <SlSocialDribbble />
            <a href="https://www.reddit.com/t/premier_league/" target="_blank">
              Sports
            </a>
          </li>
          <li>
            <FcBullish />
            Business
          </li>
          <li>
            <SlSupport />
            Crypto
          </li>
          <li>
            <ImFilm />
            Television
          </li>
          <li>
            <ImKeyboard />
            Programming
          </li>
          <li>
            <FiCpu /> Technology
          </li>
          <li>
            <BiPodcast />
            Podcasts and Streamers
          </li>
          <li>
            <TfiHeadphone />
            Music
          </li>
          <li>
            <RiScales3Line />
            Law
          </li>
          <li>
            <BsRocketTakeoff />
            Science
          </li>
          <li>
            <GrCoatCheck />
            Fashion
          </li>
          <li>
            <BsChevronDoubleDown />
            Military
          </li>
          <li>
            <BsBank />
            Politics
          </li>
          <li>
            <GrCafeteria />
            Food and Drink
          </li>
          <li>
            <SlPlane />
            Travel
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.thirdSection}>
        <h4 style={{ fontWeight: "500" }}>RESOURCES</h4>
        <ul>
          <li>
            <FcReddit />
            <a href="https://www.redditinc.com/" target="_blank">
              About Reddit
            </a>
          </li>
          <li>
            <ImBullhorn />
            Advertise
          </li>
          <li>
            <TfiHelpAlt />
            Help
          </li>
          <li>
            <TfiBook />
            Blog
          </li>
          <li>
            <FcSupport />
            <a href="https://www.redditinc.com/careers" target="_blank">
              Careers
            </a>
          </li>
          <li>
            <PiMicrophoneStageThin />
            Press
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.premium}>
        <ul>
          <li>
            <BsCashCoin />
            Coins
          </li>
          <li onClick={() => navigate("/premium")}>
            <FcVip />
            Premium
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.policy}>
        <ul>
          <li>
            <RiScales3Line />
            <a
              href="https://www.reddit.com/policies/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <RiFileList3Line />
            <a
              href="https://www.redditinc.com/policies/user-agreement"
              target="_blank"
            >
              User Agreement
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>
        Reddit Inc. &copy; 2023. All rights reserved
      </p>
    </div>
  );
};
export default SideBar;
