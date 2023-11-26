// 
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
var url1 = "https://mocki.io/v1/89d8db87-1e7d-4756-a1d7-908747f7049d";
function getData(url1) {
    return __awaiter(this, void 0, void 0, function () {
        var response, responseData, mainSection, i, row, rowimage, dynamicImage, rowtext, rowtexthead, rowtextpara, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url1, {
                            method: "get",
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("network response was not ok");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseData = _a.sent();
                    console.log(responseData);
                    mainSection = document.getElementsByClassName("dynamicbox");
                    for (i = 0; i < 3; i++) {
                        row = document.createElement("div");
                        row.classList.add("container");
                        rowimage = document.createElement("div");
                        rowimage.classList.add("container-img");
                        dynamicImage = document.createElement("img");
                        dynamicImage.classList.add("home-feed-images");
                        dynamicImage.src = responseData.photos[i].url; // Corrected this line
                        rowtext = document.createElement("div");
                        rowtext.classList.add("description");
                        rowtexthead = document.createElement("h2");
                        rowtexthead.textContent = responseData.photos[i].title;
                        rowtextpara = document.createElement("p");
                        rowtextpara.textContent = responseData.photos[i].description;
                        if (i % 2 == 0) {
                            mainSection[0].appendChild(row);
                            row.appendChild(rowimage);
                            rowimage.appendChild(dynamicImage);
                            row.appendChild(rowtext);
                            rowtext.appendChild(rowtexthead);
                            rowtext.appendChild(rowtextpara);
                        }
                        else {
                            mainSection[0].appendChild(row);
                            row.appendChild(rowtext);
                            rowtext.appendChild(rowtexthead);
                            rowtext.appendChild(rowtextpara);
                            row.appendChild(rowimage);
                            rowimage.appendChild(dynamicImage);
                        }
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("there was a problem with fetch operation: ", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getData(url1);
document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the button
    var openDisButton = document.getElementById("opendis");
    if (openDisButton) {
        openDisButton.addEventListener("click", function () {
            // Replace the button with a textbox
            replaceWithTextbox(this);
            // Hide the "Download for Windows" button
            var dfwButton = document.getElementById("dfw");
            if (dfwButton) {
                dfwButton.style.display = "none";
            }
        });
    }
    // Function to replace the button with a textbox
    function replaceWithTextbox(button) {
        var _a;
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter A Username";
        input.style.paddingRight = '80px';
        input.style.paddingTop = '20px';
        input.style.fontSize = '16px';
        input.style.border = 'none';
        input.style.borderRadius = '20px';
        input.style.outline = 'none';
        input.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
        // Insert the input after the button
        (_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, button.nextSibling);
        // Hide the button
        button.style.display = "none";
        // Focus on the input
        input.focus();
        // Add a blur event listener to switch back to the button when the input loses focus
        input.addEventListener("blur", function () {
            var _a;
            // Remove the input
            (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
            // Show the button again
            button.style.display = "inline-block";
            // Show the "Download for Windows" button
            var dfwButton = document.getElementById("dfw");
            if (dfwButton) {
                dfwButton.style.display = "inline-block";
            }
        });
    }
document.addEventListener("DOMContentLoaded", function () {
    var loggedInUserData = sessionStorage.getItem("loggedInUser"); // Retrieve logged-in user data from session storage
    // Check if there is a logged-in user
    if (loggedInUserData) {
        var loggedInUser = JSON.parse(loggedInUserData); // Parse the logged-in user data
        var loginButtonDiv = document.getElementById("button-login-div");
        if (loginButtonDiv) {
            loginButtonDiv.remove(); // Check if the login button div exists, and if so, remove it
            var navBar = document.getElementById("navbar");
            // Create a div for the profile icon
            var profileIconDiv = document.createElement("div");
            profileIconDiv.setAttribute("id", "profile-icon-div");
            // Check if the profile icon div exists
            if (profileIconDiv) {
                // Create a link for the profile redirect
                var profileRedirect = document.createElement("a");
                profileRedirect.href = "/Login/login.html";
                // Create an image element for the profile icon
                var profileIcon = document.createElement("img");
                profileIcon.src = loggedInUser.image;
                profileIcon.alt = "Profile Icon";
                profileRedirect.appendChild(profileIcon); // Append the profile icon to the profile redirect link
                profileIconDiv.appendChild(profileRedirect); // Append the profile redirect link to the profile icon div
            }
            navBar.appendChild(profileIconDiv);
        }
    }
});
