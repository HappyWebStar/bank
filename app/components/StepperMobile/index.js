import styled from 'styled-components';
import MobileStepper from '@material-ui/core/MobileStepper';
import { PRIMARY_GREY } from 'utils/colors';
import { TABLET_VIEWPORT_WIDTH } from 'utils/rwd';

const StepperMobile = styled(MobileStepper)`
  &&& {
    background-color: ${PRIMARY_GREY};
    display: flex;
    justify-content: center;

    @media screen and (min-width: ${TABLET_VIEWPORT_WIDTH}) {
      display: none;
    }
  }
`;

export default StepperMobile;
