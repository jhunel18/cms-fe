import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./sidebar.css";
import UserProfile from "../../ui/UserProfile";
import { AuthenticationService } from "../../services/AuthenticationService";
import image from "../../assets/avatar.png";


const Sidebar = ({ menuItems, toggleSidebar }) => {
  const [isNotActive, setNotActive] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const navigate = useNavigate();
  const handleLogout = () => {
      AuthenticationService.logout();
      navigate("/"); // Redirect to the login page after logout
    };

  const handleClick = (item, index, event) => {
    if (item.subMenu) {
      event.preventDefault();
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  const handleSidebarToggle = () => {
    setNotActive(!isNotActive);
    toggleSidebar(!isNotActive); // Notify parent about sidebar state change
  };

  return (
    <div>
      <div className={`wrapper ${isNotActive ? "active" : ""}`}>
        <nav id="sidebar" className={isNotActive ? "active" : ""}>
          <button
            type="button"
            id="sidebarCollapse"
            onClick= {handleSidebarToggle}
            className="btn btn-custom"
          >
            {isNotActive ? (
              <i className="fas fa-bars"></i>
            ) : (
              <i className="fas fa-times-circle"></i>
            )}
          </button>
          <div className="sidebar-header">
            <img
              src={image}
              className="rounded-circle usr-image"
              height={isNotActive ? "20" : "70"}
              width={isNotActive ? "20" : "70"}
              alt="User Avatar"
            />
            <h3>
              <UserProfile />
            </h3>
          </div>

          <ul className="list-unstyled components">
            {menuItems.map((item, index) => (
              <li key={index} className="list-item">
                <FontAwesomeIcon icon={item.icon} className="icon-color" />
                <Link
                  to={item.subMenu ? "#" : item.to}
                  className={item.subMenu ? "dropdown-toggle" : ""}
                  onClick={(event) => handleClick(item, index, event)}
                >
                  {item.name}
                </Link>
                {item.subMenu && expandedIndex === index && (
                  <ul className="list-unstyled ms-1">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="sidebar-item">
                        <Link to={subItem.to}>{subItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
