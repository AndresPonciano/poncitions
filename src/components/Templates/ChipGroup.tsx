import { Chip } from "@mui/material";
import React from "react";

// TODO: randomizing the colors is a pain
// let colors: string[] = ['#FFC09F', '#C0ECCC', '#F9F0C1', '#EA9AB2', '#E0BBE4']
// let colors: string[] = ['secondary', 'warning', 'info', 'primary', 'success']

const ChipGroup = ( { skills }:
    { skills: string[] } 
) => {
    return (
        <>
            {skills.map( (skill) => {
                return (
                    <Chip label={skill} />
                )
            })}
        </>  
    );
}

export default ChipGroup;