import useLayoutStore from "../store/use-layout-store";

import { AssemblyStepEditor } from "./editor-tools/assembly-step-editor";
import { FinalStateEditor} from "./editor-tools/final-state-editor";
import { AssemblyPartEditor } from "./editor-tools/assembly-part-editor";  

const ActiveEditorTools = () => {
  const { activeEditor } = useLayoutStore();

  if (activeEditor === "edit-assembly-step") {
    return <AssemblyStepEditor />;
  }
  if (activeEditor === "select-assembly-part") {
    return <AssemblyPartEditor />;
  }
  if (activeEditor === "edit_final_state") {
    return <FinalStateEditor />;
  }
  return null;
};

export const MontaVisEditor = () => {
  return (
    <div className="w-[300px] flex-1">
       < ActiveEditorTools />

    </div>
  );
};
