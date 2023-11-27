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
var index = 0;
function createImage(image, divRow) {
    return __awaiter(this, void 0, void 0, function () {
        var Card, Image;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Card = document.createElement("div");
                    Card.className = "highlight card";
                    Image = document.createElement("img");
                    Image.src = image;
                    Image.style.width = "100px";
                    Image.style.height = "100px";
                    Card.appendChild(Image);
                    return [4 /*yield*/, func2(Card, divRow)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function create(comment, Card) {
    var cardText = document.createElement("div");
    cardText.className = "card-text";
    var cardLink = document.createElement("a");
    cardLink.href = "#"; // You should provide a valid URL here
    cardLink.className = "card-link";
    var cardTitle = document.createElement("h3");
    cardTitle.className = "card-text-title";
    cardTitle.textContent = comment.user.username;
    var cardDesc = document.createElement("p");
    cardDesc.className = "card-text-description";
    cardDesc.textContent = comment.body;
    cardLink.appendChild(cardTitle);
    cardText.appendChild(cardLink);
    cardText.appendChild(cardDesc);
    Card.appendChild(cardText);
}
function func2(Card, divRow) {
    return __awaiter(this, void 0, void 0, function () {
        var request, data, comment, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://dummyjson.com/comments?limit=10&select=body,username")];
                case 1:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    if (index < data.comments.length) {
                        comment = data.comments[index];
                        create(comment, Card);
                        divRow.appendChild(Card);
                        index++;
                        return [2 /*return*/];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function func() {
    return __awaiter(this, void 0, void 0, function () {
        var request, data, mainDiv, i, image, divRow, j, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 11, , 12]);
                    return [4 /*yield*/, fetch("https://picsum.photos/v2/list")];
                case 1:
                    request = _a.sent();
                    return [4 /*yield*/, request.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    mainDiv = document.querySelector("section");
                    if (!mainDiv) return [3 /*break*/, 10];
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < data.length)) return [3 /*break*/, 10];
                    image = data[i].download_url;
                    divRow = document.createElement("div");
                    divRow.className = "divRow";
                    image = data[i].download_url;
                    return [4 /*yield*/, createImage(image, divRow)];
                case 4:
                    _a.sent();
                    j = 0;
                    _a.label = 5;
                case 5:
                    if (!(j < 3)) return [3 /*break*/, 8];
                    index++;
                    image = data[index].download_url;
                    return [4 /*yield*/, createImage(image, divRow)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    j++;
                    return [3 /*break*/, 5];
                case 8:
                    console.log(divRow);
                    if (mainDiv) {
                        mainDiv.appendChild(divRow);
                    }
                    _a.label = 9;
                case 9:
                    i++;
                    return [3 /*break*/, 3];
                case 10: return [3 /*break*/, 12];
                case 11:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    });
}
func();
