import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {EtcdModule} from 'nestjs-etcd3';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {Config} from './config';

@Module({
  imports: [EtcdModule.root({
    hosts: 'http://etcd:2379'
  }), ClientsModule.register([
    {
      name: 'KAFKA_SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'gateway',
          brokers: [Config.KAFKA_BROKER],
        },
        consumer: {
          groupId: 'token-verification-consumer'
        }
      }
    },
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
