const test = require("node:test");
const assert = require("node:assert");

const {
    calculateAttendance
} = require("../script.js");


test("40 total, 36 attended = 90% Eligible", () => {
    const result = calculateAttendance(40, 36);

    assert.strictEqual(result.percentage, 90);
    assert.strictEqual(result.status, "Eligible");
});


test("40 total, 30 attended = 75% Eligible", () => {
    const result = calculateAttendance(40, 30);

    assert.strictEqual(result.percentage, 75);
    assert.strictEqual(result.status, "Eligible");
});


test("40 total, 28 attended = 70% Not Eligible", () => {
    const result = calculateAttendance(40, 28);

    assert.strictEqual(result.percentage, 70);
    assert.strictEqual(result.status, "Not Eligible");
});


test("attended classes cannot exceed total classes", () => {
    const result = calculateAttendance(40, 45);

    assert.strictEqual(result.valid, false);
    assert.strictEqual(result.message, "Invalid attendance data");
});


test("zero total classes is invalid", () => {
    const result = calculateAttendance(0, 0);

    assert.strictEqual(result.valid, false);
    assert.strictEqual(result.message, "Invalid attendance data");
});