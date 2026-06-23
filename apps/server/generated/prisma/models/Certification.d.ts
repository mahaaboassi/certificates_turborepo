import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CertificationModel = runtime.Types.Result.DefaultSelection<Prisma.$CertificationPayload>;
export type AggregateCertification = {
    _count: CertificationCountAggregateOutputType | null;
    _avg: CertificationAvgAggregateOutputType | null;
    _sum: CertificationSumAggregateOutputType | null;
    _min: CertificationMinAggregateOutputType | null;
    _max: CertificationMaxAggregateOutputType | null;
};
export type CertificationAvgAggregateOutputType = {
    hours: number | null;
};
export type CertificationSumAggregateOutputType = {
    hours: number | null;
};
export type CertificationMinAggregateOutputType = {
    id: string | null;
    institutionId: string | null;
    issuedBy: string | null;
    holderName: string | null;
    holderEmail: string | null;
    title: string | null;
    description: string | null;
    issuedAt: Date | null;
    expiresAt: Date | null;
    grade: string | null;
    hours: number | null;
    status: $Enums.CertificationStatus | null;
    qrToken: string | null;
    qrImage: string | null;
    certificateNo: string | null;
    createdAt: Date | null;
};
export type CertificationMaxAggregateOutputType = {
    id: string | null;
    institutionId: string | null;
    issuedBy: string | null;
    holderName: string | null;
    holderEmail: string | null;
    title: string | null;
    description: string | null;
    issuedAt: Date | null;
    expiresAt: Date | null;
    grade: string | null;
    hours: number | null;
    status: $Enums.CertificationStatus | null;
    qrToken: string | null;
    qrImage: string | null;
    certificateNo: string | null;
    createdAt: Date | null;
};
export type CertificationCountAggregateOutputType = {
    id: number;
    institutionId: number;
    issuedBy: number;
    holderName: number;
    holderEmail: number;
    title: number;
    description: number;
    issuedAt: number;
    expiresAt: number;
    grade: number;
    hours: number;
    status: number;
    qrToken: number;
    qrImage: number;
    certificateNo: number;
    createdAt: number;
    _all: number;
};
export type CertificationAvgAggregateInputType = {
    hours?: true;
};
export type CertificationSumAggregateInputType = {
    hours?: true;
};
export type CertificationMinAggregateInputType = {
    id?: true;
    institutionId?: true;
    issuedBy?: true;
    holderName?: true;
    holderEmail?: true;
    title?: true;
    description?: true;
    issuedAt?: true;
    expiresAt?: true;
    grade?: true;
    hours?: true;
    status?: true;
    qrToken?: true;
    qrImage?: true;
    certificateNo?: true;
    createdAt?: true;
};
export type CertificationMaxAggregateInputType = {
    id?: true;
    institutionId?: true;
    issuedBy?: true;
    holderName?: true;
    holderEmail?: true;
    title?: true;
    description?: true;
    issuedAt?: true;
    expiresAt?: true;
    grade?: true;
    hours?: true;
    status?: true;
    qrToken?: true;
    qrImage?: true;
    certificateNo?: true;
    createdAt?: true;
};
export type CertificationCountAggregateInputType = {
    id?: true;
    institutionId?: true;
    issuedBy?: true;
    holderName?: true;
    holderEmail?: true;
    title?: true;
    description?: true;
    issuedAt?: true;
    expiresAt?: true;
    grade?: true;
    hours?: true;
    status?: true;
    qrToken?: true;
    qrImage?: true;
    certificateNo?: true;
    createdAt?: true;
    _all?: true;
};
export type CertificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificationWhereInput;
    orderBy?: Prisma.CertificationOrderByWithRelationInput | Prisma.CertificationOrderByWithRelationInput[];
    cursor?: Prisma.CertificationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CertificationCountAggregateInputType;
    _avg?: CertificationAvgAggregateInputType;
    _sum?: CertificationSumAggregateInputType;
    _min?: CertificationMinAggregateInputType;
    _max?: CertificationMaxAggregateInputType;
};
export type GetCertificationAggregateType<T extends CertificationAggregateArgs> = {
    [P in keyof T & keyof AggregateCertification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCertification[P]> : Prisma.GetScalarType<T[P], AggregateCertification[P]>;
};
export type CertificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificationWhereInput;
    orderBy?: Prisma.CertificationOrderByWithAggregationInput | Prisma.CertificationOrderByWithAggregationInput[];
    by: Prisma.CertificationScalarFieldEnum[] | Prisma.CertificationScalarFieldEnum;
    having?: Prisma.CertificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CertificationCountAggregateInputType | true;
    _avg?: CertificationAvgAggregateInputType;
    _sum?: CertificationSumAggregateInputType;
    _min?: CertificationMinAggregateInputType;
    _max?: CertificationMaxAggregateInputType;
};
export type CertificationGroupByOutputType = {
    id: string;
    institutionId: string;
    issuedBy: string;
    holderName: string;
    holderEmail: string;
    title: string;
    description: string | null;
    issuedAt: Date;
    expiresAt: Date | null;
    grade: string | null;
    hours: number | null;
    status: $Enums.CertificationStatus;
    qrToken: string;
    qrImage: string | null;
    certificateNo: string;
    createdAt: Date;
    _count: CertificationCountAggregateOutputType | null;
    _avg: CertificationAvgAggregateOutputType | null;
    _sum: CertificationSumAggregateOutputType | null;
    _min: CertificationMinAggregateOutputType | null;
    _max: CertificationMaxAggregateOutputType | null;
};
export type GetCertificationGroupByPayload<T extends CertificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CertificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CertificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CertificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CertificationGroupByOutputType[P]>;
}>>;
export type CertificationWhereInput = {
    AND?: Prisma.CertificationWhereInput | Prisma.CertificationWhereInput[];
    OR?: Prisma.CertificationWhereInput[];
    NOT?: Prisma.CertificationWhereInput | Prisma.CertificationWhereInput[];
    id?: Prisma.StringFilter<"Certification"> | string;
    institutionId?: Prisma.StringFilter<"Certification"> | string;
    issuedBy?: Prisma.StringFilter<"Certification"> | string;
    holderName?: Prisma.StringFilter<"Certification"> | string;
    holderEmail?: Prisma.StringFilter<"Certification"> | string;
    title?: Prisma.StringFilter<"Certification"> | string;
    description?: Prisma.StringNullableFilter<"Certification"> | string | null;
    issuedAt?: Prisma.DateTimeFilter<"Certification"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"Certification"> | Date | string | null;
    grade?: Prisma.StringNullableFilter<"Certification"> | string | null;
    hours?: Prisma.IntNullableFilter<"Certification"> | number | null;
    status?: Prisma.EnumCertificationStatusFilter<"Certification"> | $Enums.CertificationStatus;
    qrToken?: Prisma.StringFilter<"Certification"> | string;
    qrImage?: Prisma.StringNullableFilter<"Certification"> | string | null;
    certificateNo?: Prisma.StringFilter<"Certification"> | string;
    createdAt?: Prisma.DateTimeFilter<"Certification"> | Date | string;
    institution?: Prisma.XOR<Prisma.InstitutionScalarRelationFilter, Prisma.InstitutionWhereInput>;
};
export type CertificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    issuedBy?: Prisma.SortOrder;
    holderName?: Prisma.SortOrder;
    holderEmail?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    grade?: Prisma.SortOrderInput | Prisma.SortOrder;
    hours?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    qrToken?: Prisma.SortOrder;
    qrImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    certificateNo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    institution?: Prisma.InstitutionOrderByWithRelationInput;
};
export type CertificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    qrToken?: string;
    certificateNo?: string;
    AND?: Prisma.CertificationWhereInput | Prisma.CertificationWhereInput[];
    OR?: Prisma.CertificationWhereInput[];
    NOT?: Prisma.CertificationWhereInput | Prisma.CertificationWhereInput[];
    institutionId?: Prisma.StringFilter<"Certification"> | string;
    issuedBy?: Prisma.StringFilter<"Certification"> | string;
    holderName?: Prisma.StringFilter<"Certification"> | string;
    holderEmail?: Prisma.StringFilter<"Certification"> | string;
    title?: Prisma.StringFilter<"Certification"> | string;
    description?: Prisma.StringNullableFilter<"Certification"> | string | null;
    issuedAt?: Prisma.DateTimeFilter<"Certification"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"Certification"> | Date | string | null;
    grade?: Prisma.StringNullableFilter<"Certification"> | string | null;
    hours?: Prisma.IntNullableFilter<"Certification"> | number | null;
    status?: Prisma.EnumCertificationStatusFilter<"Certification"> | $Enums.CertificationStatus;
    qrImage?: Prisma.StringNullableFilter<"Certification"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Certification"> | Date | string;
    institution?: Prisma.XOR<Prisma.InstitutionScalarRelationFilter, Prisma.InstitutionWhereInput>;
}, "id" | "qrToken" | "certificateNo">;
export type CertificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    issuedBy?: Prisma.SortOrder;
    holderName?: Prisma.SortOrder;
    holderEmail?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    grade?: Prisma.SortOrderInput | Prisma.SortOrder;
    hours?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    qrToken?: Prisma.SortOrder;
    qrImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    certificateNo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CertificationCountOrderByAggregateInput;
    _avg?: Prisma.CertificationAvgOrderByAggregateInput;
    _max?: Prisma.CertificationMaxOrderByAggregateInput;
    _min?: Prisma.CertificationMinOrderByAggregateInput;
    _sum?: Prisma.CertificationSumOrderByAggregateInput;
};
export type CertificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.CertificationScalarWhereWithAggregatesInput | Prisma.CertificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.CertificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CertificationScalarWhereWithAggregatesInput | Prisma.CertificationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Certification"> | string;
    institutionId?: Prisma.StringWithAggregatesFilter<"Certification"> | string;
    issuedBy?: Prisma.StringWithAggregatesFilter<"Certification"> | string;
    holderName?: Prisma.StringWithAggregatesFilter<"Certification"> | string;
    holderEmail?: Prisma.StringWithAggregatesFilter<"Certification"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Certification"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Certification"> | string | null;
    issuedAt?: Prisma.DateTimeWithAggregatesFilter<"Certification"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Certification"> | Date | string | null;
    grade?: Prisma.StringNullableWithAggregatesFilter<"Certification"> | string | null;
    hours?: Prisma.IntNullableWithAggregatesFilter<"Certification"> | number | null;
    status?: Prisma.EnumCertificationStatusWithAggregatesFilter<"Certification"> | $Enums.CertificationStatus;
    qrToken?: Prisma.StringWithAggregatesFilter<"Certification"> | string;
    qrImage?: Prisma.StringNullableWithAggregatesFilter<"Certification"> | string | null;
    certificateNo?: Prisma.StringWithAggregatesFilter<"Certification"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Certification"> | Date | string;
};
export type CertificationCreateInput = {
    id?: string;
    issuedBy: string;
    holderName: string;
    holderEmail: string;
    title: string;
    description?: string | null;
    issuedAt: Date | string;
    expiresAt?: Date | string | null;
    grade?: string | null;
    hours?: number | null;
    status: $Enums.CertificationStatus;
    qrToken: string;
    qrImage?: string | null;
    certificateNo: string;
    createdAt?: Date | string;
    institution: Prisma.InstitutionCreateNestedOneWithoutCertificationsInput;
};
export type CertificationUncheckedCreateInput = {
    id?: string;
    institutionId: string;
    issuedBy: string;
    holderName: string;
    holderEmail: string;
    title: string;
    description?: string | null;
    issuedAt: Date | string;
    expiresAt?: Date | string | null;
    grade?: string | null;
    hours?: number | null;
    status: $Enums.CertificationStatus;
    qrToken: string;
    qrImage?: string | null;
    certificateNo: string;
    createdAt?: Date | string;
};
export type CertificationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    qrImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateNo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    institution?: Prisma.InstitutionUpdateOneRequiredWithoutCertificationsNestedInput;
};
export type CertificationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionId?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    qrImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateNo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificationCreateManyInput = {
    id?: string;
    institutionId: string;
    issuedBy: string;
    holderName: string;
    holderEmail: string;
    title: string;
    description?: string | null;
    issuedAt: Date | string;
    expiresAt?: Date | string | null;
    grade?: string | null;
    hours?: number | null;
    status: $Enums.CertificationStatus;
    qrToken: string;
    qrImage?: string | null;
    certificateNo: string;
    createdAt?: Date | string;
};
export type CertificationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    qrImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateNo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    institutionId?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    qrImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateNo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificationListRelationFilter = {
    every?: Prisma.CertificationWhereInput;
    some?: Prisma.CertificationWhereInput;
    none?: Prisma.CertificationWhereInput;
};
export type CertificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CertificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    issuedBy?: Prisma.SortOrder;
    holderName?: Prisma.SortOrder;
    holderEmail?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    qrToken?: Prisma.SortOrder;
    qrImage?: Prisma.SortOrder;
    certificateNo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CertificationAvgOrderByAggregateInput = {
    hours?: Prisma.SortOrder;
};
export type CertificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    issuedBy?: Prisma.SortOrder;
    holderName?: Prisma.SortOrder;
    holderEmail?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    qrToken?: Prisma.SortOrder;
    qrImage?: Prisma.SortOrder;
    certificateNo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CertificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    institutionId?: Prisma.SortOrder;
    issuedBy?: Prisma.SortOrder;
    holderName?: Prisma.SortOrder;
    holderEmail?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    hours?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    qrToken?: Prisma.SortOrder;
    qrImage?: Prisma.SortOrder;
    certificateNo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CertificationSumOrderByAggregateInput = {
    hours?: Prisma.SortOrder;
};
export type CertificationCreateNestedManyWithoutInstitutionInput = {
    create?: Prisma.XOR<Prisma.CertificationCreateWithoutInstitutionInput, Prisma.CertificationUncheckedCreateWithoutInstitutionInput> | Prisma.CertificationCreateWithoutInstitutionInput[] | Prisma.CertificationUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: Prisma.CertificationCreateOrConnectWithoutInstitutionInput | Prisma.CertificationCreateOrConnectWithoutInstitutionInput[];
    createMany?: Prisma.CertificationCreateManyInstitutionInputEnvelope;
    connect?: Prisma.CertificationWhereUniqueInput | Prisma.CertificationWhereUniqueInput[];
};
export type CertificationUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: Prisma.XOR<Prisma.CertificationCreateWithoutInstitutionInput, Prisma.CertificationUncheckedCreateWithoutInstitutionInput> | Prisma.CertificationCreateWithoutInstitutionInput[] | Prisma.CertificationUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: Prisma.CertificationCreateOrConnectWithoutInstitutionInput | Prisma.CertificationCreateOrConnectWithoutInstitutionInput[];
    createMany?: Prisma.CertificationCreateManyInstitutionInputEnvelope;
    connect?: Prisma.CertificationWhereUniqueInput | Prisma.CertificationWhereUniqueInput[];
};
export type CertificationUpdateManyWithoutInstitutionNestedInput = {
    create?: Prisma.XOR<Prisma.CertificationCreateWithoutInstitutionInput, Prisma.CertificationUncheckedCreateWithoutInstitutionInput> | Prisma.CertificationCreateWithoutInstitutionInput[] | Prisma.CertificationUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: Prisma.CertificationCreateOrConnectWithoutInstitutionInput | Prisma.CertificationCreateOrConnectWithoutInstitutionInput[];
    upsert?: Prisma.CertificationUpsertWithWhereUniqueWithoutInstitutionInput | Prisma.CertificationUpsertWithWhereUniqueWithoutInstitutionInput[];
    createMany?: Prisma.CertificationCreateManyInstitutionInputEnvelope;
    set?: Prisma.CertificationWhereUniqueInput | Prisma.CertificationWhereUniqueInput[];
    disconnect?: Prisma.CertificationWhereUniqueInput | Prisma.CertificationWhereUniqueInput[];
    delete?: Prisma.CertificationWhereUniqueInput | Prisma.CertificationWhereUniqueInput[];
    connect?: Prisma.CertificationWhereUniqueInput | Prisma.CertificationWhereUniqueInput[];
    update?: Prisma.CertificationUpdateWithWhereUniqueWithoutInstitutionInput | Prisma.CertificationUpdateWithWhereUniqueWithoutInstitutionInput[];
    updateMany?: Prisma.CertificationUpdateManyWithWhereWithoutInstitutionInput | Prisma.CertificationUpdateManyWithWhereWithoutInstitutionInput[];
    deleteMany?: Prisma.CertificationScalarWhereInput | Prisma.CertificationScalarWhereInput[];
};
export type CertificationUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: Prisma.XOR<Prisma.CertificationCreateWithoutInstitutionInput, Prisma.CertificationUncheckedCreateWithoutInstitutionInput> | Prisma.CertificationCreateWithoutInstitutionInput[] | Prisma.CertificationUncheckedCreateWithoutInstitutionInput[];
    connectOrCreate?: Prisma.CertificationCreateOrConnectWithoutInstitutionInput | Prisma.CertificationCreateOrConnectWithoutInstitutionInput[];
    upsert?: Prisma.CertificationUpsertWithWhereUniqueWithoutInstitutionInput | Prisma.CertificationUpsertWithWhereUniqueWithoutInstitutionInput[];
    createMany?: Prisma.CertificationCreateManyInstitutionInputEnvelope;
    set?: Prisma.CertificationWhereUniqueInput | Prisma.CertificationWhereUniqueInput[];
    disconnect?: Prisma.CertificationWhereUniqueInput | Prisma.CertificationWhereUniqueInput[];
    delete?: Prisma.CertificationWhereUniqueInput | Prisma.CertificationWhereUniqueInput[];
    connect?: Prisma.CertificationWhereUniqueInput | Prisma.CertificationWhereUniqueInput[];
    update?: Prisma.CertificationUpdateWithWhereUniqueWithoutInstitutionInput | Prisma.CertificationUpdateWithWhereUniqueWithoutInstitutionInput[];
    updateMany?: Prisma.CertificationUpdateManyWithWhereWithoutInstitutionInput | Prisma.CertificationUpdateManyWithWhereWithoutInstitutionInput[];
    deleteMany?: Prisma.CertificationScalarWhereInput | Prisma.CertificationScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumCertificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.CertificationStatus;
};
export type CertificationCreateWithoutInstitutionInput = {
    id?: string;
    issuedBy: string;
    holderName: string;
    holderEmail: string;
    title: string;
    description?: string | null;
    issuedAt: Date | string;
    expiresAt?: Date | string | null;
    grade?: string | null;
    hours?: number | null;
    status: $Enums.CertificationStatus;
    qrToken: string;
    qrImage?: string | null;
    certificateNo: string;
    createdAt?: Date | string;
};
export type CertificationUncheckedCreateWithoutInstitutionInput = {
    id?: string;
    issuedBy: string;
    holderName: string;
    holderEmail: string;
    title: string;
    description?: string | null;
    issuedAt: Date | string;
    expiresAt?: Date | string | null;
    grade?: string | null;
    hours?: number | null;
    status: $Enums.CertificationStatus;
    qrToken: string;
    qrImage?: string | null;
    certificateNo: string;
    createdAt?: Date | string;
};
export type CertificationCreateOrConnectWithoutInstitutionInput = {
    where: Prisma.CertificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CertificationCreateWithoutInstitutionInput, Prisma.CertificationUncheckedCreateWithoutInstitutionInput>;
};
export type CertificationCreateManyInstitutionInputEnvelope = {
    data: Prisma.CertificationCreateManyInstitutionInput | Prisma.CertificationCreateManyInstitutionInput[];
    skipDuplicates?: boolean;
};
export type CertificationUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: Prisma.CertificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CertificationUpdateWithoutInstitutionInput, Prisma.CertificationUncheckedUpdateWithoutInstitutionInput>;
    create: Prisma.XOR<Prisma.CertificationCreateWithoutInstitutionInput, Prisma.CertificationUncheckedCreateWithoutInstitutionInput>;
};
export type CertificationUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: Prisma.CertificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CertificationUpdateWithoutInstitutionInput, Prisma.CertificationUncheckedUpdateWithoutInstitutionInput>;
};
export type CertificationUpdateManyWithWhereWithoutInstitutionInput = {
    where: Prisma.CertificationScalarWhereInput;
    data: Prisma.XOR<Prisma.CertificationUpdateManyMutationInput, Prisma.CertificationUncheckedUpdateManyWithoutInstitutionInput>;
};
export type CertificationScalarWhereInput = {
    AND?: Prisma.CertificationScalarWhereInput | Prisma.CertificationScalarWhereInput[];
    OR?: Prisma.CertificationScalarWhereInput[];
    NOT?: Prisma.CertificationScalarWhereInput | Prisma.CertificationScalarWhereInput[];
    id?: Prisma.StringFilter<"Certification"> | string;
    institutionId?: Prisma.StringFilter<"Certification"> | string;
    issuedBy?: Prisma.StringFilter<"Certification"> | string;
    holderName?: Prisma.StringFilter<"Certification"> | string;
    holderEmail?: Prisma.StringFilter<"Certification"> | string;
    title?: Prisma.StringFilter<"Certification"> | string;
    description?: Prisma.StringNullableFilter<"Certification"> | string | null;
    issuedAt?: Prisma.DateTimeFilter<"Certification"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"Certification"> | Date | string | null;
    grade?: Prisma.StringNullableFilter<"Certification"> | string | null;
    hours?: Prisma.IntNullableFilter<"Certification"> | number | null;
    status?: Prisma.EnumCertificationStatusFilter<"Certification"> | $Enums.CertificationStatus;
    qrToken?: Prisma.StringFilter<"Certification"> | string;
    qrImage?: Prisma.StringNullableFilter<"Certification"> | string | null;
    certificateNo?: Prisma.StringFilter<"Certification"> | string;
    createdAt?: Prisma.DateTimeFilter<"Certification"> | Date | string;
};
export type CertificationCreateManyInstitutionInput = {
    id?: string;
    issuedBy: string;
    holderName: string;
    holderEmail: string;
    title: string;
    description?: string | null;
    issuedAt: Date | string;
    expiresAt?: Date | string | null;
    grade?: string | null;
    hours?: number | null;
    status: $Enums.CertificationStatus;
    qrToken: string;
    qrImage?: string | null;
    certificateNo: string;
    createdAt?: Date | string;
};
export type CertificationUpdateWithoutInstitutionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    qrImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateNo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificationUncheckedUpdateWithoutInstitutionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    qrImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateNo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificationUncheckedUpdateManyWithoutInstitutionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    issuedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    holderName?: Prisma.StringFieldUpdateOperationsInput | string;
    holderEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    issuedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hours?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumCertificationStatusFieldUpdateOperationsInput | $Enums.CertificationStatus;
    qrToken?: Prisma.StringFieldUpdateOperationsInput | string;
    qrImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certificateNo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CertificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    institutionId?: boolean;
    issuedBy?: boolean;
    holderName?: boolean;
    holderEmail?: boolean;
    title?: boolean;
    description?: boolean;
    issuedAt?: boolean;
    expiresAt?: boolean;
    grade?: boolean;
    hours?: boolean;
    status?: boolean;
    qrToken?: boolean;
    qrImage?: boolean;
    certificateNo?: boolean;
    createdAt?: boolean;
    institution?: boolean | Prisma.InstitutionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["certification"]>;
