// App.tsx
import React from "react";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div>
      <Counter
        style="primary"
        size={24}
        stroke={true}
        quantity={800}
        pulse={false}
      />
    </div>
  );
};

export default App;
