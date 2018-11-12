import React from 'react';
import './Home.scss';

const Home = () => (
  <div className="af-home">
    <header className="af-home-header">
      <img className="af-home-logo" src="./docs/css.png" alt="CSS3" aria-label="CSS3" />
      <img className="af-home-logo" src="./docs/html.png" alt="HTML5" aria-label="HTML5" />
      <h1 className="af-home-title">AF-TOOLKIT-CORE</h1>
      <article className="af-home-header__intro">
        <p />
        <p>
          A "living style guide" is a web document that shows all component interface elements (UI).
          It informs about the typography, the colors, the grid, the iconography, the interactions
          ...
        </p>
      </article>
    </header>
    <section className="af-home-info">
      <article className="af-home-info__bloc">
        <img src="./docs/reuse.png" alt="Components" aria-label="Components" />
        <h2 className="af-home-info__title">Components</h2>
        <p className="af-home-info__text">
          The components are cut to produce a reference of its structure (html), his style (css) and
          his behavior (js).
        </p>
      </article>
      <article className="af-home-info__bloc">
        <img src="./docs/bootstrap.png" alt="Bootstrap" aria-label="Bootstrap" />
        <h2 className="af-home-info__title">Bootstrap</h2>
        <p className="af-home-info__text">
          The toolkit is based on Bootstrap 4. You will find the themifiation of Bootstrap
          components, but also new components (af-) home made.
        </p>
      </article>
      <article className="af-home-info__bloc">
        <img
          src="./docs/bem.png"
          alt="Block Element Modifier"
          aria-label="Block Element Modifier"
        />
        <h2 className="af-home-info__title">Méthodo BEM</h2>
        <p className="af-home-info__text">
          Implementation of a naming nomenclature on the CSS classes of the toolkit for a better
          maintainability of the applications.
        </p>
      </article>
    </section>
    <section className="af-home-install">
      <h2 className="af-home-install__title">Installation</h2>
      <pre className="af-code">
        <code>npm install af-toolkit-core --save</code>
      </pre>
    </section>
    <section className="af-home-package">
      <h2 className="af-home-package__title">Contenu du package</h2>
      <pre className="af-code">
        <code>
          <span>dist/</span>
          <span>├── assets/ </span>
          <span>│ ├── fonts/</span>
          <span>│ | ├── icons/</span>
          <span>| | └── typo/</span>
          <span>| ├── icons/</span>
          <span>│ | ├── *.*.svg</span>
          <span>│ ├── scss/</span>
          <span>│ | ├── _custom-af.scss</span>
          <span>| | └── _custom-bootstrap.scss</span>
          <span>│ ├── templates/</span>
          <span>| | └── template.txt</span>
          <span>│ ├── favicon.ico</span>
          <span>│ ├── icons.css</span>
          <span>│ ├── logo-axa.svg</span>
          <span>├── axa-components/</span>
          <span>│ ├── footer/</span>
          <span>│ │ ├── af-footer.css</span>
          <span>│ │ └── af-footer.scss</span>
          <span>| ├── ...</span>
          <span>├── bootstrap/</span>
          <span>│ ├── af-toolkit-core.css</span>
          <span>│ ├── af-bootstrap.css</span>
          <span>│ ├── partial*.css</span>
          <span>├── universes/</span>
          <span>│ ├── auto/</span>
          <span>│ │ ├── af-toolkit-core-auto.css</span>
          <span>| ├── ...</span>
        </code>
      </pre>
    </section>

    <section className="af-home-archi">
      <table className="af-table af-home-archi__content">
        <thead className="af-table__thead">
          <tr className="af-table__tr">
            <th className="af-table__th">Directory</th>
            <th className="af-table__th">Elements</th>
            <th className="af-table__th">Role</th>
          </tr>
        </thead>
        <tbody className="af-table__body">
          <tr className="af-table__tr">
            <td className="af-table__cell">/axaComponents</td>
            <td className="af-table__cell">Components *.*.scss</td>
            <td className="af-table__cell">
              Ce dossier contient tous les fichiers sources SCSS des composants
            </td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/common/fonts/typo</td>
            <td className="af-table__cell">Source Sans Pro</td>
            <td className="af-table__cell">Ce dossier contient toutes les fonts</td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/common/fonts/icon</td>
            <td className="af-table__cell">Font icon glyphicon</td>
            <td className="af-table__cell">
              Ce dossier contient toutes les fonts d'icon généré par la tache Gulp iconfont
            </td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/common/icons</td>
            <td className="af-table__cell">Icons list</td>
            <td className="af-table__cell">
              Ce dossier contient toutes icons utilisés pour générer la font icon
            </td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/common/scss</td>
            <td className="af-table__cell">_custom-af.scss et _custom-boostrap.scss</td>
            <td className="af-table__cell">
              Ce dossier contient 2 fichiers de variables :
              <ul>
                <li>_custom-af.scss : variables du toolkit</li>
                <li>_custom-boostrap.scss : customs variables bootsrap</li>
              </ul>
            </td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/common/templates</td>
            <td className="af-table__cell">template.txt</td>
            <td className="af-table__cell">
              Ce dossier contient le fichier de template utilisé par la task qui génère la page de
              démo des icons.
            </td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/config</td>
            <td className="af-table__cell">default.js</td>
            <td className="af-table__cell">Données de configuration des taches Gulp</td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/demo</td>
            <td className="af-table__cell">index.html, main.js, webpack.config</td>
            <td className="af-table__cell">Contient les fichiers d'entrée de l'application</td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/demo/app/axaComponents</td>
            <td className="af-table__cell" />
            <td className="af-table__cell">
              Fichiers sources des démo des composants du Toolkit (.js, .pug et .scss){' '}
            </td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/demo/app/composants</td>
            <td className="af-table__cell" />
            <td className="af-table__cell">
              Fichiers sources des composants de la démo (hors toolkit){' '}
            </td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/dist</td>
            <td className="af-table__cell" />
            <td className="af-table__cell">Fichiers de publication du package</td>
          </tr>
          <tr className="af-table__tr">
            <td className="af-table__cell">/distDemo</td>
            <td className="af-table__cell" />
            <td className="af-table__cell">Fichiers de build de la démo</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default Home;
