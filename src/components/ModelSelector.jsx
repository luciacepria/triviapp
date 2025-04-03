export default function ModelSelector({model, models, setModel}) {

  return (
    <div>
      <label htmlFor="model-select">Select Model:</label>
      <select
        id="model-select"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      >
        {models.map((modelName, index) => (
          <option key={index} value={modelName}>
            {modelName}
          </option>
        ))}
      </select>
      <p>Selected Model: <strong>{model}</strong></p>
    </div>
  )
}
