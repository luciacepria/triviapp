import { useState } from "react";
import { setGameDificulty } from "../llm/PromptCreator";

export default function GameDificulty() {
  const difficulties = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Hard" },
  ];

  const [selectedId, setSelectedId] = useState(difficulties[0].id);

  const handleChange = (e) => {
    const id = parseInt(e.target.value, 10);
    setSelectedId(id);
    setGameDificulty(id); 
  };

  return (
    <div>
      <select className = "dropDown" value={selectedId} onChange={handleChange}>
        {difficulties.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}