describe("Sample Test 3", function () {

    it("Should return the sum of two numbers", function () {
        expect(3 + 3).toBe(6);
        //expect(3 + 2).toEqual(5);
    });
    it("falsify happening", function () {
        expect(false).toBeFalsy();

    });
    it("truth happening", function () {
        expect(true).toBeTruthy();

    });

});