export type CertificationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    institutionId?: boolean;
    issuedBy?: boolean;
    holderName?: boolean;
    holderEmail?: boolean;
    title?: boolean;
    description?: boolean;
    issuedAt?: boolean;
    expiresAt?: boolean;
    grade?: boolean;
    hours?: boolean;
    status?: boolean;
    qrToken?: boolean;
    qrImage?: boolean;
    certificateNo?: boolean;
    createdAt?: boolean;
    institution?: boolean | Prisma.InstitutionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["certification"]>;
export type CertificationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    institutionId?: boolean;
    issuedBy?: boolean;
    holderName?: boolean;
    holderEmail?: boolean;
    title?: boolean;
    description?: boolean;
    issuedAt?: boolean;
    expiresAt?: boolean;
    grade?: boolean;
    hours?: boolean;
    status?: boolean;
    qrToken?: boolean;
    qrImage?: boolean;
    certificateNo?: boolean;
    createdAt?: boolean;
    institution?: boolean | Prisma.InstitutionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["certification"]>;
export type CertificationSelectScalar = {
    id?: boolean;
    institutionId?: boolean;
    issuedBy?: boolean;
    holderName?: boolean;
    holderEmail?: boolean;
    title?: boolean;
    description?: boolean;
    issuedAt?: boolean;
    expiresAt?: boolean;
    grade?: boolean;
    hours?: boolean;
    status?: boolean;
    qrToken?: boolean;
    qrImage?: boolean;
    certificateNo?: boolean;
    createdAt?: boolean;
};
export type CertificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "institutionId" | "issuedBy" | "holderName" | "holderEmail" | "title" | "description" | "issuedAt" | "expiresAt" | "grade" | "hours" | "status" | "qrToken" | "qrImage" | "certificateNo" | "createdAt", ExtArgs["result"]["certification"]>;
export type CertificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    institution?: boolean | Prisma.InstitutionDefaultArgs<ExtArgs>;
};
export type CertificationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    institution?: boolean | Prisma.InstitutionDefaultArgs<ExtArgs>;
};
export type CertificationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    institution?: boolean | Prisma.InstitutionDefaultArgs<ExtArgs>;
};
export type $CertificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Certification";
    objects: {
        institution: Prisma.$InstitutionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        institutionId: string;
        issuedBy: string;
        holderName: string;
        holderEmail: string;
        title: string;
        description: string | null;
        issuedAt: Date;
        expiresAt: Date | null;
        grade: string | null;
        hours: number | null;
        status: $Enums.CertificationStatus;
        qrToken: string;
        qrImage: string | null;
        certificateNo: string;
        createdAt: Date;
    }, ExtArgs["result"]["certification"]>;
    composites: {};
};
export type CertificationGetPayload<S extends boolean | null | undefined | CertificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CertificationPayload, S>;
export type CertificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CertificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CertificationCountAggregateInputType | true;
};
export interface CertificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Certification'];
        meta: {
            name: 'Certification';
        };
    };
    findUnique<T extends CertificationFindUniqueArgs>(args: Prisma.SelectSubset<T, CertificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CertificationClient<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CertificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CertificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CertificationClient<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CertificationFindFirstArgs>(args?: Prisma.SelectSubset<T, CertificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__CertificationClient<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CertificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CertificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CertificationClient<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CertificationFindManyArgs>(args?: Prisma.SelectSubset<T, CertificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CertificationCreateArgs>(args: Prisma.SelectSubset<T, CertificationCreateArgs<ExtArgs>>): Prisma.Prisma__CertificationClient<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CertificationCreateManyArgs>(args?: Prisma.SelectSubset<T, CertificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CertificationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CertificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CertificationDeleteArgs>(args: Prisma.SelectSubset<T, CertificationDeleteArgs<ExtArgs>>): Prisma.Prisma__CertificationClient<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CertificationUpdateArgs>(args: Prisma.SelectSubset<T, CertificationUpdateArgs<ExtArgs>>): Prisma.Prisma__CertificationClient<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CertificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, CertificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CertificationUpdateManyArgs>(args: Prisma.SelectSubset<T, CertificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CertificationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CertificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CertificationUpsertArgs>(args: Prisma.SelectSubset<T, CertificationUpsertArgs<ExtArgs>>): Prisma.Prisma__CertificationClient<runtime.Types.Result.GetResult<Prisma.$CertificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CertificationCountArgs>(args?: Prisma.Subset<T, CertificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CertificationCountAggregateOutputType> : number>;
    aggregate<T extends CertificationAggregateArgs>(args: Prisma.Subset<T, CertificationAggregateArgs>): Prisma.PrismaPromise<GetCertificationAggregateType<T>>;
    groupBy<T extends CertificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CertificationGroupByArgs['orderBy'];
    } : {
        orderBy?: CertificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CertificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CertificationFieldRefs;
}
export interface Prisma__CertificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    institution<T extends Prisma.InstitutionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InstitutionDefaultArgs<ExtArgs>>): Prisma.Prisma__InstitutionClient<runtime.Types.Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CertificationFieldRefs {
    readonly id: Prisma.FieldRef<"Certification", 'String'>;
    readonly institutionId: Prisma.FieldRef<"Certification", 'String'>;
    readonly issuedBy: Prisma.FieldRef<"Certification", 'String'>;
    readonly holderName: Prisma.FieldRef<"Certification", 'String'>;
    readonly holderEmail: Prisma.FieldRef<"Certification", 'String'>;
    readonly title: Prisma.FieldRef<"Certification", 'String'>;
    readonly description: Prisma.FieldRef<"Certification", 'String'>;
    readonly issuedAt: Prisma.FieldRef<"Certification", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"Certification", 'DateTime'>;
    readonly grade: Prisma.FieldRef<"Certification", 'String'>;
    readonly hours: Prisma.FieldRef<"Certification", 'Int'>;
    readonly status: Prisma.FieldRef<"Certification", 'CertificationStatus'>;
    readonly qrToken: Prisma.FieldRef<"Certification", 'String'>;
    readonly qrImage: Prisma.FieldRef<"Certification", 'String'>;
    readonly certificateNo: Prisma.FieldRef<"Certification", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Certification", 'DateTime'>;
}
export type CertificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificationSelect<ExtArgs> | null;
    omit?: Prisma.CertificationOmit<ExtArgs> | null;
    include?: Prisma.CertificationInclude<ExtArgs> | null;
    where: Prisma.CertificationWhereUniqueInput;
};
export type CertificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificationSelect<ExtArgs> | null;
    omit?: Prisma.CertificationOmit<ExtArgs> | null;
    include?: Prisma.CertificationInclude<ExtArgs> | null;
    where: Prisma.CertificationWhereUniqueInput;
};
export type CertificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CertificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CertificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CertificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificationSelect<ExtArgs> | null;
    omit?: Prisma.CertificationOmit<ExtArgs> | null;
    include?: Prisma.CertificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CertificationCreateInput, Prisma.CertificationUncheckedCreateInput>;
};
export type CertificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CertificationCreateManyInput | Prisma.CertificationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CertificationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CertificationOmit<ExtArgs> | null;
    data: Prisma.CertificationCreateManyInput | Prisma.CertificationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CertificationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CertificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificationSelect<ExtArgs> | null;
    omit?: Prisma.CertificationOmit<ExtArgs> | null;
    include?: Prisma.CertificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CertificationUpdateInput, Prisma.CertificationUncheckedUpdateInput>;
    where: Prisma.CertificationWhereUniqueInput;
};
export type CertificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CertificationUpdateManyMutationInput, Prisma.CertificationUncheckedUpdateManyInput>;
    where?: Prisma.CertificationWhereInput;
    limit?: number;
};
export type CertificationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CertificationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CertificationUpdateManyMutationInput, Prisma.CertificationUncheckedUpdateManyInput>;
    where?: Prisma.CertificationWhereInput;
    limit?: number;
    include?: Prisma.CertificationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CertificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificationSelect<ExtArgs> | null;
    omit?: Prisma.CertificationOmit<ExtArgs> | null;
    include?: Prisma.CertificationInclude<ExtArgs> | null;
    where: Prisma.CertificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CertificationCreateInput, Prisma.CertificationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CertificationUpdateInput, Prisma.CertificationUncheckedUpdateInput>;
};
export type CertificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificationSelect<ExtArgs> | null;
    omit?: Prisma.CertificationOmit<ExtArgs> | null;
    include?: Prisma.CertificationInclude<ExtArgs> | null;
    where: Prisma.CertificationWhereUniqueInput;
};
export type CertificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CertificationWhereInput;
    limit?: number;
};
export type CertificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CertificationSelect<ExtArgs> | null;
    omit?: Prisma.CertificationOmit<ExtArgs> | null;
    include?: Prisma.CertificationInclude<ExtArgs> | null;
};
