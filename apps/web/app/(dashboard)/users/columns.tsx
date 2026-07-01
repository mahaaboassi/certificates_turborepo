"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";

import { UsersProps } from "@/constants/types";
import { Button } from "@/components/ui/button";

import { useAtom } from "jotai";
import { closeAlertAtom, loadingAlertAtom, openAlertAtom } from "@/lib/atoms/alert.atom";
import { toast } from "sonner";

export const columns: ColumnDef<UsersProps>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      const openAlert = useAtom(openAlertAtom)[1];
      const closeAlert = useAtom(closeAlertAtom)[1];
      const loadingAlert = useAtom(loadingAlertAtom)[1];
      const handleEdit = () => {
        console.log("Edit:", user.id);
        // router.push(`/users/${user.id}/edit`)
      };

      const handleDelete = () => {
         openAlert({
                title: "Delete User",
                type: "Delete",
                message: `Are you sure you want to delete ${user.name}? This action cannot be undone.`,
                onConfirm: async () => {
                      loadingAlert()
                      const res = await fetch(`/api/users/${user.id}`, {
                          method: "DELETE",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          credentials: "include",
                        });
                        const result = await res.json();
                        console.log("res", result);
                        if(result.err == 0){ 
                          toast.success("User deleted successfully.")
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