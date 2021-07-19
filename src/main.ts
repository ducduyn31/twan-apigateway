import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {EtcdService} from 'nestjs-etcd3';
import {Config} from './config';
import * as manager from 'etcd3';

async function initialize() {
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const etcdService = app.get(EtcdService);
  etcdService.getClient().getAll().strings().then((config) => {
    Object.keys(Config).forEach(key => Config[key] = config[key]);
  });
  Object.keys(Config).forEach(key => etcdService.watch(key).subscribe(value => Config[key] = value));

  // app.useGlobalGuards(new AuthGuard());
  await app.listen(3030);
}
bootstrap();
