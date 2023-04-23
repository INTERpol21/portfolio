import style from "./style.module.scss";


const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__wrapper}>
                <h1 className={style.header__title}>
                    <strong> Hi, my name is <em>Anton</em> </strong> <br/>a frontend developer
                </h1>
                <div className={style.header__text}>
                    <p>with passion for learning and creating.</p>
                </div>
                <a
                    href={"./CV.pdf"}
                    className="btn"
                    download="CV.pdf"
                > Download CV </a>
            </div>
        </header>
    );
};

export default Header;
