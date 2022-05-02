import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

export const MotionDemo = () => {
  return (
    <>
      <Box
        whileHover={{scale: 1.2, rotate: 90}}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: '100%'
        }}
      />
    </>
  );
};

const Box = styled(motion.div)`
  border-radius: 30px;
  height: 100px;
  width: 100px;
  margin: 0 auto;
  background-color: #333;
`;
