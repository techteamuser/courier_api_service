"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const port = process.env.APP_PORT || 8080;
app.get('/', (_req, res) => {
    return res.send(`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`);
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
dotenv_1.default.config();
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map