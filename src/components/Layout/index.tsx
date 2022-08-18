import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ReactNode, FC } from 'react';
import logo from 'assets/logo.png';
import Image from 'next/image';

const StyledContainer = styled(Container)({
  paddingTop: 100,
});

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <StyledContainer maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom="100px"
        >
          <Image src={logo} alt="Eden logo" />
          <Typography align="center" fontWeight={700} fontSize={30} ml={1}>
            Eden
          </Typography>
        </Box>
      </StyledContainer>
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
