// rafce
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./footer-public.module.scss";
import {
  FacebookIcon,
  FacebookShareButton,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const Footer = () => {
  const { t } = useTranslation();
  const shareUrl = 'http://github.com';
  const title = 'GitHub';
  return (
    <div>

    <div className={styles["footer"]}>
      <div className={styles["h_footer"]}>
        <div className={styles["h1_footer"]}>{t("h1_footer")}</div>
        <div className={styles["h2_footer"]}>{t("h2_footer")}</div>
        <div className={styles["h3_map"]}>
        <img src="./map1.png" alt="" />
        </div>
      </div>

      <div className={styles["footer_mxh"]}>
        <div className={styles["f1_footer_mxh"]}>
          {t("f1_footer_mxh")}
          <div className={styles["f1_mxh_icon"]}>
            <FacebookShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={45} round />
            </FacebookShareButton>

            <EmailShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <EmailIcon size={45} round />
            </EmailShareButton>

            <TwitterShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={45} round />
            </TwitterShareButton>

            <TelegramShareButton
              url={shareUrl}
              quote={title}
              className="Demo__some-network__share-button"
            >
              <TelegramIcon size={45} round />
            </TelegramShareButton>

          </div>
        </div>
      </div>

      <div className={styles["footer_pt"]}>
        <div className={styles["top_footer"]}>
          <div className={styles["k_footer"]}>
            <div className={styles["k1_footer"]}>{t("k1_footer")}</div>
            <div className={styles["m_footer"]}>
              <div className={styles["m3_footer"]}>{t("m3_footer")}</div>
              <div className={styles["m4_footer"]}>{t("m4_footer")}</div>
              <div className={styles["m5_footer"]}>{t("m5_footer")}</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
      <div className={styles["footer_end"]}>
        <div className={styles["f1_end"]}>{t("f1_end")}</div>
        <div className={styles["f2_end"]}>{t("f2_end")}</div>
      </div>
    </div>
    

  
  );
};

export default Footer;
