"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config = require("config");
const helmet = require("helmet");
async function bootstrap() {
    const serverConfig = config.get('server');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if (process.env.NODE_ENV === 'development') {
        app.enableCors();
    }
    else {
        app.enableCors({ origin: serverConfig.origin });
        app.use(helmet());
    }
    await app.listen(serverConfig.port);
}
bootstrap();
//# sourceMappingURL=main.js.map