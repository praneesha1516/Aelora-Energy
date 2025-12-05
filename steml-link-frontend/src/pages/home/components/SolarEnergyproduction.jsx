import Tab from "./Tab";
import EnergyProductionCards from "./EnergyProductionCards";
import { useSelector } from "react-redux";
import {Button} from "@/components/ui/button"
import { getSolarUnitById } from "@/lib/api/solar-unit";
import { useState , useEffect } from "react";
import { subDays, toDate, format } from "date-fns";
import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/query";

const SolarEnergyproduction = () => {
    const energyProductionData = [
        { day: "Mon", date: "Aug 18", Production: 34.1, hasAnomaly:false },
        { day: "Tue", date: "Aug 19", Production: 30.5, hasAnomaly:true },
        { day: "Wed", date: "Aug 20", Production: 3.2, hasAnomaly:false },
        { day: "Thu", date: "Aug 21", Production: 12.7, hasAnomaly:false },
        { day: "Fri", date: "Aug 22", Production: 23.7, hasAnomaly:true },
        { day: "Sat", date: "Aug 23", Production: 54.7, hasAnomaly:false },
        { day: "Sun", date: "Aug 24", Production: 43.7, hasAnomaly:false }
    ];

    const tabs = [
        {label: "All", value: "all"},
        {label: "Anomaly", value: "anomaly"}
    ];

    // Get the selected tab from the Redux store
    const selectedTab = useSelector((state) => state.ui.selectedHomeTab);
       

      // Fetch data using the RTK Query hook
    const { data, isLoading, isError, error } =
    useGetEnergyGenerationRecordsBySolarUnitQuery({
      id: "68ebc456189fc937242ec221",
      groupBy: "date",
    });
    console.log("Fetching data...");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>Error: {error.message}</div>;
  }

  const newEnergyProductionData = data.slice(0, 7).map((el) => {
    return {
      day: format(toDate(el._id.date), "EEE"),
      date: format(toDate(el._id.date), "MMM d"),
      Production: el.totalEnergy,
      hasAnomaly: false,
    };
  });

  const filteredEnergyProductionData = newEnergyProductionData.filter((el) => {
    if (selectedTab === "all") {
      return true;
    } else if (selectedTab === "anomaly") {
      return el.hasAnomaly;
    }
  });

  console.log(filteredEnergyProductionData);

    return (
        <section className="px-12 font-[Inter] py-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">Solar Energy Production</h2>
                <p className="text-gray-600 text-sm">Daily energy output for past 7 days</p>
            </div>
            <div className="mt-4 flex items-center gap-x-4">
              {tabs.map((tab) => { return <Tab key={tab.value} tab={tab} />;
              })}
            </div>
            
                {/* in here props = (energyProductionData = filteredEnergyProductionData) */}
               <EnergyProductionCards 
               energyProductionData={filteredEnergyProductionData} /> 
        </section>
    )
};

export default SolarEnergyproduction;