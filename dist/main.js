"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const express = require("express");
const app_module_1 = require("./app.module");
const location_middleware_1 = require("./middlewares/location.middleware");
const cors = require("cors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
        origin: "*"
    });
    app.use(cors({
        origin: "*",
        credentials: true,
    }));
    app.use(location_middleware_1.locationLogger);
    const PORT = process.env.PORT || 8000;
    app.use(express.json({ limit: '50mb' }));
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(PORT, () => {
        common_1.Logger.log(`server started on port ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map