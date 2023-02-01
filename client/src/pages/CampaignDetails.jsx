import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { CustomButton } from "../components";
import { calculateBarPercentage, daysLeft } from "../utils";
import { thirdweb } from "../assets";

const CampaignDetails = () => {
  const { state } = useLocation();
  const { getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const { amount, setAmount } = useState("");
  const { donators, setDonators } = useState([]);

  const remainungDays = daysLeft(state.deadline);

  console.log(state);
  return (
    <div>
      {isLoading && "Loading..."}
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <img
            src={state.image}
            alt="campaing"
            className="w-full h-[410px] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
