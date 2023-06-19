import * as React from 'react';
import { styled } from '@mui/material/styles';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import ChipGroup from './Templates/ChipGroup';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#F5F9E9",
  borderRadius: "0.25rem",
  color: "#F5F9E9",
  // '&:not(:last-child)': {
  //   borderBottom: 2,
  // },
  // '&:before': {
  //   display: 'none',
  // },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<FontAwesomeIcon className='h-4 text-gray hover:text-sage' icon={faChevronRight} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#080718",
  // backgroundColor:
  //   theme.palette.mode === 'dark'
  //     ? 'rgba(255, 255, 255, .05)'
  //     : 'rgba(0, 0, 0, .03)',
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
  // border: '1px solid',
  color: "#080718", 
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
        {/* <div className='border'/> */}

        <div className='self-center mt-2 z-0'>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>

                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography> <span className='font-bold italic'> Google Scholar IO </span></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                      fetched scholar data annd to index in ElasticSearch and made it searchable in a NextJS website
                      <br/>
                      <br/>
                      <p className='italic'>
                        code: <a className='underline text-gray' href='https://github.com/AndresPonciano/finalprojectforsure' target='_blank'>link</a>
                      </p>
                      <p className='italic'>
                        report with details: <a className='underline text-gray' href={require('../pdfs/grad_project_report.pdf')} target='_blank'>link</a>
                      </p>

                      <div className='grid grid-cols-3 md:grid-cols-5 mt-4 mx-4 gap-3'>
                        <ChipGroup skills={['ElasticSearch', 'Javascript', 'GraphQL', 'Apollo', 'Express', 'Next.js', 'Tailwind', 'CSS']} />
                      </div>
                    </Typography>
                </AccordionDetails>

            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>

                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography><span className='font-bold italic'>PyBook</span></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                      implemented book that teaches Python using Javascript and Docker

                      <br />
                      <br />

                      <div className='flex flex-col items-center'>
                        <div className='w-2/3'>
                          <img className='p-1 ' src={require("../images/pybook.gif")}/>
                          <p className='italic'>
                          code: <a className='underline text-gray' href='https://github.com/ProfSanjay/pybook' target='_blank'>link</a>
                          </p>
                        </div>
                      </div>                      

                      <div className='grid grid-cols-3 md:grid-cols-5 mt-4 mx-4 gap-3'>
                        <ChipGroup skills={['Javascript', 'CSS', 'Pylint', 'Docker', 'Bootstrap', 'Reveal.js']} />
                      </div>

                    </Typography>
                </AccordionDetails>

            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>

                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography> <span className='font-bold italic'>String Similarity in Database Queries </span> </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                      implemented reasearch paper on string similarity that considered syntax as well as synonyms based on
                      rule sets for an improved similarity measure in database queries. 

                      <br />
                      <br />

                      <div className='flex flex-col items-center'>
                        <div className=''>
                          <iframe src="https://www.youtube.com/embed/QlzvOytskvk" />

                          <p className='italic'>
                            code: <a className='underline text-gray' href='https://github.com/AndresPonciano/databasesProject' target='_blank'>link</a>
                          </p>
                        </div>
                      </div>

                      <div className='grid grid-cols-3 md:grid-cols-5 mt-4 mx-4 gap-3'>
                        <ChipGroup skills={['Python', 'Jaccard', 'Databases', 'SQL']} />
                      </div>
                    </Typography>
                </AccordionDetails>

            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography><span className='font-bold italic'>Job Groups</span></Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>  
                      designed and implemented main pages for job organizing website using React and CSS

                      <br />
                      <br />

                      <div className='flex flex-col items-center'>
                        <div className='w-2/3'>
                          <img className='p-1' src={require("../images/jobgroups_ss.png")}/>

                          <p className='italic'>
                            code: <a className='underline text-gray' href='https://github.com/papertran/job-groups' target='_blank'>link</a>
                          </p>
                        </div>
                      </div>

                      <div className='grid grid-cols-3 md:grid-cols-5 mt-4 mx-4 gap-3'>
                        <ChipGroup skills={['React', 'Javascript', 'Redux', 'CSS', 'MongoDB', 'Figma']} />
                      </div>
                    </Typography>
                </AccordionDetails>

            </Accordion>
        </div>
    </div>
  );
});

export default Projects;