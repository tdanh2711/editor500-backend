"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aws_1 = __importDefault(require("./aws"));
const app = (0, express_1.default)();
app.get('/upload-url', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName, fileType } = req.query;
    if (!fileName) {
        return res.status(400).json({
            success: false,
            statusCode: 400,
            message: 'Missing file name',
        });
    }
    const signedUrl = yield aws_1.default.getSignedUrl(fileName, fileType);
    return res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Success',
        data: { signedUrl },
    });
}));
exports.default = app;
//# sourceMappingURL=app.js.map