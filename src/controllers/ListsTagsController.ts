import { Response, Request } from "express";
import { ListTagService } from "../service/ListTagsService";

export class ListTagsController {
  async handle(req: Request, res: Response) {
    const listTagsService = new ListTagService();

    const tags = await listTagsService.execute();

    return res.send(tags);
  }
}
