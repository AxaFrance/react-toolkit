<div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <h2>Accessibilité</h2>
        <p>
          Ce composant permet d’ajouter au composant enfant les propriétés
          d’accessibilité d’un bouton toggle :
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <table className="table table-bordered table-striped table-responsive">
          <thead>
            <tr>
              <th>Role</th>
              <th>Attribut</th>
              <th>Element</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>button</td>
              <td />
              <td>’a’</td>
              <td>
                Identifie l’élément comme étant un bouton.<br />
                On peut également utilisé directement la balise ’button’
              </td>
            </tr>
            <tr>
              <td />
              <td>aria-haspopup=’true’</td>
              <td>’a’</td>
              <td>Indique si bouton sert à ouvrir un autre élément</td>
            </tr>
            <tr>
              <td />
              <td>aria-controls=’IDREF’</td>
              <td>’a’</td>
              <td>
                On fait référence à l’élément devant être affiché par le bouton
              </td>
            </tr>
            <tr>
              <td />
              <td>aria-expanded=’true’</td>
              <td>’a’</td>
              <td>
                Indique si l’élément est affiché par le bouton ou non.
                <br /> l’attribut disparait complètement si l’élément est
                masqué.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
