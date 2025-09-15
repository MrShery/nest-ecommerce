import React from "react";

function Description() {
  return (
    <div className="w-full flex flex-col gap-1">
      <p>
        Short Hooded Coat features a straight body, large pockets with button
        flaps, ventilation air holes, and a string detail along the hemline. The
        style is completed with a drawstring hood, featuring Rains’ signature
        built-in cap. Made from waterproof, matte PU, this lightweight unisex
        rain jacket is an ode to nostalgia through its classic silhouette and
        utilitarian design details.
      </p>

      {"Casual unisex fit.64% polyester, 36% polyurethane.Water column pressure: 4000 mm.Model is 187cm tall and wearing a size S / M.Unisex fit.Drawstring hood with built-in cap.Front placket with snap buttons.Ventilation under armpit.Adjustable cuffs.Double welted front pockets.Adjustable elastic string at hempen.Ultrasonically welded seams"
        .split(".")
        .map((elem,index) => (
          <p key={elem+index}>-{elem}</p>
        ))}
      <p>
        This is a unisex item, please check our clothing & footwear sizing guide
        for specific Rains jacket sizing information. RAINS comes from the rainy
        nation of Denmark at the edge of the European continent, close to the
        ocean and with prevailing westerly winds; all factors that contribute to
        an average of 121 rain days each year. Arising from these rainy weather
        conditions comes the attitude that a quick rain shower may be beautiful,
        as well as moody- but first and foremost requires the right outfit.
        Rains focus on the whole experience of going outside on rainy days,
        issuing an invitation to explore even in the most mercurial weather.
      </p>
    </div>
  );
}

export default Description;
