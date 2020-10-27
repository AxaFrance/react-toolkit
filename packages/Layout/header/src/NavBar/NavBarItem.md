  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <h2>Accessibilité</h2>
        <p>Le composant NavBar est conçu pour être utilisé avec le clavier:</p>
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
              <td>Flèche de droite</td>
              <td>Ferme automatiquement le sous menu s’il est ouvert.</td>
            </tr>
            <tr>
              <td>Flèche de gauche</td>
              <td>Ferme automatiquement le sous menu s’il est ouvert.</td>
            </tr>
            <tr>
              <td>Flèche vers le bas</td>
              <td>
                Si le sous menu est fermé, celui-ci s’ouvre et se positionne sur
                le premier élément.<br />
                On met à jour la propriétés d’accessibilité du lien parent :
                arra-expanded à true.<br />
                Si le menu est déjà ouvert, on passe au lien suivant (focus,
                tabindex et classe active)<br />
                Si on est au bout du sous menu, on boucle au premier lien de
                sous menu.
              </td>
            </tr>
            <tr>
              <td>Flèche vers le haut</td>
              <td>
                Si le sous menu est ouvert et que l’on est positionné sur le
                premier élément, le menu se ferme.<br />
                On met à jour la propriétés d’accessibilité du lien parent :
                arra-expanded à false et lui réattribut le focus.<br />
                Si le menu est déjà ouvert mais pas sur le premier élément, on
                passe au lien précédent (focus, tabindex et classe active)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
