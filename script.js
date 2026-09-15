function calculateAttendance(totalClasses, attendedClasses) {
    if (
        totalClasses <= 0 ||
        attendedClasses < 0 ||
        attendedClasses > totalClasses) {
        return {
            valid: false,
            message: "Invalid attendance data"
        };
    }
    const percentage = (attendedClasses / totalClasses) * 100;
    const status = percentage >= 75
        ? "Eligible"
        : "Not Eligible";

    return {
        valid: true,
        percentage: percentage,
        status: status
    };
}


function checkAttendance() {
    const studentName = document.getElementById("studentName").value;

    const totalClasses = Number(
        document.getElementById("totalClasses").value
    );

    const attendedClasses = Number(
        document.getElementById("attendedClasses").value
    );

    const result = calculateAttendance(
        totalClasses,
        attendedClasses
    );

    const resultDiv = document.getElementById("result");

    if (!result.valid) {
        resultDiv.innerHTML = result.message;
        return;
    }

    resultDiv.innerHTML =
        studentName + "'s Attendance: " +
        result.percentage + "%<br>" +
        "Status: " + result.status;
}

if (typeof module !== "undefined") {
    module.exports = { calculateAttendance };
}
