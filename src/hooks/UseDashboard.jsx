import { useState, useEffect } from 'react';

export function useDashboardData(role) {
    const [menuItems, setMenuItems] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Fetch data based on the role
        if (role === 'role_admin') {
            setMenuItems(['Dashboard', 'Manage Users', 'Reports']);
            setUsername(role);
        } else {
            setMenuItems(['Dashboard', 'My Profile', 'Supplies', 'Treatment Record', 'Reports']);
            setUsername(role);
        }
    }, [role]);

    return { menuItems, username };
}
export default useDashboardData;