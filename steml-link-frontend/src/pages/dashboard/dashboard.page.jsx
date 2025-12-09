//THIS is RTK query hook to fetch energy generation records for a solar unit
import { useGetEnergyGenerationRecordsBySolarUnitQuery } from "@/lib/redux/query";
import DataCard  from "./components/DataCard";
import  DataChart  from "./components/DataChart";
import { useUser } from "@clerk/clerk-react";

const DashboardPage = () => {

   const { user } = useUser();
   const solarUnitId = "693180eba9989b57a66f1910" ;
   

console.log("User info:", user);
  return (
    <>
    <div className=" text-gray-800 m-4">
      <h1 className="font-bold text-4xl">{user?.firstName}'s House</h1>
      <div className="text-lg mt-3 text-gray-500 ">Welcome back to your Solar Energy Dashboard</div>

      <div className="mt-8 w-full">
        <DataCard       //DataCard component is used to display the energy generation records in a card format
         solarUnitId = {solarUnitId}
         title="Energy Generation Records"
        />

       <div className="mt-8 ">
        <DataChart
        solarUnitId = {solarUnitId}/>
       </div>
      </div>
    </div>
    </>
  );
};

export default DashboardPage;


