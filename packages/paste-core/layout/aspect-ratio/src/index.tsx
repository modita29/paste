import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled} from '@twilio-paste/styling-library';
import {Absolute} from '@twilio-paste/absolute';

export interface AspectRatioProps {
  ratio: string;
  children: NonNullable<React.ReactNode>;
}

const RATIO_REGEX = /^(\d+:\d*)$/;

const isCorrectPattern = (ratio: string): boolean => RATIO_REGEX.test(ratio);

const handlePropValidation = ({ratio}: AspectRatioProps): void => {
  const hasRatio = ratio != null && ratio !== '';

  if (!hasRatio) {
    throw new Error(`[Paste: AspectRatio] Missing 'ratio' prop.`);
  }

  if (!isCorrectPattern(ratio)) {
    throw new Error(`[Paste: AspectRatio] 'ratio' is invalid. Use a colon separated number pattern (4:3).`);
  }
};

const AspectRatioContainer = styled.div`
  position: relative;

  embed,
  iframe,
  object,
  video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

const AspectRatio: React.FC<AspectRatioProps> = props => {
  handlePropValidation(props);

  const aspectArray = props.ratio.split(':').map(Number);
  const aspectPercent = (aspectArray[1] / aspectArray[0]) * 100;

  return (
    <AspectRatioContainer style={{paddingBottom: `${aspectPercent}%`}}>
      <Absolute>{props.children}</Absolute>
    </AspectRatioContainer>
  );
};

AspectRatio.displayName = 'AspectRatio';

if (process.env.NODE_ENV === 'development') {
  AspectRatio.propTypes = {
    children: PropTypes.node.isRequired,
    ratio: PropTypes.string.isRequired,
  };
}

export {AspectRatio};
