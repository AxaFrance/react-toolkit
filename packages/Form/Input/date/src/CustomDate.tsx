import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useState,
  FocusEvent,
} from 'react';
import DatePicker from 'react-datepicker';
import { parse, format as dateFormat } from 'date-fns';
import { ClassManager } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-datepicker';

type OnChangeDateEvent = {
  id: string;
  name: string;
  value: Date;
  viewValue: string;
};
type Props = Omit<
  ComponentPropsWithoutRef<typeof DatePicker>,
  'onChange' | 'onChangeRaw' | 'value'
> & {
  classModifier?: string;
  viewValue?: string;
  value?: Date;
  format?: string;
  onChange?: (e: OnChangeDateEvent) => void;
};

const CustomDate = ({
  id,
  name,
  className,
  classModifier,
  viewValue,
  value,
  locale = 'fr',
  format = 'dd/MM/yyyy',
  fixedHeight = true,
  showMonthDropdown = true,
  showYearDropdown = true,
  autoFocus = false,
  todayButton = "Aujourd'hui",
  popperPlacement = 'right-start',
  yearDropdownItemNumber = 6,
  onChange,
  ...otherProps
}: Props) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  const [dateFnsLocale, setDateFnsLocale] = useState(null);

  useEffect(() => {
    if (locale) {
      import(`date-fns/locale/${locale}/index.js`).then((loc) => {
        setDateFnsLocale(loc);
      });
    }
  }, [locale]);

  let currentViewValue = '';
  if (value) {
    currentViewValue = dateFormat(value, format);
  } else if (viewValue !== null && viewValue !== undefined) {
    currentViewValue = viewValue;
  }

  return (
    dateFnsLocale && (
      <DatePicker
        id={id}
        name={name}
        selected={value}
        value={currentViewValue}
        locale={dateFnsLocale}
        className={componentClassName}
        fixedHeight={fixedHeight}
        showMonthDropdown={showMonthDropdown}
        showYearDropdown={showYearDropdown}
        autoFocus={autoFocus}
        todayButton={todayButton}
        popperPlacement={popperPlacement}
        yearDropdownItemNumber={yearDropdownItemNumber}
        onChange={onChange && onChangeDate({ id, name, format, onChange })}
        onChangeRaw={onChange && onChangeRaw({ id, name, format, onChange })}
        {...otherProps}
      />
    )
  );
};

type OnChangeProps = {
  id?: string;
  name: string;
  onChange: (e: OnChangeDateEvent) => void;
  format: string;
};

const onChangeDate =
  ({ id, name, onChange, format }: OnChangeProps) =>
  (date: Date) => {
    const viewValue = date ? dateFormat(date, format) : '';
    onChange({
      value: date,
      viewValue,
      name,
      id,
    });
  };

const onChangeRaw =
  ({ format, id, name, onChange }: OnChangeProps) =>
  (event: FocusEvent<HTMLInputElement>) => {
    const dateString = event.target.value;
    if (dateString) {
      const date = parse(dateString, format, new Date());
      onChange({
        value: date,
        viewValue: dateString,
        name,
        id,
      });
    }
  };

export default CustomDate;
