import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InstitutionModel = runtime.Types.Result.DefaultSelection<Prisma.$InstitutionPayload>;
export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null;
    _min: InstitutionMinAggregateOutputType | null;
    _max: InstitutionMaxAggregateOutputType | null;
};
export type InstitutionMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    logo: string | null;
    website: string | null;
    address: string | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    createdById: string | null;
    updatedById: string | null;
};
export type InstitutionMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    logo: string | null;
    website: string | null;
    address: string | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    createdById: string | null;
    updatedById: string | null;
};
export type InstitutionCountAggregateOutputType = {
    id: number;
    name: number;
    logo: number;
    website: number;
    address: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    createdById: number;
    updatedById: number;
    _all: number;
};
export type InstitutionMinAggregateInputType = {
    id?: true;
    name?: true;
    logo?: true;
    website?: true;
    address?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    createdById?: true;
    updatedById?: true;
};
export type InstitutionMaxAggregateInputType = {
    id?: true;
    name?: true;
    logo?: true;
    website?: true;
    address?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    createdById?: true;
    updatedById?: true;
};
export type InstitutionCountAggregateInputType = {
    id?: true;
    name?: true;
    logo?: true;
    website?: true;
    address?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    createdById?: true;
    updatedById?: true;
    _all?: true;
};
export type InstitutionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstitutionWhereInput;
    orderBy?: Prisma.InstitutionOrderByWithRelationInput | Prisma.InstitutionOrderByWithRelationInput[];
    cursor?: Prisma.InstitutionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InstitutionCountAggregateInputType;
    _min?: InstitutionMinAggregateInputType;
    _max?: InstitutionMaxAggregateInputType;
};
export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
    [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInstitution[P]> : Prisma.GetScalarType<T[P], AggregateInstitution[P]>;
};
export type InstitutionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstitutionWhereInput;
    orderBy?: Prisma.InstitutionOrderByWithAggregationInput | Prisma.InstitutionOrderByWithAggregationInput[];
    by: Prisma.InstitutionScalarFieldEnum[] | Prisma.InstitutionScalarFieldEnum;
    having?: Prisma.InstitutionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InstitutionCountAggregateInputType | true;
    _min?: InstitutionMinAggregateInputType;
    _max?: InstitutionMaxAggregateInputType;
};
export type InstitutionGroupByOutputType = {
    id: string;
    name: string;
    logo: string | null;
    website: string | null;
    address: string | null;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    createdById: string;
    updatedById: string | null;
    _count: InstitutionCountAggregateOutputType | null;
    _min: InstitutionMinAggregateOutputType | null;
    _max: InstitutionMaxAggregateOutputType | null;
};
export type GetInstitutionGroupByPayload<T extends InstitutionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InstitutionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InstitutionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InstitutionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InstitutionGroupByOutputType[P]>;
}>>;
export type InstitutionWhereInput = {
    AND?: Prisma.InstitutionWhereInput | Prisma.InstitutionWhereInput[];
    OR?: Prisma.InstitutionWhereInput[];
    NOT?: Prisma.InstitutionWhereInput | Prisma.InstitutionWhereInput[];
    id?: Prisma.StringFilter<"Institution"> | string;
    name?: Prisma.StringFilter<"Institution"> | string;
    logo?: Prisma.StringNullableFilter<"Institution"> | string | null;
    website?: Prisma.StringNullableFilter<"Institution"> | string | null;
    address?: Prisma.StringNullableFilter<"Institution"> | string | null;
    status?: Prisma.BoolFilter<"Institution"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Institution"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Institution"> | Date | string;
    createdById?: Prisma.StringFilter<"Institution"> | string;
    updatedById?: Prisma.StringNullableFilter<"Institution"> | string | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    updatedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    certifications?: Prisma.CertificationListRelationFilter;
};
export type InstitutionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.UserOrderByWithRelationInput;
    updatedBy?: Prisma.UserOrderByWithRelationInput;
    certifications?: Prisma.CertificationOrderByRelationAggregateInput;
};
export type InstitutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InstitutionWhereInput | Prisma.InstitutionWhereInput[];
    OR?: Prisma.InstitutionWhereInput[];
    NOT?: Prisma.InstitutionWhereInput | Prisma.InstitutionWhereInput[];
    name?: Prisma.StringFilter<"Institution"> | string;
    logo?: Prisma.StringNullableFilter<"Institution"> | string | null;
    website?: Prisma.StringNullableFilter<"Institution"> | string | null;
    address?: Prisma.StringNullableFilter<"Institution"> | string | null;
    status?: Prisma.BoolFilter<"Institution"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Institution"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Institution"> | Date | string;
    createdById?: Prisma.StringFilter<"Institution"> | string;
    updatedById?: Prisma.StringNullableFilter<"Institution"> | string | null;
    createdBy?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    updatedBy?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    certifications?: Prisma.CertificationListRelationFilter;
}, "id">;
export type InstitutionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.InstitutionCountOrderByAggregateInput;
    _max?: Prisma.InstitutionMaxOrderByAggregateInput;
    _min?: Prisma.InstitutionMinOrderByAggregateInput;
};
export type InstitutionScalarWhereWithAggregatesInput = {
    AND?: Prisma.InstitutionScalarWhereWithAggregatesInput | Prisma.InstitutionScalarWhereWithAggregatesInput[];
    OR?: Prisma.InstitutionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InstitutionScalarWhereWithAggregatesInput | Prisma.InstitutionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Institution"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Institution"> | string;
    logo?: Prisma.StringNullableWithAggregatesFilter<"Institution"> | string | null;
    website?: Prisma.StringNullableWithAggregatesFilter<"Institution"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"Institution"> | string | null;
    status?: Prisma.BoolWithAggregatesFilter<"Institution"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Institution"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Institution"> | Date | string;
    createdById?: Prisma.StringWithAggregatesFilter<"Institution"> | string;
    updatedById?: Prisma.StringNullableWithAggregatesFilter<"Institution"> | string | null;
};
export type InstitutionCreateInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutInstitutionsCreatedInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutInstitutionsUpdatedInput;
    certifications?: Prisma.CertificationCreateNestedManyWithoutInstitutionInput;
};
export type InstitutionUncheckedCreateInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById: string;
    updatedById?: string | null;
    certifications?: Prisma.CertificationUncheckedCreateNestedManyWithoutInstitutionInput;
};
export type InstitutionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutInstitutionsCreatedNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutInstitutionsUpdatedNestedInput;
    certifications?: Prisma.CertificationUpdateManyWithoutInstitutionNestedInput;
};
export type InstitutionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifications?: Prisma.CertificationUncheckedUpdateManyWithoutInstitutionNestedInput;
};
export type InstitutionCreateManyInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById: string;
    updatedById?: string | null;
};
export type InstitutionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstitutionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InstitutionListRelationFilter = {
    every?: Prisma.InstitutionWhereInput;
    some?: Prisma.InstitutionWhereInput;
    none?: Prisma.InstitutionWhereInput;
};
export type InstitutionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InstitutionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type InstitutionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type InstitutionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    createdById?: Prisma.SortOrder;
    updatedById?: Prisma.SortOrder;
};
export type InstitutionScalarRelationFilter = {
    is?: Prisma.InstitutionWhereInput;
    isNot?: Prisma.InstitutionWhereInput;
};
export type InstitutionCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.InstitutionCreateWithoutCreatedByInput, Prisma.InstitutionUncheckedCreateWithoutCreatedByInput> | Prisma.InstitutionCreateWithoutCreatedByInput[] | Prisma.InstitutionUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InstitutionCreateOrConnectWithoutCreatedByInput | Prisma.InstitutionCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.InstitutionCreateManyCreatedByInputEnvelope;
    connect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
};
export type InstitutionCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.InstitutionCreateWithoutUpdatedByInput, Prisma.InstitutionUncheckedCreateWithoutUpdatedByInput> | Prisma.InstitutionCreateWithoutUpdatedByInput[] | Prisma.InstitutionUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.InstitutionCreateOrConnectWithoutUpdatedByInput | Prisma.InstitutionCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.InstitutionCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
};
export type InstitutionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.InstitutionCreateWithoutCreatedByInput, Prisma.InstitutionUncheckedCreateWithoutCreatedByInput> | Prisma.InstitutionCreateWithoutCreatedByInput[] | Prisma.InstitutionUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InstitutionCreateOrConnectWithoutCreatedByInput | Prisma.InstitutionCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.InstitutionCreateManyCreatedByInputEnvelope;
    connect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
};
export type InstitutionUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: Prisma.XOR<Prisma.InstitutionCreateWithoutUpdatedByInput, Prisma.InstitutionUncheckedCreateWithoutUpdatedByInput> | Prisma.InstitutionCreateWithoutUpdatedByInput[] | Prisma.InstitutionUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.InstitutionCreateOrConnectWithoutUpdatedByInput | Prisma.InstitutionCreateOrConnectWithoutUpdatedByInput[];
    createMany?: Prisma.InstitutionCreateManyUpdatedByInputEnvelope;
    connect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
};
export type InstitutionUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.InstitutionCreateWithoutCreatedByInput, Prisma.InstitutionUncheckedCreateWithoutCreatedByInput> | Prisma.InstitutionCreateWithoutCreatedByInput[] | Prisma.InstitutionUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InstitutionCreateOrConnectWithoutCreatedByInput | Prisma.InstitutionCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.InstitutionUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.InstitutionUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.InstitutionCreateManyCreatedByInputEnvelope;
    set?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    disconnect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    delete?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    connect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    update?: Prisma.InstitutionUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.InstitutionUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.InstitutionUpdateManyWithWhereWithoutCreatedByInput | Prisma.InstitutionUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.InstitutionScalarWhereInput | Prisma.InstitutionScalarWhereInput[];
};
export type InstitutionUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.InstitutionCreateWithoutUpdatedByInput, Prisma.InstitutionUncheckedCreateWithoutUpdatedByInput> | Prisma.InstitutionCreateWithoutUpdatedByInput[] | Prisma.InstitutionUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.InstitutionCreateOrConnectWithoutUpdatedByInput | Prisma.InstitutionCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.InstitutionUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.InstitutionUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.InstitutionCreateManyUpdatedByInputEnvelope;
    set?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    disconnect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    delete?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    connect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    update?: Prisma.InstitutionUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.InstitutionUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.InstitutionUpdateManyWithWhereWithoutUpdatedByInput | Prisma.InstitutionUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.InstitutionScalarWhereInput | Prisma.InstitutionScalarWhereInput[];
};
export type InstitutionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.InstitutionCreateWithoutCreatedByInput, Prisma.InstitutionUncheckedCreateWithoutCreatedByInput> | Prisma.InstitutionCreateWithoutCreatedByInput[] | Prisma.InstitutionUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.InstitutionCreateOrConnectWithoutCreatedByInput | Prisma.InstitutionCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.InstitutionUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.InstitutionUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.InstitutionCreateManyCreatedByInputEnvelope;
    set?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    disconnect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    delete?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    connect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    update?: Prisma.InstitutionUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.InstitutionUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.InstitutionUpdateManyWithWhereWithoutCreatedByInput | Prisma.InstitutionUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.InstitutionScalarWhereInput | Prisma.InstitutionScalarWhereInput[];
};
export type InstitutionUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: Prisma.XOR<Prisma.InstitutionCreateWithoutUpdatedByInput, Prisma.InstitutionUncheckedCreateWithoutUpdatedByInput> | Prisma.InstitutionCreateWithoutUpdatedByInput[] | Prisma.InstitutionUncheckedCreateWithoutUpdatedByInput[];
    connectOrCreate?: Prisma.InstitutionCreateOrConnectWithoutUpdatedByInput | Prisma.InstitutionCreateOrConnectWithoutUpdatedByInput[];
    upsert?: Prisma.InstitutionUpsertWithWhereUniqueWithoutUpdatedByInput | Prisma.InstitutionUpsertWithWhereUniqueWithoutUpdatedByInput[];
    createMany?: Prisma.InstitutionCreateManyUpdatedByInputEnvelope;
    set?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    disconnect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    delete?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    connect?: Prisma.InstitutionWhereUniqueInput | Prisma.InstitutionWhereUniqueInput[];
    update?: Prisma.InstitutionUpdateWithWhereUniqueWithoutUpdatedByInput | Prisma.InstitutionUpdateWithWhereUniqueWithoutUpdatedByInput[];
    updateMany?: Prisma.InstitutionUpdateManyWithWhereWithoutUpdatedByInput | Prisma.InstitutionUpdateManyWithWhereWithoutUpdatedByInput[];
    deleteMany?: Prisma.InstitutionScalarWhereInput | Prisma.InstitutionScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type InstitutionCreateNestedOneWithoutCertificationsInput = {
    create?: Prisma.XOR<Prisma.InstitutionCreateWithoutCertificationsInput, Prisma.InstitutionUncheckedCreateWithoutCertificationsInput>;
    connectOrCreate?: Prisma.InstitutionCreateOrConnectWithoutCertificationsInput;
    connect?: Prisma.InstitutionWhereUniqueInput;
};
export type InstitutionUpdateOneRequiredWithoutCertificationsNestedInput = {
    create?: Prisma.XOR<Prisma.InstitutionCreateWithoutCertificationsInput, Prisma.InstitutionUncheckedCreateWithoutCertificationsInput>;
    connectOrCreate?: Prisma.InstitutionCreateOrConnectWithoutCertificationsInput;
    upsert?: Prisma.InstitutionUpsertWithoutCertificationsInput;
    connect?: Prisma.InstitutionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InstitutionUpdateToOneWithWhereWithoutCertificationsInput, Prisma.InstitutionUpdateWithoutCertificationsInput>, Prisma.InstitutionUncheckedUpdateWithoutCertificationsInput>;
};
export type InstitutionCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updatedBy?: Prisma.UserCreateNestedOneWithoutInstitutionsUpdatedInput;
    certifications?: Prisma.CertificationCreateNestedManyWithoutInstitutionInput;
};
export type InstitutionUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updatedById?: string | null;
    certifications?: Prisma.CertificationUncheckedCreateNestedManyWithoutInstitutionInput;
};
export type InstitutionCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.InstitutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstitutionCreateWithoutCreatedByInput, Prisma.InstitutionUncheckedCreateWithoutCreatedByInput>;
};
export type InstitutionCreateManyCreatedByInputEnvelope = {
    data: Prisma.InstitutionCreateManyCreatedByInput | Prisma.InstitutionCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type InstitutionCreateWithoutUpdatedByInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutInstitutionsCreatedInput;
    certifications?: Prisma.CertificationCreateNestedManyWithoutInstitutionInput;
};
export type InstitutionUncheckedCreateWithoutUpdatedByInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById: string;
    certifications?: Prisma.CertificationUncheckedCreateNestedManyWithoutInstitutionInput;
};
export type InstitutionCreateOrConnectWithoutUpdatedByInput = {
    where: Prisma.InstitutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstitutionCreateWithoutUpdatedByInput, Prisma.InstitutionUncheckedCreateWithoutUpdatedByInput>;
};
export type InstitutionCreateManyUpdatedByInputEnvelope = {
    data: Prisma.InstitutionCreateManyUpdatedByInput | Prisma.InstitutionCreateManyUpdatedByInput[];
    skipDuplicates?: boolean;
};
export type InstitutionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.InstitutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.InstitutionUpdateWithoutCreatedByInput, Prisma.InstitutionUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.InstitutionCreateWithoutCreatedByInput, Prisma.InstitutionUncheckedCreateWithoutCreatedByInput>;
};
export type InstitutionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.InstitutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.InstitutionUpdateWithoutCreatedByInput, Prisma.InstitutionUncheckedUpdateWithoutCreatedByInput>;
};
export type InstitutionUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.InstitutionScalarWhereInput;
    data: Prisma.XOR<Prisma.InstitutionUpdateManyMutationInput, Prisma.InstitutionUncheckedUpdateManyWithoutCreatedByInput>;
};
export type InstitutionScalarWhereInput = {
    AND?: Prisma.InstitutionScalarWhereInput | Prisma.InstitutionScalarWhereInput[];
    OR?: Prisma.InstitutionScalarWhereInput[];
    NOT?: Prisma.InstitutionScalarWhereInput | Prisma.InstitutionScalarWhereInput[];
    id?: Prisma.StringFilter<"Institution"> | string;
    name?: Prisma.StringFilter<"Institution"> | string;
    logo?: Prisma.StringNullableFilter<"Institution"> | string | null;
    website?: Prisma.StringNullableFilter<"Institution"> | string | null;
    address?: Prisma.StringNullableFilter<"Institution"> | string | null;
    status?: Prisma.BoolFilter<"Institution"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Institution"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Institution"> | Date | string;
    createdById?: Prisma.StringFilter<"Institution"> | string;
    updatedById?: Prisma.StringNullableFilter<"Institution"> | string | null;
};
export type InstitutionUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.InstitutionWhereUniqueInput;
    update: Prisma.XOR<Prisma.InstitutionUpdateWithoutUpdatedByInput, Prisma.InstitutionUncheckedUpdateWithoutUpdatedByInput>;
    create: Prisma.XOR<Prisma.InstitutionCreateWithoutUpdatedByInput, Prisma.InstitutionUncheckedCreateWithoutUpdatedByInput>;
};
export type InstitutionUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: Prisma.InstitutionWhereUniqueInput;
    data: Prisma.XOR<Prisma.InstitutionUpdateWithoutUpdatedByInput, Prisma.InstitutionUncheckedUpdateWithoutUpdatedByInput>;
};
export type InstitutionUpdateManyWithWhereWithoutUpdatedByInput = {
    where: Prisma.InstitutionScalarWhereInput;
    data: Prisma.XOR<Prisma.InstitutionUpdateManyMutationInput, Prisma.InstitutionUncheckedUpdateManyWithoutUpdatedByInput>;
};
export type InstitutionCreateWithoutCertificationsInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: Prisma.UserCreateNestedOneWithoutInstitutionsCreatedInput;
    updatedBy?: Prisma.UserCreateNestedOneWithoutInstitutionsUpdatedInput;
};
export type InstitutionUncheckedCreateWithoutCertificationsInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById: string;
    updatedById?: string | null;
};
export type InstitutionCreateOrConnectWithoutCertificationsInput = {
    where: Prisma.InstitutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstitutionCreateWithoutCertificationsInput, Prisma.InstitutionUncheckedCreateWithoutCertificationsInput>;
};
export type InstitutionUpsertWithoutCertificationsInput = {
    update: Prisma.XOR<Prisma.InstitutionUpdateWithoutCertificationsInput, Prisma.InstitutionUncheckedUpdateWithoutCertificationsInput>;
    create: Prisma.XOR<Prisma.InstitutionCreateWithoutCertificationsInput, Prisma.InstitutionUncheckedCreateWithoutCertificationsInput>;
    where?: Prisma.InstitutionWhereInput;
};
export type InstitutionUpdateToOneWithWhereWithoutCertificationsInput = {
    where?: Prisma.InstitutionWhereInput;
    data: Prisma.XOR<Prisma.InstitutionUpdateWithoutCertificationsInput, Prisma.InstitutionUncheckedUpdateWithoutCertificationsInput>;
};
export type InstitutionUpdateWithoutCertificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutInstitutionsCreatedNestedInput;
    updatedBy?: Prisma.UserUpdateOneWithoutInstitutionsUpdatedNestedInput;
};
export type InstitutionUncheckedUpdateWithoutCertificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InstitutionCreateManyCreatedByInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    updatedById?: string | null;
};
export type InstitutionCreateManyUpdatedByInput = {
    id?: string;
    name: string;
    logo?: string | null;
    website?: string | null;
    address?: string | null;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdById: string;
};
export type InstitutionUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.UserUpdateOneWithoutInstitutionsUpdatedNestedInput;
    certifications?: Prisma.CertificationUpdateManyWithoutInstitutionNestedInput;
};
export type InstitutionUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certifications?: Prisma.CertificationUncheckedUpdateManyWithoutInstitutionNestedInput;
};
export type InstitutionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InstitutionUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.UserUpdateOneRequiredWithoutInstitutionsCreatedNestedInput;
    certifications?: Prisma.CertificationUpdateManyWithoutInstitutionNestedInput;
};
export type InstitutionUncheckedUpdateWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
    certifications?: Prisma.CertificationUncheckedUpdateManyWithoutInstitutionNestedInput;
};
export type InstitutionUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdById?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InstitutionCountOutputType = {
    certifications: number;
};
export type InstitutionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    certifications?: boolean | InstitutionCountOutputTypeCountCertificationsArgs;
};
export type InstitutionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionCountOutputTypeSelect<ExtArgs> | null;
};
export type InstitutionCountOutputTypeCountCertificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificationWhereInput;
};
export type InstitutionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    logo?: boolean;
    website?: boolean;
    address?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Institution$updatedByArgs<ExtArgs>;
    certifications?: boolean | Prisma.Institution$certificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.InstitutionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["institution"]>;
