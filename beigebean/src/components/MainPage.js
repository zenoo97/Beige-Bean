import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../css/style.module.css";
import { Link } from "react-router-dom";
const MainPage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.main}>
      <div className={styles.title_main}>
        <h1 className={styles.title}>
          BEIGE BE<span className={styles.span}>A</span>N
        </h1>

        <img src="img/logo.png" className={styles.logo} alt="" />
      </div>

      <ul className={styles.menu_sub}>
        <Link to="/signin">
          <li>로그인</li>
        </Link>
        <Link to="/signup">
          <li>회원가입</li>
        </Link>
      </ul>
      {/* 메뉴 토글 버튼 */}
      <div className={visible ? styles.menu_toggle_main : styles.visible}>
        <ul className={styles.toggle_li}>
          <li>
            MEMBERSHIP <img src="img/logo.png" alt="" />
          </li>
          <li>
            STORE
            <img src="img/logo.png" alt="" />
          </li>
          <li>
            SHOP
            <img src="img/logo.png" alt="" />
          </li>
          <li>
            QnA
            <img src="img/logo.png" alt="" />
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.menu_detail}>
          <li>coffee</li>
          <li>non coffee</li>
          <li>beverage</li>
          <li>dessert</li>
          <li>snack</li>
          <li>MD</li>
          <li>BEAN</li>
        </ul>
      </div>
      <div>
        <ul className={styles.menu_detail_coffee}>
          <li>
            <img src="img/coffee1.jpeg" alt="" />
          </li>
          <li>
            <img src="img/coffee2.jpeg" alt="" />
          </li>
          <li>
            <img src="img/coffee3.jpeg" alt="" />
          </li>
          <li>
            <img src="img/coffee4.jpeg" alt="" />
          </li>
          <li>
            <img src="img/coffee5.jpeg" alt="" />
          </li>
          {/* <li>
            <img src="img/coffee6.jpeg" alt="" />
          </li> */}
        </ul>
      </div>

      <footer className={styles.footer_img}>
        <img src="img/footer_img.png" alt="" />
      </footer>
    </div>
  );
};
export default MainPage;
