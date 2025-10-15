import { createFileRoute } from "@tanstack/react-router";
import { SectionCards } from "@/components/app/dashboard/cards";
import { ChartAreaInteractive } from "@/components/app/dashboard/chart-area-interactive";
import { DataTable as DashboardDataTable } from "@/components/app/dashboard/data-table/data-table";
import type { ApiLog } from "@/components/app/dashboard/data-table/columns";
import logs from "@/data/api-logs.json";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Route = createFileRoute("/app/dashboard")({
  component: Dashboard,
});

type ApiLogEntry = {
  id: number;
  date?: string;
  dataHora?: string;
  api: "ocr" | "recognition";
  count?: number;
};

function Dashboard() {
  const typedLogs = logs as ApiLogEntry[];
  // Deriva métricas a partir dos logs
  const ocrCount = typedLogs
    .filter((l) => l.api === "ocr")
    .reduce((acc, l) => acc + (l.count ?? 1), 0);
  const recognitionCount = typedLogs
    .filter((l) => l.api === "recognition")
    .reduce((acc, l) => acc + (l.count ?? 1), 0);
  const totalCount = ocrCount + recognitionCount;

  // Exemplo de plano atual e limite (poderia vir do backend)
  const planoAtual = "Plano Pro";
  const limitePlano = 10000; // requisições/mês
  const utilizacaoPlanoPercent = Math.min(
    100,
    (totalCount / limitePlano) * 100
  );

  // Series para o gráfico (agrega por dia)
  const byDay = new Map<string, { ocr: number; recognition: number }>();
  for (const log of typedLogs) {
    const key = (log.date ||
      new Date(log.dataHora || "").toISOString().slice(0, 10)) as string;
    const entry = byDay.get(key) || { ocr: 0, recognition: 0 };
    if (log.api === "ocr") entry.ocr += log.count ?? 1;
    else if (log.api === "recognition") entry.recognition += log.count ?? 1;
    byDay.set(key, entry);
  }
  const chartSeries = Array.from(byDay.entries())
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([date, v]) => ({ date, ocr: v.ocr, recognition: v.recognition }));

  // Debug: log dos dados processados
  console.log("Chart series:", chartSeries.slice(0, 10));
  console.log("Sample log entry:", logs[0]);
  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Administração</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards
              ocrCount={ocrCount}
              recognitionCount={recognitionCount}
              totalCount={totalCount}
              planUsagePercent={utilizacaoPlanoPercent}
              currentPlan={planoAtual}
            />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive data={chartSeries} />
            </div>
            <DashboardDataTable data={logs as unknown as ApiLog[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
