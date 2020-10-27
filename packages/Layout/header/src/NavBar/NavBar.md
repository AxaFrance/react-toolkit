  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <h2>Accessibilité</h2>
        <p>Le composant NavBar est conçu pour être utilisé avec le clavier:</p>
        <p>
          Basé sur{' '}
          <a
            target="blank"
            href="https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html">
            <strong>ce modèle de menu accessible</strong>
          </a>
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <h3>Fonction des touches</h3>
        <table className="table table-bordered table-striped table-responsive">
          <thead>
            <tr>
              <th>Touche</th>
              <th>Fonction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tab</td>
              <td>
                Permet de positionner le focus sur le menu, le composant se
                charge de positionner le focus sur le premier lien du menu.
              </td>
            </tr>
            <tr>
              <td>Flèche de droite</td>
              <td>
                Permet naviguer vers le droite<br />
                le composant réattribut le focus sur le lien suivant de même
                niveau avec le tabIndex à 0.<br />
                Si le focus arrive en fin de menu, on revient au premier
                élément.
              </td>
            </tr>
            <tr>
              <td>Flèche de gauche</td>
              <td>Idem que la flèche de droite mais dans l’autre sens.</td>
            </tr>
            <tr>
              <td>Echap</td>
              <td>La touche Echap permet de sortir du focus du menu.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
