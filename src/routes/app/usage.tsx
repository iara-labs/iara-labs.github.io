import { createFileRoute } from "@tanstack/react-router";
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
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/app/usage")({
  component: Usage,
});

function Usage() {
  // Dados mockados para demonstração
  const currentPlan = {
    name: "Starter",
    limit: 5000,
    used: 3247,
    resetDate: "2024-01-31",
  };

  const usagePercentage = (currentPlan.used / currentPlan.limit) * 100;

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
                <BreadcrumbPage>Consumo do Plano</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {/* Seção de Uso do Plano */}
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Uso do Plano {currentPlan.name}</CardTitle>
              <CardDescription>
                Acompanhe seu uso de requisições mensais
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Requisições utilizadas</span>
                  <span className="font-medium">
                    {currentPlan.used.toLocaleString()} /{" "}
                    {currentPlan.limit.toLocaleString()}
                  </span>
                </div>
                <Progress value={usagePercentage} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{usagePercentage.toFixed(1)}% utilizado</span>
                  <span>
                    Reset em{" "}
                    {new Date(currentPlan.resetDate).toLocaleDateString(
                      "pt-BR"
                    )}
                  </span>
                </div>
              </div>

              {usagePercentage > 80 && (
                <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-3">
                  <p className="text-sm text-yellow-800">
                    ⚠️ Você está próximo do limite do seu plano.
                    {usagePercentage > 95 &&
                      " Considere fazer upgrade para evitar interrupções."}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resumo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Plano atual
                </span>
                <span className="font-medium">{currentPlan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Disponível
                </span>
                <span className="font-medium">
                  {(currentPlan.limit - currentPlan.used).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  Próximo reset
                </span>
                <span className="font-medium">
                  {new Date(currentPlan.resetDate).toLocaleDateString("pt-BR")}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Ações */}
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade do Plano</CardTitle>
              <CardDescription>
                Faça upgrade para um plano com mais requisições
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Atualize para um plano superior e tenha acesso a mais
                  requisições mensais.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="flex-1">Ver Planos Disponíveis</Button>
                  <Button variant="outline" className="flex-1">
                    Comparar Planos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Plano Adicional</CardTitle>
              <CardDescription>
                Contrate requisições extras para o mês atual
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Adicione requisições extras ao seu plano atual sem fazer
                  upgrade.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="flex-1">Comprar Requisições</Button>
                  <Button variant="outline" className="flex-1">
                    Ver Pacotes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
