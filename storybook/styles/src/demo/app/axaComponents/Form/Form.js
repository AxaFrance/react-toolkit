import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import formElement from './form-element.pug';
import formElementError from './form-element-error.pug';
import formElementSuccess from './form-element-success.pug';
import Code from '../../components/Code/Code';
import Iframe from '../../components/Iframe/Iframe';
import axaComponents from './axa-components.scss';

moment.locale('fr');

moment.updateLocale('fr', {
  weekdaysMin: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
});

class DemoDatepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
    };
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    return (
      <DatePicker
        className="af-datepicker"
        selected={this.state.startDate}
        onChange={this.handleChange.bind(this)}
        dateFormatCalendar={'DD/MM/YYYY'}
        tabIndex={1}
        fixedHeight={true}
        showMonthDropdown={true}
        showYearDropdown={true}
        readOnly={false}
        autoFocus={false}
        todayButton={"Aujourd'hui"}
        popperPlacement={'right-start'}
        yearDropdownItemNumber={6}
      />
    );
  }
}

const datePicker = (
  <div style={{ position: 'relative' }}>
    <form className="af-form" name="myform">
      <div className="af-form__group row">
        <div className="col-md-2">
          <label className="af-form__group-label">React datepicker</label>
        </div>
        <div className="col-md-10">
          <div className="af-datepicker__container">
            <DemoDatepicker />
            <span className="glyphicon glyphicon-calendar" />
          </div>
          <small className="af-form__help">jj/mm/aaaa</small>
        </div>
      </div>
    </form>
  </div>
);

const datePickerError = (
  <div style={{ position: 'relative' }}>
    <form className="af-form" name="myform">
      <div className="af-form__group row">
        <div className="col-md-2">
          <label className="af-form__group-label">React datepicker</label>
        </div>
        <div className="col-md-10">
          <div className="af-datepicker__container af-datepicker__container--error">
            <DemoDatepicker />
            <span className="glyphicon glyphicon-calendar" />
          </div>
          <small className="af-form__message af-form__message--error">
            <span className="glyphicon glyphicon-exclamation-sign" />
            <span className="af-form__error-text">Message d'erreur</span>
          </small>
        </div>
      </div>
    </form>
  </div>
);

const demos = [
  {
    title: 'Form elements',
    cmpt: formElement,
    height: '800',
    child: datePicker,
  },
  {
    title: 'Form elements invalid',
    cmpt: formElementError,
    height: '800',
    child: datePickerError,
  },
  {
    title: 'Form elements valid',
    cmpt: formElementSuccess,
    height: '800',
    child: null,
  },
];

const styles = [axaComponents];

const Form = () => (
  <article className="component">
    <h2 className="component__title">Form</h2>
    {demos.map(demo => (
      <div key={demo.title}>
        <h3 className="af-subtitle">{demo.title}</h3>
        <Tabs>
          <TabList>
            <Tab>Démo</Tab>
            <Tab>Code</Tab>
          </TabList>
          <TabPanel>
            <Iframe height={demo.height} css={styles} template={demo.cmpt}>
              {demo.child}
            </Iframe>
          </TabPanel>
          <TabPanel>
            <Code template={demo.cmpt} />
          </TabPanel>
        </Tabs>
      </div>
    ))}
  </article>
);

export default Form;
