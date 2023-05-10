"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const app_1 = __importDefault(require("./app"));
const httpServer = (0, http_1.createServer)(app_1.default);
httpServer.listen({ port: 3000 }, () => {
    console.log('NODE_ENV', process.env.NODE_ENV);
    console.log(`🚀 Server ready at http://localhost:${3000}`);
});
//# sourceMappingURL=index.js.map