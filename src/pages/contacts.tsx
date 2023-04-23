const Contacts = () => {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title-1">Contacts</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Location</h2>
              <p>Omsk, Russia</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+79136201141">+7 (913) 620-11-41</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="anton.zhuravlev21@gmail.com">
                  anton.zhuravlev21@gmail.com
                </a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">GitHub</h2>
              <p>
                <a href="https://github.com/INTERpol21">
                  https://github.com/INTERpol21
                </a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    );
}
 
export default Contacts;