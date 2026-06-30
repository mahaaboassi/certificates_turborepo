"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { CertificatesProps } from "@/constants/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@repo/ui/badge";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<CertificatesProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "certificateNo",
    header: "Certificate No.",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "holderName",
    header: "Holder",
  },
  {
    accessorKey: "holderEmail",
    header: "Email",
  },
  {
    accessorKey: "institution.name",
    header: "Institution",
    cell: ({ row }) => row.original.institution?.name ?? "-",
  },
  {
    accessorKey: "qrToken",
    header: "QR Token",
    cell: ({ row }) => {
      const token = row.original.qrToken;

      return (
        <span className="font-mono text-sm">
          {token.slice(0, 12)}...
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) =>{
      return <div className="flex items-center">
        { row.original.status == "ACCEPTED" && <Badge size="text-[0.3rem]" status="success" label="ACCEPTED" />}
        { row.original.status == "UNDER_REVIEW" && <Badge size="text-[0.3rem]" status="info" label="UNDER REVIEW" />}
        { row.original.status == "REJECTED" && <Badge size="text-[0.3rem]" status="danger" label="REJECTED" />}
      </div>
    }
  },
  {
    accessorKey: "issuedByUser.name",
    header: "Issued By",
    cell: ({ row }) => row.original.issuedByUser?.name ?? "-",
  },
  {
    accessorKey: "issuedAt",
    header: "Issued At",
    cell: ({ row }) =>
      new Date(row.original.issuedAt).toLocaleDateString(),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const router = useRouter();
      const certificate = row.original;

      const handleView = () => {
        console.log("View:", certificate.id);
        router.push(`/certificate/${certificate.qrToken}`)
      };

      const handleEdit = () => {
        console.log("Edit:", certificate.id);
        // router.push(`/certificates/${certificate.id}/edit`)
      };

      const handleDelete = () => {
        console.log("Delete:", certificate.id);
        // Open confirmation dialog
      };

      return (
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="secondary"
            onClick={handleView}
            title="View"
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={handleEdit}
            title="Edit"
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="destructive"
            onClick={handleDelete}
            title="Delete"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];