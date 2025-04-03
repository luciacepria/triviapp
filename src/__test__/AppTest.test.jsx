import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import App from "../App"

describe("App component", () => {
    render(<App models={[]}/>)
    it("should show no models alert in case of no models or no available host", () => {
        const errorComponent = screen.getByTestId("no-models")
        expect(errorComponent).toBeInTheDocument()
    })
})