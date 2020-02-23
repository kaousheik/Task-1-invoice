import { Resolver, Query, Arg, Mutation  } from "type-graphql";
import { Invoice } from "../models/Invoice";
import {SubmitInvoiceInput} from "../input/SubmitInvoiceInput"

@Resolver()
export class InvoiceResolver {
    @Query(() => String)
    async hello(){
        return 'hello  World'
    }

    @Query(() => [Invoice], {nullable: true})
    async getInvoices(    
    @Arg("type") type: string,
    @Arg("stage") stage: string,) {
        console.log(stage)
        console.log(type)

        return Invoice.find()
    }

    @Mutation(() => Invoice)
    async submitInvoice(
        @Arg("data", () => SubmitInvoiceInput) data: SubmitInvoiceInput)
    : Promise<Invoice> {
        const i = {...data, uploadedBy: "me", byDept: "fin", image: "dsab"}
        const invoice = await Invoice.create({i}).save()
        console.log(invoice)
        return invoice

    }

    // @Mutation(() => Invoice)
    // async resubmitInvoice(
    //     @Arg("data") data: SubmitInvoiceInput,
    //     @Arg("_id") _id: String

    // ) : Promise<Invoice> {

    //     const invoice
    //     return invoice
    // }

    // @Mutation(() => Invoice)
    // async approveInvoice(
    //     @Arg("invoiceId") invoiceId: String,
    // ): Promise<Invoice> {

    //     return invoice
    // }

    // @Mutation(() => Invoice)
    // async rejectInvoice(
    //     @Arg("invoiceId") invoiceId: String,
    // ): Promise<Invoice> {
    //     const invoice = await Invoice.update({_id: invoiceId}, status: "REJECTED" );
    //     return invoice
    // }

    // @Mutation(() => Invoice)
    // async assignFinManager(
    //     @Arg("userId") userId: String,
    //     @Arg("deptId") deptId: String,
    // ): Promise<Invoice> {
        
    //     return invoice
    // }


} 