export type InstitutionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    logo?: boolean;
    website?: boolean;
    address?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Institution$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["institution"]>;
export type InstitutionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    logo?: boolean;
    website?: boolean;
    address?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Institution$updatedByArgs<ExtArgs>;
}, ExtArgs["result"]["institution"]>;
export type InstitutionSelectScalar = {
    id?: boolean;
    name?: boolean;
    logo?: boolean;
    website?: boolean;
    address?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    createdById?: boolean;
    updatedById?: boolean;
};
export type InstitutionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "logo" | "website" | "address" | "status" | "createdAt" | "updatedAt" | "createdById" | "updatedById", ExtArgs["result"]["institution"]>;
export type InstitutionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Institution$updatedByArgs<ExtArgs>;
    certifications?: boolean | Prisma.Institution$certificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.InstitutionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InstitutionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Institution$updatedByArgs<ExtArgs>;
};
export type InstitutionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    updatedBy?: boolean | Prisma.Institution$updatedByArgs<ExtArgs>;
};
export type $InstitutionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Institution";
    objects: {
        createdBy: Prisma.$UserPayload<ExtArgs>;
        updatedBy: Prisma.$UserPayload<ExtArgs> | null;
        certifications: Prisma.$CertificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        logo: string | null;
        website: string | null;
        address: string | null;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
        createdById: string;
        updatedById: string | null;
    }, ExtArgs["result"]["institution"]>;
    composites: {};
};
export type InstitutionGetPayload<S extends boolean | null | undefined | InstitutionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InstitutionPayload, S>;
export type InstitutionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InstitutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InstitutionCountAggregateInputType | true;
};
export interface InstitutionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Institution'];
        meta: {
            name: 'Institution';
        };
    };
    findUnique<T extends InstitutionFindUniqueArgs>(args: Prisma.SelectSubset<T, InstitutionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InstitutionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InstitutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InstitutionFindFirstArgs>(args?: Prisma.SelectSubset<T, InstitutionFindFirstArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InstitutionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InstitutionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InstitutionFindManyArgs>(args?: Prisma.SelectSubset<T, InstitutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InstitutionCreateArgs>(args: Prisma.SelectSubset<T, InstitutionCreateArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InstitutionCreateManyArgs>(args?: Prisma.SelectSubset<T, InstitutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InstitutionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InstitutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InstitutionDeleteArgs>(args: Prisma.SelectSubset<T, InstitutionDeleteArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InstitutionUpdateArgs>(args: Prisma.SelectSubset<T, InstitutionUpdateArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InstitutionDeleteManyArgs>(args?: Prisma.SelectSubset<T, InstitutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InstitutionUpdateManyArgs>(args: Prisma.SelectSubset<T, InstitutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InstitutionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InstitutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InstitutionUpsertArgs>(args: Prisma.SelectSubset<T, InstitutionUpsertArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InstitutionCountArgs>(args?: Prisma.Subset<T, InstitutionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InstitutionCountAggregateOutputType> : number>;
    aggregate<T extends InstitutionAggregateArgs>(args: Prisma.Subset<T, InstitutionAggregateArgs>): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>;
    groupBy<T extends InstitutionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InstitutionGroupByArgs['orderBy'];
    } : {
        orderBy?: InstitutionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InstitutionFieldRefs;
}
export interface Prisma__InstitutionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    updatedBy<T extends Prisma.Institution$updatedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Institution$updatedByArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    certifications<T extends Prisma.Institution$certificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Institution$certificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InstitutionFieldRefs {
    readonly id: Prisma.FieldRef<"Institution", 'String'>;
    readonly name: Prisma.FieldRef<"Institution", 'String'>;
    readonly logo: Prisma.FieldRef<"Institution", 'String'>;
    readonly website: Prisma.FieldRef<"Institution", 'String'>;
    readonly address: Prisma.FieldRef<"Institution", 'String'>;
    readonly status: Prisma.FieldRef<"Institution", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Institution", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Institution", 'DateTime'>;
    readonly createdById: Prisma.FieldRef<"Institution", 'String'>;
    readonly updatedById: Prisma.FieldRef<"Institution", 'String'>;
}
export type InstitutionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
    where: Prisma.InstitutionWhereUniqueInput;
};
export type InstitutionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
    where: Prisma.InstitutionWhereUniqueInput;
};
export type InstitutionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
    where?: Prisma.InstitutionWhereInput;
    orderBy?: Prisma.InstitutionOrderByWithRelationInput | Prisma.InstitutionOrderByWithRelationInput[];
    cursor?: Prisma.InstitutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstitutionScalarFieldEnum | Prisma.InstitutionScalarFieldEnum[];
};
export type InstitutionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
    where?: Prisma.InstitutionWhereInput;
    orderBy?: Prisma.InstitutionOrderByWithRelationInput | Prisma.InstitutionOrderByWithRelationInput[];
    cursor?: Prisma.InstitutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstitutionScalarFieldEnum | Prisma.InstitutionScalarFieldEnum[];
};
export type InstitutionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
    where?: Prisma.InstitutionWhereInput;
    orderBy?: Prisma.InstitutionOrderByWithRelationInput | Prisma.InstitutionOrderByWithRelationInput[];
    cursor?: Prisma.InstitutionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstitutionScalarFieldEnum | Prisma.InstitutionScalarFieldEnum[];
};
export type InstitutionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstitutionCreateInput, Prisma.InstitutionUncheckedCreateInput>;
};
export type InstitutionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InstitutionCreateManyInput | Prisma.InstitutionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InstitutionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    data: Prisma.InstitutionCreateManyInput | Prisma.InstitutionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InstitutionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InstitutionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstitutionUpdateInput, Prisma.InstitutionUncheckedUpdateInput>;
    where: Prisma.InstitutionWhereUniqueInput;
};
export type InstitutionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InstitutionUpdateManyMutationInput, Prisma.InstitutionUncheckedUpdateManyInput>;
    where?: Prisma.InstitutionWhereInput;
    limit?: number;
};
export type InstitutionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InstitutionUpdateManyMutationInput, Prisma.InstitutionUncheckedUpdateManyInput>;
    where?: Prisma.InstitutionWhereInput;
    limit?: number;
    include?: Prisma.InstitutionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InstitutionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
    where: Prisma.InstitutionWhereUniqueInput;
    create: Prisma.XOR<Prisma.InstitutionCreateInput, Prisma.InstitutionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InstitutionUpdateInput, Prisma.InstitutionUncheckedUpdateInput>;
};
export type InstitutionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
    where: Prisma.InstitutionWhereUniqueInput;
};
export type InstitutionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InstitutionWhereInput;
    limit?: number;
};
export type Institution$updatedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Institution$certificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificationSelect<ExtArgs> | null;
    omit?: Prisma.CertificationOmit<ExtArgs> | null;
    include?: Prisma.CertificationInclude<ExtArgs> | null;
    where?: Prisma.CertificationWhereInput;
    orderBy?: Prisma.CertificationOrderByWithRelationInput | Prisma.CertificationOrderByWithRelationInput[];
    cursor?: Prisma.CertificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CertificationScalarFieldEnum | Prisma.CertificationScalarFieldEnum[];
};
export type InstitutionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InstitutionSelect<ExtArgs> | null;
    omit?: Prisma.InstitutionOmit<ExtArgs> | null;
    include?: Prisma.InstitutionInclude<ExtArgs> | null;
};
