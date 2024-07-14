import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

function PlayButton({
  handleRunVisualizer,
  isDisabled,
  isGraphVisualized,
}: {
  isDisabled: boolean;
  isGraphVisualized: boolean;
  handleRunVisualizer: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={handleRunVisualizer}
      className="disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full p-2.5 shadow-mdbg-green-500 hover:bg-green-600 border-none active:ring-green-300 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-30"
    >
      {isGraphVisualized ? (
        <GrPowerReset className="h-5 w-5" />
      ) : (
        <BsFillPlayFill className="h-5 w-5" />
      )}
    </button>
  );
}
export default PlayButton;
