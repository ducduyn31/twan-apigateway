import {Controller, Get, Param, Post, Req} from '@nestjs/common';
import {Request} from 'express';

@Controller('api/v2')
export class AppController {

    @Get('service')
    public getServiceInfo(@Req() request: Request) {

    }

    @Get('networks')
    public listNetworks(@Req() request: Request) {

    }

    @Get('network/:networkid/state')
    public getNetworkState(@Param('networkid') networkId: number, @Req() request: Request) {

    }

    @Get('network/:networkid/members')
    public getNetworkMembers(@Param('networkid') networkId: number, @Req() request: Request) {

    }

    @Get('members')
    public getAllMembers(@Req() request: Request) {

    }

    @Get('member/:memberid/devices')
    public getMemberDevices(@Param('memberid') memberId: string, @Req() request: Request) {
    }

    @Post('member/remove')
    public removeMemberFromNetwork(@Req() request: Request) {

    }

    @Post('member/add')
    public addMemberToNetwork(@Req() request: Request) {

    }

}
