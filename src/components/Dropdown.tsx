/**
 * @file contains a dropdown-menu with checkboxes
 */

import React from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';

/**
 * Dropdown-menu with checkboxes for dynamic content
 *
 * @param props dropdownProps - name of dropdown and name of items in dropdown
 * @returns a dropdop component designed for menu
 */
export default function Dropdown(props: dropdownProps): JSX.Element {
  const { dropdownName, value: givenItems } = props;
  // Items to display, should not be here in final code, but should be given as a parameter.
  // const dropdownName = "Metrics"
  // const givenItems = ['metric_1', 'metric_2', 'metric_3'];

  // extract items from given items and mark as selected.
  const extractedItems: any[] | (() => any[]) = [];
  givenItems.forEach((Item: any) => {
    extractedItems.push({ item: Item, selected: true });
  });

  // should probably have some params for setting the content
  const [open, setOpen] = React.useState(true);
  const [content, setContent] = React.useState(extractedItems);
  const [checked, setChecked] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setOpen(open);
    const newContent: React.SetStateAction<any[]> = [];
    // controlls the sub-checkboxes with the main checkbox
    // ERROR: Assignment to property of function parameter 'contentItem', needs to be fixed

    if (checked) {
      content.forEach((contentItem) => {
        const item = { ...contentItem };
        item.selected = false;
        // contentItem.selected = false;
        newContent.push(item);
      });
    } else {
      content.forEach((contentItem) => {
        const item = { ...contentItem };
        item.selected = true;
        // contentItem.selected = false;
        newContent.push(item);
      });
    }
    setContent(newContent);
  };
  const contentClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Sets the corresponding checkbox to it opposite value
    const newContent = [...content];
    const item = newContent.find((a) => a.item === event.target.name);
    if (item != null) item.selected = !item.selected;
    setContent(newContent);
    // controlls the main checkbox with the sub-checkboxes
    let anyChecked = true;
    content.forEach((contentItem) => {
      if (!contentItem.selected) anyChecked = false;
    });
    setChecked(anyChecked);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          width: 1,
          height: 1,
        },
      }}
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </ListItemIcon>
        <ListItemText primary={dropdownName} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout={10} unmountOnExit>
        <List component="div" disablePadding>
          {content.map(({ item, selected }) => (
              <ListItemButton key={item}>
                  <ListItemIcon key={item}>
                <Checkbox
                          checked={selected}
                          onChange={contentClick}
                          name={item}
                          key={item}
                />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Box>
  );
}
