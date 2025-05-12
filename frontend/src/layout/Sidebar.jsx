import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

// Import your SVG icons
import HomeIcon from '@mui/icons-material/Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { icon: <HomeIcon />, label: 'Home', path: 'home' },
    { icon: <FolderCopyIcon />, label: 'My Lessons', path: 'lessons' },
    { icon: <LibraryBooksIcon />, label: 'Materials', path: 'materials' },
    { icon: <PeopleAltIcon />, label: 'Classes', path: 'classes' },
  ];

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) => 
                `menu-item ${isActive ? 'active' : ''}`
              }
              title={!expanded ? item.label : ''}
            >
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <button
          className="expand-btn"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;