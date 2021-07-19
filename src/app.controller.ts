import {Controller, Get, Inject, OnModuleInit, Param, Post, Req} from '@nestjs/common';
import {Request} from 'express';
import {ClientKafka} from '@nestjs/microservices';
import {Config} from './config';

@Controller('api/v2')
export class AppController implements OnModuleInit {

    constructor(@Inject('KAFKA_SERVICE') private kafkaClient: ClientKafka) {
    }

    onModuleInit() {
        this.kafkaClient.subscribeToResponseOf(Config.KAFKA_CHECK_AUTHORIZATION);
    }

    @Get('service')
    public getServiceInfo(@Req() request: Request) {
        const token = request.header('authorization');

        return token;
    }

    @Get('networks')
    public listNetworks(@Req() request: Request) {
        const token = request.header('authorization');
    }

    @Get('network/:networkid/state')
    public getNetworkState(@Param('networkid') networkId: number, @Req() request: Request) {
        const token = request.header('authorization');
    }

    @Get('network/:networkid/members')
    public getNetworkMembers(@Param('networkid') networkId: number, @Req() request: Request) {
        const token = request.header('authorization');
    }

    @Get('members')
    public getAllMembers(@Req() request: Request) {
        const token = request.header('authorization');
    }

    @Get('member/:memberid/devices')
    public getMemberDevices(@Param('memberid') memberId: string, @Req() request: Request) {
        const token = request.header('authorization');
    }

    @Post('member/remove')
    public removeMemberFromNetwork(@Req() request: Request) {
        const token = request.header('authorization');
    }

    @Post('member/add')
    public addMemberToNetwork(@Req() request: Request) {

    }

}
