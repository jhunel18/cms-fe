import { useState, useEffect } from 'react';
import { faTachometerAlt, faFileAlt,faUserFriends, faPills, faFileMedical, faChartBar } from '@fortawesome/free-solid-svg-icons';

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
                    icon: faUserFriends,
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
                //Links for Manage Clients
                {
                    name: 'Manage Clients', 
                    icon: faUserFriends,
                    subMenu: [
                      { name: 'Add Client', to: '/clients/add' },
                      { name: 'View Clients', to: '/clients/view' },
                    ]
                },
                // Links for Manage Supplies
                {
                    name: 'Manage Supplies', 
                    icon: faPills,
                    subMenu: [
                      { name: 'Add Supply', to: '/supplies/add' },
                      { name: 'View Supplies', to: '/supplies/view' },
                    ]
                },

                            
                //Links for Treatment Record
                {
                    name: 'Treatment Record', 
                    icon: faFileMedical,
                    subMenu: [
                      { name: 'New Treatment', to: '/treatments/add' },
                      { name: 'View Treatments', to: '/treatments/view' },
                    ]
                },
                
                //Links for Reports
                { 
                    name: 'Reports', 
                    icon: faChartBar,
                    subMenu: [
                      { name: 'Services Rendered', to: '/reports/medical-services' },
                      { name: 'Medicine Report', to: '/reports/drug-medicine-report' },
                      { name: 'Supplies Report', to: '/reports/supplies-report' },
                    ]
                },
            ]);
            setUsername(role);
        }
    }, [role]);

    return { menuItems, username };
}

export default useDashboardData;
