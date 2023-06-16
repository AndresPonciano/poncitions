import * as React from 'react';
import { styled } from '@mui/material/styles';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid`,
  '&:not(:last-child)': {
    borderBottom: 2,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<FontAwesomeIcon className='h-4' icon={faChevronRight} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid',
}));

const Projects = React.forwardRef<HTMLDivElement>(({}, ref) => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div ref={ref} className='flex flex-col'>
        <h1 className='text-2xl font-bold'>Projects</h1>
        <div className='border'/>

        <div className='self-center mt-2'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Google Scholar IO - indexed data in ElasticSearch and made it searchable in a NextJS website</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        here i will show the deployed thing
                    </Typography>
                </AccordionDetails>

            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>PyBook #2</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        https://github.com/ProfSanjay/pybook
                    </Typography>
                </AccordionDetails>

            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>PyBook #2</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        https://github.com/ProfSanjay/pybook
                    </Typography>
                </AccordionDetails>

            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>PyBook #2</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        https://github.com/ProfSanjay/pybook
                    </Typography>
                </AccordionDetails>

            </Accordion>
        </div>
    </div>
  );
});

export default Projects;