import { IconCopy, IconDotsVertical, IconPower, IconTowerOff } from "@tabler/icons-react";
import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export type ApiKey = {
  id: number;
  key: string;
  name: string;
  description?: string;
  createdAt: string;
  status: "active" | "revoked";
  lastUsed: string;
};

export const columns: ColumnDef<ApiKey>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div className="font-mono text-sm">#{row.original.id.toString().padStart(3, "0")}</div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => <div className="font-medium">{row.original.name}</div>,
    enableHiding: false,
  },
  {
    accessorKey: "description",
    header: "Descrição",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground max-w-[200px] truncate">
        {row.original.description || "-"}
      </div>
    ),
  },
  {
    accessorKey: "key",
    header: "API Key",
    cell: ({ row }) => (
      <div className="font-mono text-sm text-muted-foreground max-w-[200px] truncate">
        {row.original.key}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Data/Hora da Criação",
    cell: ({ row }) => {
      const d = new Date(row.original.createdAt);
      return (
        <div className="space-y-1">
          <div className="font-medium">{d.toLocaleDateString("pt-BR")}</div>
          <div className="text-sm text-muted-foreground">
            {d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
          </div>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={row.original.status === "active" ? "default" : "secondary"}
        className={
          row.original.status === "active"
            ? "bg-green-100 text-green-800 hover:bg-green-100"
            : "bg-red-100 text-red-800 hover:bg-red-100"
        }
      >
        {row.original.status === "active" ? "Ativo" : "Revogado"}
      </Badge>
    ),
  },
  {
    id: "copy",
    header: () => <div className="text-center">Copiar</div>,
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="size-8"
          onClick={() => {
            navigator.clipboard.writeText(row.original.key);
            toast.success("API Key copiada para a área de transferência!");
          }}
        >
          <IconCopy className="size-4" />
          <span className="sr-only">Copiar API Key</span>
        </Button>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
            size="icon"
          >
            <IconDotsVertical />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem
            onClick={() => {
              toast.info(row.original.status === "active" ? "Desativando API Key..." : "Ativando API Key...");
            }}
          >
            {row.original.status === "active" ? (
              <>
                <IconTowerOff className="mr-2 size-4" /> Desativar
              </>
            ) : (
              <>
                <IconPower className="mr-2 size-4" /> Ativar
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem>Detalhes</DropdownMenuItem>
          <DropdownMenuItem>Renovar</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];


