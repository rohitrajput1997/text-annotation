import React from "react";
import { luminTest } from "./utils/utils";

export interface MarkProps {
  key: string;
  content: string;
  start: number;
  end: number;
  tag: string;
  color?: string;
  onClick: (arg0: any) => any;
}

//TODO, props setting for tag value
//remove rad on blend

const Mark: React.FC<MarkProps> = (props) => {
  const lumin = props.color ? luminTest(props.color) : false;

  return (
    <mark
      style={{
        backgroundColor: props.color || "#84d2ff",
        padding: "0 4px",
        ...(lumin && { color: "white" }),
        // borderRadius: props.tag ? "3px" : "0px",
      }}
      data-start={props.start}
      data-end={props.end}
      onMouseUp={() => props.onClick({ start: props.start, end: props.end })}
    >
      {props.content}
      {props.tag && (
        <span style={{
          fontWeight: 'bold', marginLeft: 6, fontSize: '10px',
          background: 'white',
          color: 'black',
          padding: '1px 4px',
          borderRadius: '10px'
        }}>
          {String(props.tag)}
        </span>
      )}
    </mark>
  );
};

export default Mark;
