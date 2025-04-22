import { Button, buttonVariants } from "@/components/ui/button";
import { ADD_SHAPE } from "@designcombo/state";
import { dispatch } from "@designcombo/events";
import { useIsDraggingOverTimeline } from "../hooks/is-dragging-over-timeline";
import Draggable from "@/components/shared/draggable";
import { BOX_ADD_PAYLOAD, CIRCLE_ADD_PAYLOAD } from "../constants/payload";
import { cn } from "@/lib/utils";

export const Elements = () => {
  const isDraggingOverTimeline = useIsDraggingOverTimeline();

  const handleAddShape = (shapePayload: typeof BOX_ADD_PAYLOAD | typeof CIRCLE_ADD_PAYLOAD) => {
    dispatch(ADD_SHAPE, {
      payload: shapePayload,
      options: {},
    });
  };

  return (
    <div className="flex flex-1 flex-col">

      <div className="flex flex-col gap-2 px-4">
        <Draggable
          data={BOX_ADD_PAYLOAD}
          renderCustomPreview={
            <Button variant="secondary" className="w-60">
               sdfsdf
            </Button>
          }
          shouldDisplayPreview={!isDraggingOverTimeline}
        >
          <div
            onClick={() => handleAddShape(BOX_ADD_PAYLOAD)}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "cursor-pointer",
            )}
          >
            Bild ausschneiden
          </div>
        </Draggable>

        <Draggable
          data={CIRCLE_ADD_PAYLOAD}
          renderCustomPreview={
            <Button variant="secondary" className="w-60">
              Add circle
            </Button>
          }
          shouldDisplayPreview={!isDraggingOverTimeline}
        >
          <div
            onClick={() => handleAddShape(CIRCLE_ADD_PAYLOAD)}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "cursor-pointer",
            )}
          >
            Montageteile markieren
          </div>
        </Draggable>
      </div>
    </div>
  );
};