import { useState, useEffect } from 'react';

export function useDashboardData(role) {
    const [menuItems, setMenuItems] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Fetch data based on the role
        if (role === 'role_admin') {
            setMenuItems([
                { name: 'Dashboard', icon: 'tachometer-alt' },
                { name: 'Manage Users', icon: 'users-cog' },
                { name: 'Reports', icon: 'file-alt' },
              ]);
            setUsername(role);
        } else {
            setMenuItems([
                { name: 'Dashboard', icon: 'tachometer-alt' },
                { name: 'Clients', icon: 'user' },
                { name: 'Supplies', icon: 'suitcase-medical' },
                { name: 'Treatment Record', icon: 'notes-medical' },
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