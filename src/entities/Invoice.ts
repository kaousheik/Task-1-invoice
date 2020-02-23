import { ObjectType, Field, Int } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Approval } from "./Approval"
import { ApprovalStatus } from "./enums/ApprovalStatus.enum";
import { InvoiceType } from "./enums/InvoiceType.enum"

@ObjectType()
@Entity()
export class Invoice extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    _id: number;

    @Field()
    @Column()
    title: string;

    @Column()
    @Field()
    number: string

    @Field()
    @Column()
    vendor: string;

    @Column()
    @Field()
    gstNumber: string

    @Column()
    @Field()
    amount: string

    @Column()
    @Field()
    purpose: string

    @Column()
    @Field(() => ApprovalStatus)
    status: ApprovalStatus

    @Column()
    @Field(() => InvoiceType)
    type: InvoiceType

    @Column()
    @Field()
    image: string

    @Column({nullable: true})
    @Field({nullable: true})
    accountName?: string

    @Column({nullable: true})
    @Field({nullable: true})
    accountNumber?: string

    @Column({nullable: true})
    @Field({nullable: true})
    ifsc?: string

    @Column({nullable: true})
    @Field({nullable: true})
    bankDetails?: string

    @Column({nullable: true})
    @Field({nullable: true})
    advanceAmount?: string

    @Column({nullable: true})
    @Field({nullable: true})
    pendingAmount?: string

    @Field(() => [Approval], {nullable: true})
    @OneToMany(() => Approval, approval => approval.invoice)
    approvals?: Approval[]
}