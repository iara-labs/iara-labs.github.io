import { createFileRoute } from "@tanstack/react-router";
import { SectionCards } from "@/components/admin/dashboard/SectionCards";
import { ChartAreaInteractive } from "@/components/admin/dashboard/ChartAreaInteractive";
import { DataTable } from "@/components/admin/shared/DataTable";
import logs from "@/data/apiLogs.json";
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

export const Route = createFileRoute("/admin/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  // Deriva métricas a partir dos logs
  const ocrCount = logs.filter((l) => l.api === "ocr").reduce((acc, l: any) => acc + (l.count ?? 1), 0);
  const recognitionCount = logs
    .filter((l) => l.api === "recognition")
    .reduce((acc, l: any) => acc + (l.count ?? 1), 0);
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
  for (const log of logs as any[]) {
    const key = (log.date || new Date(log.dataHora).toISOString().slice(0, 10)) as string;
    const entry = byDay.get(key) || { ocr: 0, recognition: 0 };
    if (log.api === "ocr") entry.ocr += log.count ?? 1;
    else entry.recognition += log.count ?? 1;
    byDay.set(key, entry);
  }
  const chartSeries = Array.from(byDay.entries())
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([date, v]) => ({ date, ocr: v.ocr, recognition: v.recognition }));
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
                <BreadcrumbLink href="#">Admin</BreadcrumbLink>
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
            <DataTable data={logs} />
          </div>
        </div>
      </div>
    </div>
  );
}
