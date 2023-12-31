const mongoose = require('mongoose');
import app from "./app";
import config from "./config";

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);

    console.log('database connceted successfully')

    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })

  } catch (error) {
    console.log('fail to connect', error)
  }
}


bootstrap();