describe("Sample Test", function () {
    it("Should return the sum of two numbers", function () {
        expect(2 + 2).toBe(4);
        //expect(3 + 2).toEqual(5);
    });
    it("error happening", function () {
        expect(false).toBeTruthy();

    });
    it("Should return the sum of two numbers", function () {
        expect(true).toBeTruthy();

    });

});