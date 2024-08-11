import { auth } from '@/auth';
import React from 'react';
import GeneralDashboard from './general-dashboard';
import LoggedinDashboard from './loggedin-dashboard';

async function Dashboard() {
  const session = await auth();
  if (!session) {
    return <GeneralDashboard />;
  }
  return <LoggedinDashboard />;
}

export default Dashboard;
