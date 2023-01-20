import { ProgressBar } from 'react-loader-spinner';
import { Box } from 'components/common/Box';

export const Loader = () => (
  <Box>
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#51E5FF"
      barColor="#51E5FF"
    />
  </Box>
);
