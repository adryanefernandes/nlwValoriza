import { Response, Request } from "express";
import { ListUserService } from "../service/ListUsersService";

export class ListUsersController {
  async handle(req: Request, res: Response) {
    const listUsersService = new ListUserService()

    const users = await listUsersService.execute()

    return res.send(users)
  }
}