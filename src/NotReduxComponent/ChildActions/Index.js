import { ActionSetting } from "./Setting";
import { ActionEdit } from "./Edit";
import { ActionElipsis } from "./Ellipsis";

export const ActionButton = (props) => {
  return [
    <ActionSetting show={props?.setting ?? false} />,
    <ActionEdit show={props?.edit ?? false}/>,
    <ActionElipsis show={props?.ellipsis ?? false} />,
  ];
};
