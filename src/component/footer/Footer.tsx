import style from "./style.module.scss"
import vk from "./../../img/icons/vk.svg";
import telegram from "./../../img/icons/telegram.svg";
import twitter from "./../../img/icons/twitter.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__wrapper}>
                <ul className={style.social}>
                    <li className={style.social__item}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://vk.com/toxa199821"
                        > <Image src={vk} alt="Link"/> </a>
                    </li>
                    <li className={style.social__item}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://t.me/interpol2121"
                        > <Image src={telegram} alt="Link"/> </a>
                    </li>
                    <li className={style.social__item}>
                        <a href="#"> <Image src={twitter} alt="Link"/> </a>
                    </li>
                    <li className={style.social__item}>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/INTERpol21"
                        > <Image src={gitHub} alt="Link"/> </a>
                    </li>
                    <li className={style.social__item}>
                        <a href="#"> <Image src={linkedIn} alt="Link"/> </a>
                    </li>
                </ul>
                <div className="copyright">
                    <p>© 2023 INTERpol</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
