import { IconDotsVertical } from "@tabler/icons-react";
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

export type ApiLog = {
  id: number;
  date: string;
  api: string; // ocr | recognition
  count: number;
};

export const columns: ColumnDef<ApiLog>[] = [
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
    accessorKey: "date",
    header: "Data e Hora",
    cell: ({ row }) => {
      const d = new Date(row.original.date);
      return (
        <div className="space-y-1">
          <div className="font-medium">{d.toLocaleDateString("pt-BR")}</div>
          <div className="text-sm text-muted-foreground">
            {d.toLocaleTimeString("pt-BR", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </div>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "api",
    header: "API",
    cell: ({ row }) => (
      <div className="w-32">
        <Badge
          variant="outline"
          className="text-muted-foreground px-1.5 capitalize"
        >
          {row.original.api}
        </Badge>
      </div>
    ),
  },
  {
    accessorKey: "count",
    header: () => <div className="w-full text-right">Acessos</div>,
    cell: ({ row }) => (
      <div className="w-full text-right">
        {row.original.count.toLocaleString("pt-BR")}
      </div>
    ),
  },
  {
    id: "actions",
    cell: () => (
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
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>Detalhes</DropdownMenuItem>
          <DropdownMenuItem>Copiar</DropdownMenuItem>
          <DropdownMenuItem>Favoritar</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
