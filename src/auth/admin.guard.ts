import { ExecutionContext, CanActivate } from "@nestjs/common";

export class AdminGuard implements CanActivate {
    canActivate(ExecutionContext: ExecutionContext){
        const request = ExecutionContext.switchToHttp().getRequest();
        if(!request.currentUser){
            return false;
        }
        return request.currentUser.admin;
    }
}