// import { describe, it, expect} from "vitest";

// describe("A truthy statement", () => {
//     it("It should be equal to 2", () => {
//         expect(1 + 1).toEqual(2);
//     });

//     it("It should be equal to 3", () => {
//         expect(2 + 1).toEqual(3)
//     });
// });

import { render, screen, } from "@testing-library/react";
import Home from "../Home";

describe("Home component", () => {
    it("Should render the Home component", () => {
        render(<Home />);
        // screen.debug();
        const homeElement = screen.getByText(/Home/i);
        // console.log(homeElement);
        expect(homeElement).toBeTruthy();
    });
});

