import { API_URL } from "../llm/Generator"

export default function ModelsNotFound() {
    return (
        <p data-testid="no-models" className="alert alert-danger" role="alert">
          Error fetching models. Make sure the host is running.<br></br>
          Attempted to fetch from {API_URL}
        </p>
    )
  }