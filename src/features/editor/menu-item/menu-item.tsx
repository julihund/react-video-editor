import useLayoutStore from "../store/use-layout-store";

import { AssemblyStepEditor } from "./assembly-step-editor";
import { FinalStateEditor} from "./final-state-editor";
import { AssemblyPartEditor } from "./assembly-part-editor";  

const ActiveMenuItem = () => {
  const { activeMenuItem } = useLayoutStore();

  if (activeMenuItem === "edit-assembly-step") {
    return <AssemblyStepEditor />;
  }
  if (activeMenuItem === "select-assembly-part") {
    return <AssemblyPartEditor />;
  }
  if (activeMenuItem === "edit_final_state") {
    return <FinalStateEditor />;
  }
  return null;
};

export const MenuItem = () => {
  return (
    <div className="w-[300px] flex-1">
       < ActiveMenuItem />
    </div>
  );
};
