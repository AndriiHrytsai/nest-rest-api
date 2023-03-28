import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipe";

// import { JwtAuthGuard } from "./auth/jwt-auth-guard";

async function start() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Nest.js")
    .setDescription("Rest Api")
    .setVersion("1.0.0")
    .addTag("Lancer X TOP Car")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/docs", app, document);
  // app.useGlobalGuards(JwtAuthGuard);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, () => console.log(`Server started? port : ${PORT}`));

}

start();
