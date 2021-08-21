import React  from 'react';
import MajorStats from '../../components/MajorStats/MajorStats';
import USMap from '../../components/USMap/USMap';
import * as userService from '../../utilities/users-service';
import './Dashboard.css';

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  return (
    <div className="Dashboard">
      <MajorStats />
      <USMap />
    </div>
  );
}