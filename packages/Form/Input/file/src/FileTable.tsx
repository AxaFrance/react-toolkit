import React, { ComponentPropsWithoutRef } from 'react';
import { getComponentClassName } from '@axa-fr/react-toolkit-core';
import { FileRejection } from 'react-dropzone';
import LineFile from './FileLine';
import { CustomFile } from './File';

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

type FileLineProps = ComponentPropsWithoutRef<typeof LineFile>;
type Props = Pick<FileLineProps, 'onClick'> & {
  errors?: FileRejection[];
  values?: CustomFile[];
  className?: string;
  classModifier?: string;
  disabled?: boolean;
};
const FileTable = ({
  errors,
  values,
  className,
  classModifier,
  disabled,
  onClick,
}: Props) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    'custom-table-file af-file-table'
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
