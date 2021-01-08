"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
describe("StoreUi", () => {
    it("toggles the menu visibility", () => {
        const ui = tsdi.get(__1.StoreUi);
        expect(ui.menuVisible).toBe(true);
        ui.toggleMenu();
        expect(ui.menuVisible).toBe(false);
        ui.toggleMenu();
        expect(ui.menuVisible).toBe(true);
    });
});
//# sourceMappingURL=test-ui.js.map