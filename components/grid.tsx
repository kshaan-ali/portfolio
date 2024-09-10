import { section } from "framer-motion/client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItem } from "./../data";

function Grid() {
  return (
    <section id="#about">
      <BentoGrid>
        {gridItem.map(function (i) {
          return (
            <BentoGridItem
              key={i.id}
              id={i.id}
              title={i.title}
              description={i.description}
              header={i.header}
              className={i.className}
              img={i.img}
              imgClassName={i.imgClassName}
              titleClassName={i.titleClassName}
            ></BentoGridItem>
          );
        })}
      </BentoGrid>
    </section>
  );
}

export default Grid;
