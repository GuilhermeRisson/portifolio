import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

// const Grid = () => {
//   return (
//     <section id="about">
//       <BentoGrid>
//         {gridItems.map((item) =>(
//             <BentoGridItem
//                 id={item.id}
//                 key={item.id}
//                 title={item.title}
//                 description={item.description}
//                 className={item.className}
//             />
//         ))
//         }
//       </BentoGrid>
//     </section>
//   )
// }

const Grid = () => {
    return (
      <section id="about">
        <BentoGrid className="w-full py-20">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              // remove icon prop
              // remove original classname condition
              className={item.className}
            />
          ))}
        </BentoGrid>
      </section>
    );
  };

export default Grid
