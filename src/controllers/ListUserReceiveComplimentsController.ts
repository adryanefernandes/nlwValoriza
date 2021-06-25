import { Response, Request } from "express";
import { ListUserReceiveComplimentsService } from "../service/ListUserReceiveComplimentsService";

export class ListUserReceiveComplimentsController {
  async handle(req: Request, res: Response) {
    const listUserReceiveComplimentsService =
      new ListUserReceiveComplimentsService();

    const { user_id } = req;

    const compliments = await listUserReceiveComplimentsService.execute(user_id);

    return res.send(compliments);
  }
}