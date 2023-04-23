import Header from "@/component/header/Header";
const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, Redux Toolkit, Vue2,
                VueX, Pinia, React Router, Vue Router, HTML, CSS
              </p>
            </li>

            <li className="content-list__item">
              <h2 className="title-2">Design Libraries/Frameworks/Style</h2>
              <p>
                BootStrap, MaterialUI, TailwindCSS, StyledComponents, Vuetify,
                Ant Design, Sass, SCSS, Pixel perfect, БЭМ, Адаптив
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Other instruments</h2>
              <p>
                Yarn, NPM, Gulp, Webpack, ESLint, Prettier, VS Code, WebStorm,
                Git Bash, PuTTY, Git, Insomnia, Axios, Moment, Formik, Yup
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend/Database</h2>
              <p>NodeJS, Python, MySQL, MongoDB</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
