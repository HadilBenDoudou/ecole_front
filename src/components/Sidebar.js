import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>لوحة القيادة</h3>
      <List>
        <ListItem button component={Link} to="/teachers">
          <ListItemText primary="إدارة المدرسين" />
        </ListItem>
        <ListItem button component={Link} to="/classes">
          <ListItemText primary="إدارة الفصول" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="إدارة المستخدمين" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
