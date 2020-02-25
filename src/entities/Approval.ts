import { Entity, BaseEntity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Invoice } from "./Invoice";

@ObjectType()
@Entity()
export class Approval extends BaseEntity {
    
    @PrimaryColumn()
    @Field()
    approverName: string

    @Column()
    @Field()
    approverAvatar: string

    @Column()
    @Field()
    approverAccessLevel: string

    @Column()
    @Field()
    approvedOn: string

    @Column()
    @Field()
    approverEmail: string

    @Column()
    @Field()
    approverMobile: string

    @ManyToOne(() => Invoice, invoice => invoice.approvals)
    invoice: Invoice

}