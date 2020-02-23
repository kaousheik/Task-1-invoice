import { Resolver, Query } from "type-graphql";
import { Approval } from "../entities/Approval";

@Resolver(Approval)
export class ApprovalResolver {
    @Query(() => [Approval])
    async getAll(): Promise<Approval[]> {
        return await Approval.find()
    }
}
