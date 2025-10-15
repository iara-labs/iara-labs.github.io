export interface MenuItem {
  id: string;
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = [
  { id: "inicio", label: "Início", href: "#inicio" },
  { id: "sabia", label: "SabIA", href: "#sabia" },
  { id: "como-funciona", label: "Como Funciona", href: "#como-funciona" },
  {
    id: "desenvolvedores",
    label: "Desenvolvedores",
    href: "#desenvolvedores",
  },
  { id: "precos", label: "Preços", href: "#precos" },
  { id: "faq", label: "FAQ", href: "#faq" },
];
