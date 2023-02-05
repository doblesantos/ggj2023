import { tToPixel } from "@/settings";
import { useGame } from "@/store";
import { ColonyPoint } from "@/store/types";
import React from "react";
import type TreeModel from "tree-model";

interface FungusProps {
  fungus: TreeModel.Node<ColonyPoint>;
}

export function Fungus(props: FungusProps) {
  const { setSelectedFungus, selectedFungus } = useGame();

  const handleClick = React.useCallback(() => {
    setSelectedFungus(props.fungus);
  }, [setSelectedFungus, props.fungus]);

  return (
    <g>
      <g>
        <ellipse 
          cx={props.fungus.model.x}
          cy={-24}
          rx={28}
          ry={25}
          fill-opacity="0.5"
          stroke-opacity="0.7" 
          fill={
            selectedFungus?.model.id === props.fungus.model.id ? "lightgreen" : "transparent"
          }
          stroke={
            selectedFungus?.model.id === props.fungus.model.id ? "lime" : "transparent"
          }
        />
      </g>
      <g>
        <image
          href={`./textures/${selectedFungus?.model.fungusType}_64x64.png`}
          x={props.fungus.model.x - 26}
          y={-47}
          width="50px"
          height="50px"
          onClick={handleClick}
        />
        <text x={props.fungus.model.x-14} y={20}>
         RP:{props.fungus.model.rootPoints}
        </text>
      </g>
    </g>
  );
}
