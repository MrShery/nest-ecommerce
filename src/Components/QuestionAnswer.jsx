import React from "react";

import Accordion from "./Accordion";

const QuestionAnswer = () => {
  const accordionData = [
    {
      title: " How Long Will It Take To Get My Package? ",
      content:
        "Swag slow-carb quinoa VHS typewriter pork belly brunch, paleo single-origin coffee Wes Anderson. Flexitarian Pitchfork forage, literally paleo fap pour-over. Wes Anderson Pinterest YOLO fanny pack meggings, deep v XOXO chambray sustainable slow-carb raw denim church-key fap chillwave Etsy. +1 typewriter kitsch, American Apparel tofu Banksy Vice",
    },
    {
      title: " What Payment Methods Are Accepted? ",
      content:
        "Fashion axe DIY jean shorts, swag kale chips meh polaroid kogi butcher Wes Anderson chambray next level semiotics gentrify yr. Voluptate photo booth fugiat Vice. Austin sed Williamsburg, ea labore raw denim voluptate cred proident mixtape excepteur mustache. Twee chia photo booth readymade food truck, hoodie roof party swag keytar PBR DIY.",
    },
    {
      title: " How Can I Cancel Or Change My Order? ",
      content:
        "Plaid letterpress leggings craft beer meh ethical Pinterest. Art party authentic freegan semiotics jean shorts chia cred. Neutra Austin roof party Brooklyn, synth Thundercats swag 8-bit photo booth.",
    },
    {
      title: " Do I need an account to place an order? ",
      content:
        "Thundercats swag 8-bit photo booth. Plaid letterpress leggings craft beer meh ethical Pinterest. Twee chia photo booth readymade food truck, hoodie roof party swag keytar PBR DIY. Cray ugh 3 wolf moon fap, fashion axe irony butcher cornhole typewriter chambray VHS banjo street art.",
    },
    {
      title: " How Do I Track My Order? ",
      content:
        "Keytar cray slow-carb, Godard banh mi salvia pour-over. Slow-carb @Odd Future seitan normcore. Master cleanse American Apparel gentrify flexitarian beard slow-carb next level.",
    },
  ];

  return (
    <div className="w-full mt-10">
      {accordionData.map((item, index) => (
        <Accordion
          key={item.title + index}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default QuestionAnswer;
