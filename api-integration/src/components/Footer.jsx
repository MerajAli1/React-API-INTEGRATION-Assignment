import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ColorInversionMarketing() {
  return (
    <Sheet
      variant="solid"
      color="success"
      invertedColors
      sx={{
        flexGrow: 1,
        display: 'flex',
        p: { xs: '36px', md: '70px' },
        pt: { xs: '24px', md: '60px' },
        mt:5,
        overflow: 'hidden',
        '& button': { borderRadius: 'xl' },
      }}
    >
      <Box sx={{ zIndex: 1, position: 'relative' }}>
        <Typography level="h2">Get started</Typography>
        <Typography sx={{ mt: 0.5, mb: 2 }}>
          Instant access to the power of the Joy UI library.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            maxWidth: 'max-content',
            '& > *': { flexGrow: 1, fontWeight: 'lg' },
          }}
        >
          <Button sx={{ minWidth: 120 }}>Install</Button>
          <Button
            variant="plain"
            endDecorator={<ArrowForwardIcon fontSize="md" />}
            sx={{
              '&:hover': { '--Button-gap': '0.625rem' },
              '& span': { transition: '0.15s' },
            }}
          >
            See the docs
          </Button>
        </Box>
      </Box>
      <Box
        component="img"
        alt=""
        src="#"
        sx={{ position: 'absolute', height: '100%', top: 0, right: 0 }}
      />
    </Sheet>
  );
}