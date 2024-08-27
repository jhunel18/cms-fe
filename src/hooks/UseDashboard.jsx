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
                { name: 'My Profile', icon: 'user' },
                { name: 'Supplies', icon: 'cogs' },
                { name: 'Treatment Record', icon: 'notes-medical' },
                { name: 'Reports', icon: 'file-alt' },
              ]);
            setUsername(role);
        }
    }, [role]);

    return { menuItems, username };
}
export default useDashboardData;