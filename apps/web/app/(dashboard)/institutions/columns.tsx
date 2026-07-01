"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InstitutionsProps } from "@/constants/types";

import { useAtom } from "jotai";
import { closeAlertAtom, loadingAlertAtom, openAlertAtom } from "@/lib/atoms/alert.atom";
import { toast } from "sonner";

export const columns: ColumnDef<InstitutionsProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "logo",
    header: "Logo",
    cell: ({ row }) => {
      const logo = `${process.env.NEXT_PUBLIC_APP_URL || "http://127.0.0.1:4000" }/${row.original.logo}`;
      return logo ? (
        <img
          src={logo}
          alt={row.original.name}
          className="h-10 w-10 rounded-full object-cover"
        />
      ) : (
        <span className="text-muted-foreground">—</span>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Institution",
  },
  {
    accessorKey: "website",
    header: "Website",
    cell: ({ row }) =>
      row.original.website ? (
        <a
          href={row.original.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Visit
        </a>
      ) : (
        "-"
      ),
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => row.original.address || "-",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          row.original.status
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {row.original.status ? "Active" : "Inactive"}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleDateString(),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const institution = row.original;
      const openAlert = useAtom(openAlertAtom)[1];
      const closeAlert = useAtom(closeAlertAtom)[1];
      const loadingAlert = useAtom(loadingAlertAtom)[1];
      const handleDelete = () => {
        console.log("Delete:", institution.id);
         openAlert({
                title: "Delete Institution",
                type: "Delete",
                message: `Are you sure you want to delete ${institution.name}? This action cannot be undone.`,
                onConfirm: async () => {
                      loadingAlert()
                      const res = await fetch(`/api/institutions/${institution.id}`, {
                          method: "DELETE",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          credentials: "include",
                        });
                        const result = await res.json();
                        console.log("res", result);
                        if(result.err == 0){ 
                          toast.success("Institution deleted successfully.")
                          closeAlert();
                          loadingAlert()
                        }else{
                          toast.error(result.msg)
                          closeAlert();
                          loadingAlert()
                        }
      
                },
              });
      };
      return (
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="secondary"
            onClick={() => console.log("View", institution.id)}
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            onClick={() => console.log("Edit", institution.id)}
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="destructive"
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
];