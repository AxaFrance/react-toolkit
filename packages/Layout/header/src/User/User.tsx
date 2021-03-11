import React, { MouseEvent, ReactNode } from 'react';
import { ClassManager } from '@axa-fr/react-toolkit-core';

const defaultClassName = 'af-info-user';

const InnerUser = ({ name, profile }: { name: string; profile?: string }) => (
  <>
    <span key="1" className="af-info-user__name">
      {name}
    </span>
    {profile && (
      <span key="2" className="af-info-user__profile">
        [{profile}]
      </span>
    )}
  </>
);

type Props = {
  name: string;
  path?: string;
  profile?: string;
  href?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
  classModifier?: string;
  onClick?: (action: {
    path: string;
    event: MouseEvent<HTMLAnchorElement>;
  }) => void;
};
const User = ({
  path,
  name,
  profile,
  href,
  title = 'Voir mon profil',
  children,
  className,
  classModifier,
  onClick,
}: Props) => {
  const componentClassName = ClassManager.getComponentClassName(
    className,
    classModifier,
    defaultClassName
  );

  return (
    <div className={componentClassName}>
      {href ? (
        <a
          className="af-info-user__link"
          href={href}
          title={title}
          onClick={(event) => onClick && onClick({ path, event })}>
          <InnerUser name={name} profile={profile} />
        </a>
      ) : (
        <InnerUser name={name} profile={profile} />
      )}
      {children}
    </div>
  );
};

export default User;
