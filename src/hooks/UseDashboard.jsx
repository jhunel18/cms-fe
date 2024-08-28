import { useState, useEffect } from 'react';

export function useDashboardData(role) {
    const [menuItems, setMenuItems] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (role === 'role_admin') {
            setMenuItems([
                { name: 'Dashboard', icon: 'tachometer-alt', to: '/admin-dashboard' },
                { name: 'Manage Users', icon: 'users-cog', to: '/manage-users' },
                { name: 'Reports', icon: 'file-alt', to: '/reports' },
            ]);
            setUsername(role);
        } else {
            setMenuItems([
                { name: 'Dashboard', icon: 'tachometer-alt', to: '/user-dashboard' },
                { name: 'Clients', icon: 'user', to: '/clients' },
                { name: 'Supplies', icon: 'suitcase-medical', to: '/supplies' },
                { name: 'Treatment Record', icon: 'notes-medical', to: '/treatment-record' },
                { 
                    name: 'Reports', 
                    icon: 'file-alt',
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
