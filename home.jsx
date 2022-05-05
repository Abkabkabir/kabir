import React from 'react';
import Chart from "../Components/chart/chart";
import Featuredinfo from "../Components/featuredinfo/Featuredinfo"
import "./home.css";
import { userData } from "../dummyData";
import WidgetSm from '../Components/widgetSm/WidgetSm';
import WidgetLg from '../Components/widgetLg/widgetLg';

export default function Home() {
  return (
    <div className="home">
        <Featuredinfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  ) 
}
