export default function SelectButtons({
  amount,
  fpsVisible,
  setAmount,
  setFpsVisible
}: {
  amount: number;
  fpsVisible: boolean;
  setAmount: (value: number) => void;
  setFpsVisible: (visible: boolean) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
      }}
    >
      <button
        style={{
          background: amount === 200 ? "lightblue" : "#aaa",
          border: "1px solid #aaa",
          borderRadius: "2px",
          padding: "5px"
        }}
        onClick={() => setAmount(200)}
      >
        Set Comfortable FPS
      </button>
      <button
        onClick={() => setAmount(805)}
        style={{
          background: amount === 805 ? "lightblue" : "#ccc",
          border: "1px solid #aaa",
          borderRadius: "2px",
          padding: "5px"
        }}
      >
        Set Slow FPS
      </button>
      <button
        onClick={() => setAmount(2009)}
        style={{
          background: amount === 2009 ? "lightblue" : "#ccc",
          border: "1px solid #aaa",
          borderRadius: "2px",
          padding: "5px"
        }}
      >
        Set Really Slow FPS
      </button>
      <div>
        <label htmlFor="fps">Show FPS</label>
        <input
          type="checkbox"
          id="fps"
          checked={fpsVisible}
          onChange={(e) => setFpsVisible(e.currentTarget.checked)}
        />
      </div>
    </div>
  );
}
