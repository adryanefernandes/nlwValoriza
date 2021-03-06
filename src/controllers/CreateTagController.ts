import { Request, Response } from "express";
import { CreateTagService } from "../service/CreateTagService";

export class CreateTagController {
  async handle(req: Request, res: Response) {
    const name: string = req.body.name as string;
    const createTagService = new CreateTagService();

    const tag = await createTagService.execute(name);

    return res.send(tag);
  }
}
