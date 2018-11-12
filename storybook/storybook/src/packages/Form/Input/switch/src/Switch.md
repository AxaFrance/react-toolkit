## SwitchInput
* * *

### Get started
First to use, you have to import the component.



This story show you the Action Button case.
This isn't a link but a button where you can catch the event to do what you want.

For more information about style component, you can see the [Action Button Style on Toolkit-core ](http://toolkit-intranet-axa.azurewebsites.net/#/button)


### Accessibility

By default, it is better to use the button tag because it contains all accessibility properties.

You may need to use other HTML tags or need to handle actions on events.

In this case, you will need to add several properties to your tag:

<table aria-labelledby="rps_label" class="af-table data attributes">
      <thead class="af-table__head">
        <tr class="af-table__tr">
          <th class="af-table__th" scope="col">Role</th>
          <th class="af-table__th" scope="col">Attribute</th>
          <th class="af-table__th" scope="col">Element</th>
          <th class="af-table__th" scope="col">Usage</th>
        </tr>
      </thead>
      <tbody class="af-table__body">
        <tr class="af-table__tr">
          <td class="af-table__cell"><code>button</code></td>
          <td class="af-table__cell"></td>
          <td class="af-table__cell">
            <code>div</code>, <code>a</code>
          </td>
          <td class="af-table__cell">
            <ul>
              <li>Identifies the element as a <code>button</code> widget.</li>
              <li> Accessible name for the button is defined by the text content of the element.</li>
            </ul>
          </td>
        </tr>
        <tr class="af-table__tr">
          <td class="af-table__cell"></td>
          <td class="af-table__cell">
            <code>tabindex="0"</code>
          </td>
          <td class="af-table__cell">
            <code>div</code>, <code>a</code>
          </td>
          <td class="af-table__cell">
            <ul>
              <li>Includes the element in the tab sequence.</li>
              <li>Needed on the <code>a</code> element because it does not have a <code>href</code> attribute.</li>
            </ul>
          </td>
        </tr>
        <tr class="af-table__tr">
          <td class="af-table__cell"></td>
          <td class="af-table__cell"><code>aria-pressed="false"</code></td>
          <td class="af-table__cell"><code>a</code></td>
          <td class="af-table__cell">
            <ul>
              <li>Identifies the button as a toggle button.</li>
              <li>Indicates the toggle button is not pressed.</li>
            </ul>
          </td>
        </tr>
        <tr class="af-table__tr">
          <td class="af-table__cell"></td>
          <td class="af-table__cell"><code>aria-pressed="true"</code></td>
          <td class="af-table__cell"><code>a</code></td>
          <td class="af-table__cell">
            <ul>
              <li>Identifies the button as a toggle button.</li>
              <li>Indicates the toggle button is pressed.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
