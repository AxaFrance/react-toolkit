import React from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';
import Button from '@axa-fr/react-toolkit-button';
import Popover from '@axa-fr/react-toolkit-popover';

const defaultClassName = 'af-form__file-line';
const style = {
  maxWidth: '200px',
  maxHeight: '200px',
};

type PreviewProps = Pick<Props, 'file'>;

export const Preview = ({ file }: PreviewProps) => {
  if (file && file.type && file.type.startsWith('image')) {
    return (
      <Popover mode="hover">
        <Popover.Pop>
          <img
            src={file.preview}
            style={style}
            className="af-form__file-thumbnail"
            alt="File Preview"
          />
        </Popover.Pop>
        <Popover.Over>
          <i className="glyphicon glyphicon-picture" />
        </Popover.Over>
      </Popover>
    );
  }
  return <i className="glyphicon glyphicon-file" />;
};

type File = { type?: string; preview: string; name: string; size: number };
type Props = {
  file: File;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  classModifier?: string;
  disabled?: boolean;
};
const FileLine = ({
  className,
  classModifier,
  file,
  disabled,
  id,
  onClick,
}: Props) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );
  return (
    <li className={componentClassName}>
      <Preview file={file} />
      <span>{file.name}</span>
      <span>{file.size}</span>

      <Button
        disabled={disabled}
        type="button"
        className="af-link"
        classModifier="delete-file"
        onClick={() => onClick(id)}>
        <span className="af-link__text">Supprimer</span>
      </Button>
    </li>
  );
};

export default FileLine;
