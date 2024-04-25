// app.test.js

const app = require("./App"); // Import your main application file

describe("App", () => {
	it('should return "Hello, world!" when calling the helloWorld() function', () => {
		const result = App.helloWorld();
		expect(result).toBe("Hello, world!");
	});

	it("should add two numbers correctly", () => {
		const result = App.addNumbers(2, 3);
		expect(result).toBe(5);
	});

	// Add more test cases as needed
});
