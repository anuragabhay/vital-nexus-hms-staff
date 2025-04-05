
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Stethoscope, 
  Bed, 
  CreditCard, 
  Ambulance, 
  FileText,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

interface NavItem {
  title: string;
  path: string;
  icon: React.ElementType;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();
  
  const navItems: NavItem[] = [
    { title: 'Dashboard', path: '/', icon: LayoutDashboard },
    { title: 'Patients', path: '/patients', icon: Users },
    { title: 'Appointments', path: '/appointments', icon: Calendar },
    { title: 'Medical Services', path: '/medical-services', icon: Stethoscope },
    { title: 'Bed Management', path: '/bed-management', icon: Bed },
    { title: 'Billing', path: '/billing', icon: CreditCard },
    { title: 'Emergency', path: '/emergency', icon: Ambulance },
    { title: 'Reports', path: '/reports', icon: FileText },
    { title: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside 
      className={cn(
        "flex flex-col h-screen bg-purple-700 dark:bg-purple-900 text-white transition-all duration-300 overflow-hidden",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center justify-center h-16 border-b border-purple-800 dark:border-purple-950">
        {isOpen ? (
          <h1 className="text-xl font-bold">Vital Nexus</h1>
        ) : (
          <h1 className="text-xl font-bold">VN</h1>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path} className="px-4 py-2">
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-2 rounded-md transition-colors",
                    isActive 
                      ? "bg-purple-800 dark:bg-purple-950 text-white" 
                      : "text-purple-100 hover:bg-purple-800 dark:hover:bg-purple-950 hover:text-white"
                  )}
                >
                  <Icon size={20} />
                  {isOpen && <span className="ml-4">{item.title}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t border-purple-800 dark:border-purple-950">
        <button className="flex items-center text-purple-100 hover:text-white w-full px-4 py-2 rounded-md hover:bg-purple-800 dark:hover:bg-purple-950 transition-colors">
          <LogOut size={20} />
          {isOpen && <span className="ml-4">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
