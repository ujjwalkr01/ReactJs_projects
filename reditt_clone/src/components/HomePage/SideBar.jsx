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
const SideBar = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.firstSection}>
        <p>
          <BsFillHouseDoorFill />
          Home
        </p>
        <p>
          <HiMiniArrowTopRightOnSquare />
          Popular
        </p>
      </div>
      <hr />
      <div className={styles.secndSection}>
        <h4 style={{ fontWeight: "500" }}>TOPICS</h4>
        <ul>
          <li>
            <SlGameController />
            Gaming
          </li>
          <li>
            <SlSocialDribbble />
            Sports
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
            <RiSteeringFill />
            Cars and Motor Vehicles
          </li>
          <li>
            <TbJewishStarFilled />
            Celebrity
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
            About Reddit
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
            Careers
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
          <li>
            <FcVip />
            Premium
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.policy}>
        <ul>
          <li>
            <RiDraftLine />
            Content Policy
          </li>
          <li>
            <RiScales3Line />
            Privacy Policy
          </li>
          <li>
            <RiFileList3Line />
            User Agreement
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
