var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
// Dynamically populate the month dropdown list
for (var i = 0; i < month.length; i++) {
    var monthList = document.getElementById("month-list");
    var monthItem = document.createElement("option");
    monthItem.setAttribute("value", "".concat(i + 1));
    monthItem.innerHTML = "".concat(month[i]);
    monthList.appendChild(monthItem);
}
// Dynamically populate the date dropdown list
for (var i = 1; i <= 31; i++) {
    var dateList = document.getElementById("date-list");
    var dateItem = document.createElement("option");
    dateItem.setAttribute("value", "".concat(i));
    dateItem.innerHTML = "".concat(i);
    dateList.appendChild(dateItem);
}
// Dynamically populate the year dropdown list
for (var i = 2020; i >= 1900; i--) {
    var yearList = document.getElementById("year-list");
    var yearItem = document.createElement("option");
    yearItem.setAttribute("value", "".concat(i));
    yearItem.innerHTML = "".concat(i);
    yearList.appendChild(yearItem);
}
// Function to validate and submit the registration form
function validateRegister() {
    return __awaiter(this, void 0, void 0, function () {
        var emailField, displayNameField, usernameField, passwordField, monthField, dateField, yearField, date, imageURL, userData, postUrl, postResponse, storedUsersData, registeredUsers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    emailField = document.getElementById("register-email");
                    displayNameField = document.getElementById("register-name");
                    usernameField = document.getElementById("register-username");
                    passwordField = document.getElementById("register-password");
                    monthField = document.getElementById("month-list");
                    dateField = document.getElementById("date-list");
                    yearField = document.getElementById("year-list");
                    date = "".concat(yearField.value, "-").concat(monthField.value, "-").concat(dateField.value);
                    imageURL = "https://robohash.org/".concat(usernameField.value);
                    userData = {
                        id: Math.floor(Math.random() * 9999999999),
                        name: displayNameField.value,
                        email: emailField.value,
                        username: usernameField.value,
                        password: passwordField.value,
                        DOB: date,
                        image: imageURL,
                    };
                    postUrl = "https://script.google.com/macros/s/AKfycbz4M_55FnUzXQOhGAD_2fPQTIZUkRcETl3D0RSE1sw7jPmSzS55MF9OMJFDJq4UPDt0bA/exec";
                    return [4 /*yield*/, addUser(postUrl, userData)];
                case 1:
                    postResponse = _a.sent();
                    console.log(postResponse);
                    storedUsersData = sessionStorage.getItem("registeredUsers");
                    registeredUsers = [];
                    if (storedUsersData !== null) {
                        registeredUsers = JSON.parse(storedUsersData);
                    }
                    registeredUsers.push(userData);
                    sessionStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
                    window.location.href = "../Login/login.html"; // Redirect to the login page
                    return [2 /*return*/];
            }
        });
    });
}
// Async function to add a user by making a POST request
function addUser(url, userData) {
    return __awaiter(this, void 0, void 0, function () {
        var response, responseData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                            body: new URLSearchParams(userData),
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseData = _a.sent();
                    return [2 /*return*/, responseData];
                case 3:
                    error_1 = _a.sent();
                    console.error("There was a problem with the fetch operation:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
