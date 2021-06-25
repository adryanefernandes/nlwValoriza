import { Response, Request } from "express";
import { ListUserSendComplimentsService } from "../service/ListUserSendComplimentsService";

export class ListUserSendComplimentsController {
  async handle(req: Request, res: Response) {
    const listUserSendComplimentsService = new ListUserSendComplimentsService();

    const { user_id } = req;

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return res.send(compliments);
  }
}
