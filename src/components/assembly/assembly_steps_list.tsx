import { PropsWithChildren, useEffect, useState } from "react";
import api from '@/api';

interface AssemblyStep {
  id: number;
  name: string;
}

interface Props {
  heading: string;
  onSelectItem?: (item: AssemblyStep) => void;
}


const AssemblyStepsList = ({ heading, onSelectItem }: Props) => {
  const [assemblySteps, setAssemblySteps] = useState<AssemblyStep[]>([]);

  const fetchAssemblyStepsList = async () => {
    try {
      const response = await api.get("/assembly_steps");
      setAssemblySteps(response.data.assembly_instruction);
    } catch (error) {
      console.error("Error fetching assembly steps:", error);
    }
  };

  useEffect(() => {
    fetchAssemblyStepsList();
  }, []);

  return (
    <div className="p-4">
      <div className="text-text-primary flex h-12 flex-none items-center px-4 text-xl font-semibold">
        Montageübersicht
      </div>
      <ul className="space-y-2">
        {assemblySteps.map((step) => (
          <li 
            key={step.id}
            onClick={() => onSelectItem?.(step)}
            className="cursor-pointer hover:bg-gray-100 p-2 rounded"
            >
            <div className="text-text-primary flex h-10 flex-none items-center text-xs font-medium">
              {step.id} - {step.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssemblyStepsList;