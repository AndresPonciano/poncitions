import React from 'react';
import { useState } from 'react';
import { List, ListItemButton } from '@mui/material'

let navItems: string[] = ['About', 'Experience', 'Projects', 'Resume', 'More']

const NavMenu = ( { executeScroll }: 
    { executeScroll: (refString: String) => void }
    ) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
            <div className=''>
                <nav className='list-none flex flex-col gap-y-3 text-xl'>
                    <List>
                    {navItems.map( (item, index) => {
                        return (
                            <ListItemButton
                                disableGutters
                                className='bg-red'
                                key={index}
                                onClick={() => executeScroll(item)}
                                selected={selectedIndex === index}
                                sx={{
                                    "&.Mui-selected": {
                                        color: "#7D97BD",
                                        backgroundColor: "#080718" 
                                      },
                                      "&.Mui-focusVisible": {
                                        backgroundColor: "#080718" 
                                      },
                                      ":hover": {
                                        color: "#BCB88A",
                                        backgroundColor: "#080718" 
                                    }
                                }}
                            >
                                {item}
                            </ListItemButton>
                        )
                    })}
                    </List>
                </nav>
            </div>
    )
};

export default NavMenu;
