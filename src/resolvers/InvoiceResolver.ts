import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { Invoice } from "../entities/Invoice";
// import {Approval} from "../entities/Approval"
import { SubmitInvoiceInput } from "./inputs/SubmitInvoiceInput";
import { InvoiceType } from "../entities/enums/InvoiceType.enum"
import { ApprovalStatus } from "../entities/enums/ApprovalStatus.enum"
// import {} from "pg"
@Resolver(Invoice)
export class InvoiceResolver {
    @Query(() => [Invoice])
    async getInvoices(
      @Arg("type", () => InvoiceType) type: InvoiceType, 
      @Arg("stage") stage: String 
    ): Promise<Invoice[]> {
      switch(stage){
        case "APPROVE":
            return await Invoice.find({
              where: {
                type,
                status: ApprovalStatus.HEAD
            }})
        case "REJECTED":
            return await Invoice.find({
              where: {
                type,
                status: ApprovalStatus.REJECTED
            }})
        case "FINAL":
            return await Invoice.find({
              where: {
                type,
                status: ApprovalStatus.FINANCE_CORE
            }})
        default: 
            return await Invoice.find({
              where: {
                type,
                
              }
            })
      }
    }
    @Query(() => Invoice)
    async getInvoice(@Arg("_id", () => Int) _id: Number): Promise<Invoice> {

      const invoice = await Invoice.find({
        relations: ["approvals"],
        where: {
          _id
        }
      })
      return invoice[0]
    }

    @Mutation(() => Invoice)
    async submitInvoice(@Arg("data") data: SubmitInvoiceInput): Promise<Invoice> {

        const invoice = await Invoice.create({
          ...data,
          status: ApprovalStatus.FINANCE_CORE,
          image: "hello"
        }).save()
        return invoice
    }

    @Mutation(() => Invoice)
    async resubmitInvoice(
      @Arg("data") data: SubmitInvoiceInput,
      @Arg("_id", () => Int) _id: Number
    ): Promise<Invoice> {
      const invoice = await Invoice.findOne({
        where: {_id}
      })
      const inv = Object.assign(invoice, data)
      await inv.save()
      return inv
    }

    // @Mutation(() => Invoice)
    // async approveInvoice(@Arg("invoiceId") invoiceId: String): Promise<Invoice> {
    //   const invoice = await Invoice.findOne({
    //     where: {_id: invoiceId}
    //   })
    //   const approval = 
    //   return
    // }
}


