import React from 'react';
import { useState } from 'react';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';
import { Button, List, ListItemButton, Menu, MenuItem } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

let navItems: string[] = ['About', 'Experience', 'Projects', 'More']

const NavMenu = ( { executeScroll }: 
    { executeScroll: (refString: String) => void }
    ) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSmallNavAction = ( refString: String ) => {
        handleClose();

        executeScroll(refString);
    }
    
    return (
            <div className=''>
                <nav className='list-none text-xl'>
                    <List className='hidden md:block'>
                    {navItems.map( (item, index) => {
                        return (
                            <ListItemButton
                                disableGutters
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
                        <ListItemButton 
                            disableGutters
                            href={require('../pdfs/___andres_ponciano_resume.pdf')}
                            target='_blank'
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
                            Resume
                        </ListItemButton>

                    </List>

                    <div className='block md:hidden'>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{
                                padding: "0px",
                                justifyContent: "left",
                                color: "#F5F9E9",
                                ":hover": {
                                    color: "#7D97BD"
                                }
                            }}
                        >
                            <FontAwesomeIcon className='h-5' icon={faNavicon as IconProp} />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            {navItems.map( (item, index) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        onClick={() => handleSmallNavAction(item)}
                                        sx={{
                                            backgroundColor: "#F5F9E9",
                                            color: "#080718"
                                        }}
                                    >
                                        {item}
                                    </MenuItem>
                                )
                            } )}
                            <ListItemButton
                                target='_blank'
                                href={require('../pdfs/___andres_ponciano_resume.pdf')}                               
                                sx={{
                                    backgroundColor: "#F5F9E9",
                                    color: "#080718"
                                }}
                            >
                                Resume
                            </ListItemButton>
                        </Menu>
                    </div>
                </nav>
            </div>
    )
};

export default NavMenu;
