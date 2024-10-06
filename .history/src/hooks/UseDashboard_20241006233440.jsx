import { useState, useEffect } from 'react';
import { faTachometerAlt, faUsersCog, faFileAlt, faUser, faSuitcaseMedical, faNotesMedical } from '@fortawesome/free-solid-svg-icons';

export function useDashboardData(role) {
    const [menuItems, setMenuItems] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (role === 'role_admin') {
            setMenuItems([
                { name: 'Dashboard', icon: faTachometerAlt, to: '/admin-dashboard' },
                // { name: 'Manage Users', icon: faUsersCog, to: '/view-users' },
                {
                    name: 'Manage Users', 
                    icon: faFileAlt,
                    subMenu: [
                      { name: 'Add User', to: '/manage-users/add' },
                      { name: 'View Users', to: '/manage-users/view' },
                    ]
                },
                { name: 'Reports', icon: faFileAlt, to: '/reports' },
                
            ]);
            setUsername(role);
        } else {
            setMenuItems([
                { name: 'Dashboard', icon: faTachometerAlt, to: '/user-dashboard' },
                { name: 'Clients', icon: faUser, to: '/clients' },
                // { name: 'Supplies', icon: faSuitcaseMedical, to: '/supplies' },
                {
                    name: 'Manage Users', 
                    icon: faFileAlt,
                    subMenu: [
                      { name: 'Add User', to: '/manage-users/add' },
                      { name: 'View Users', to: '/manage-users/view' },
                    ]
                },

                { name: 'Treatment Record', icon: faNotesMedical, to: '/treatment-record' },
                { 
                    name: 'Reports', 
                    icon: faFileAlt,
                    subMenu: [
                      { name: 'Services Rendered', to: '/reports/medical-services' },
                      { name: 'Supplies Report', to: '/reports/supplies-report' },
                      { name: 'Inventory Report', to: '/reports/inventory-report' },
                    ]
                },
            ]);
            setUsername(role);
        }
    }, [role]);

    return { menuItems, username };
}

export default useDashboardData;
