import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import Image, { ImageProps } from 'next/image';
// import { StaticImport } from 'next';

interface CardProps {
  // : string;
  icon: ImageProps['src'];
  title: string;
  children: string;
  selected?: boolean;
  iconAlt: string;
  onClick: () => void;
}

const Card: FC<CardProps> = ({
  icon,
  iconAlt,
  title,
  children,
  selected,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      // border="1px solid #dddddd"
      sx={{
        border: selected
          ? (theme) => `1px solid ${theme.palette.primary.main}`
          : '1px solid #dddddd',
        cursor: 'pointer',
      }}
      borderRadius="5px"
      p={4}
      display="flex"
      flexDirection="column"
      // justifyContent="flex-start"
      alignItems="start"
    >
      <Image src={icon} alt={iconAlt} />
      <Typography fontWeight={600} mt={1.5}>
        {title}
      </Typography>
      <Typography color="#7e7e7e" mt={1}>
        {children}
      </Typography>
    </Box>
  );
};

export default Card;
