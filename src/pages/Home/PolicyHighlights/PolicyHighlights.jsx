import React from "react";
import PolicyHighlightsCard from "../../../components/common/PolicyHighlightsCard";
import iconTruck from "/images/truck.png";
import iconBag from "/images/bag.png";
import iconMoney from "/images/money.png";
import iconChat from "/images/chat.png";
import { Fade } from "react-awesome-reveal";

const PolicyHighlights = () => {
  return (
    <div className="container mx-auto px-4 ">
      <Fade delay={100} triggerOnce='true'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border border-gray-200 rounded-lg my-14 p-6">
          <PolicyHighlightsCard
            icon={iconTruck}
            title={"Cancellation & Returns"}
            subtitle={"If products not matched"}
          />
          <PolicyHighlightsCard
            icon={iconBag}
            title={"Privacy Policy"}
            subtitle={"Check before dealing"}
          />
          <PolicyHighlightsCard
            icon={iconMoney}
            title={"EMI Policy"}
            subtitle={"We provide 0% EMI facilities"}
          />
          <PolicyHighlightsCard
            icon={iconChat}
            title={"Customer Support"}
            subtitle={"Email: moveste2230@gmail.com"}
          />
        </div>
      </Fade>
    </div>
  );
};

export default PolicyHighlights;
