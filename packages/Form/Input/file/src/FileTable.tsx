import React, { ComponentProps, ComponentPropsWithoutRef } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import LineFile from './FileLine';

const defaultClassName = 'custom-table-file af-file-table';

const Errors = ({ errors }: Pick<Props, 'errors'>) => {
  return (
    <div className="af-form__file-errors">
      <span>Le chargement de certains fichiers a échoué : </span>
      <ul className="af-form__file-errors-list">
        {errors.map((err) => (
          <li key={err.file.name}>
            {err.file.name} ({err.file.size})
          </li>
        ))}
      </ul>
    </div>
  );
};

type FileLineAction = Pick<ComponentProps<typeof LineFile>, 'onClick'>;
type File = Pick<ComponentPropsWithoutRef<typeof LineFile>, 'file'>;
type Props = FileLineAction & {
  errors?: File[];
  values?: (File & { id: string })[];
  className?: string;
  classModifier?: string;
  disabled?: boolean;
};
const FileTable = ({
  errors,
  values,
  className = defaultClassName,
  classModifier,
  disabled,
  onClick,
}: Props) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <div className={componentClassName}>
      {errors && errors.length > 0 && <Errors errors={errors} />}
      {values && values.length > 0 && (
        <ul className="af-form__file-list">
          {values.map(({ file, id }) => (
            <LineFile
              disabled={disabled}
              file={file}
              onClick={onClick}
              id={id}
              key={id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileTable;
