import './DashboardPage.css';
import React from 'react';
import StatsSection from '../../components/StatsSection/StatsSection';
import USMap from '../../components/USMap/USMap';
import CountiesSection from '../../components/CountiesSection/CountiesSection';
import DateSection from '../../components/DateSection/DateSection';

export default function DashboardPage({ user }) {
  return (
    <div className="dashboard flex-ctr-ctr">
      <div className="usStats"><StatsSection /></div>
      <div className="usMap"><USMap /></div>
      <div className="usCounties"><CountiesSection /></div>
      <div className="date"><DateSection user={user} /></div>
    </div>
  );
}