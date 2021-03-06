/**
 * This file was automatically generated with @twilio-labs/svg-to-react
 */
import * as React from 'react';
import {UID} from 'react-uid';
import {IconWrapper, IconWrapperProps} from './helpers/IconWrapper';

export interface SuccessIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
}

const SuccessIcon: React.FC<SuccessIconProps> = ({as, size, iconColor, title, decorative}) => {
  if (!decorative && title == null) {
    throw new Error('[SuccessIcon]: Missing a title for non-decorative icon.');
  }

  return (
    <IconWrapper as={as} size={size} iconColor={iconColor}>
      <UID>
        {uid => (
          <svg role="img" aria-hidden={decorative} aria-labelledby={uid} width="100%" height="100%" viewBox="0 0 24 24">
            {title ? <title id={uid}>{title}</title> : null}
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 4a8 8 0 110 16 8 8 0 010-16zm2.997 5c-.266 0-.521.106-.71.294l-3.286 3.294-1.289-1.298a1.003 1.003 0 00-1.418 1.418l1.998 1.997a1 1 0 001.418 0l3.996-3.994A1.002 1.002 0 0014.996 9z"
            />
          </svg>
        )}
      </UID>
    </IconWrapper>
  );
};

SuccessIcon.displayName = 'SuccessIcon';
export {SuccessIcon};
