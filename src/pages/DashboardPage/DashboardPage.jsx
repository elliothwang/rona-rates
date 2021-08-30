import React  from 'react';
import MajorStats from '../../components/MajorStats/MajorStats';
import USMap from '../../components/USMap/USMap';
import * as userService from '../../utilities/users-service';
import './DashboardPage.css';

export default function DashboardPage() {
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  return (
    <div className="dashboard">
      <MajorStats />
      <USMap />
    </div>
  );
}