import { Resolver, Query } from "type-graphql";
import { Invoice } from "../entities/Invoice";

@Resolver(Invoice)
export class InvoiceResolver {
    // @Query(() => [Invoice])
    // async getInvoices(): Promise<Invoice[]> {
    //     return await Invoice.find()
    // }

    @Query(() => String)
    async hello() {
      return "Hello World!";
    }

    // @Mutation(() => Invoice)
    // async submitInvoice(@Arg("type") type: string): Promise<Invoice> {

    //     const invoice = await Invoice.create({type}).save()
    //     return invoice
    // }
}