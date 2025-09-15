import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Check, X } from "lucide-react";
import type { Metadata } from 'next';
import { AcquisitionForm } from "@/components/AcquisitionForm";

export const metadata: Metadata = {
  title: 'Audit Pricing - INSPECTIA-WEB',
  description: 'Planes de precios para el sistema de inspección de calidad con IA de INSPECTIA-WEB.',
};

export default function Home() {
  const pricingTiers = [
    {
      name: "Básico",
      price: "$49",
      period: "/mes",
      description: "Ideal para equipos pequeños y startups que empiezan a automatizar su control de calidad.",
      features: [
        "100 inspecciones/mes",
        "1 proyecto",
        "Soporte por email",
        "Informes básicos",
      ],
      buttonText: "Empezar ahora",
      buttonVariant: "secondary",
      isContact: false,
    },
    {
      name: "Profesional",
      price: "$149",
      period: "/mes",
      description: "Perfecto para empresas en crecimiento que necesitan escalar sus operaciones de calidad.",
      features: [
        "500 inspecciones/mes",
        "5 proyectos",
        "Soporte prioritario",
        "Acceso a la API",
        "Informes avanzados",
      ],
      buttonText: "Seleccionar Plan",
      buttonVariant: "default",
      popular: true,
      isContact: false,
    },
    {
      name: "Empresa",
      price: "Personalizado",
      period: "",
      description: "Soluciones a medida para grandes corporaciones con requisitos específicos.",
      features: [
        "Inspecciones ilimitadas",
        "Proyectos ilimitados",
        "Soporte dedicado 24/7",
        "Despliegue On-premise",
        "Funcionalidades personalizadas",
      ],
      buttonText: "Contactar Ventas",
      buttonVariant: "secondary",
      isContact: true,
    },
  ];

  const features = [
    { name: 'Inspecciones por mes', tiers: ['100', '500', 'Ilimitado'] },
    { name: 'Número de proyectos', tiers: ['1', '5', 'Ilimitado'] },
    { name: 'Usuarios por proyecto', tiers: ['5', '20', 'Ilimitado'] },
    { name: 'Soporte', tiers: ['Email', 'Prioritario', 'Dedicado 24/7'] },
    { name: 'Acceso a API', tiers: [false, true, true] },
    { name: 'Informes avanzados', tiers: [false, true, true] },
    { name: 'Despliegue On-premise', tiers: [false, false, true] },
  ];

  const faqs = [
    {
      question: "¿Puedo cambiar de plan más adelante?",
      answer: "Sí, puedes cambiar de plan en cualquier momento. Al cambiar, tu facturación se ajustará automáticamente."
    },
    {
      question: "¿Qué se considera una 'inspección'?",
      answer: "Una inspección es el análisis de una imagen o lote de imágenes por nuestra IA para detectar defectos según tus criterios de calidad."
    },
    {
      question: "¿Ofrecen algún descuento para organizaciones sin fines de lucro?",
      answer: "¡Sí! Ofrecemos descuentos especiales para ONGs y organizaciones educativas. Contáctanos para más información."
    }
  ];

  const renderPlanButton = (tier: typeof pricingTiers[number]) => {
    if (tier.isContact) {
      return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full" variant={tier.buttonVariant as any}>
              {tier.buttonText}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Contactar a Ventas</AlertDialogTitle>
              <AlertDialogDescription>
                Puedes contactarnos al número +999999.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Cerrar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    }

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full" variant={tier.buttonVariant as any}>
            {tier.buttonText}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adquirir Plan {tier.name}</DialogTitle>
          </DialogHeader>
          <AcquisitionForm />
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="bg-background text-foreground w-full dark:bg-black">
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <section className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            INSPECTIA-WEB
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Sistema web para inspección de calidad con IA. Elige el plan que mejor se adapte a las necesidades de tu empresa y lleva tu producción al siguiente nivel.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 md:mb-28 max-w-5xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col ${tier.popular ? "border-2 border-primary shadow-lg" : "shadow-md"}`}
            >
              {tier.popular && (
                <Badge variant="default" className="w-fit self-center -mt-4">Más Popular</Badge>
              )}
              <CardHeader className="pt-8">
                <CardTitle className="text-2xl font-headline">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                {renderPlanButton(tier)}
              </CardFooter>
            </Card>
          ))}
        </section>

        <section className="mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">Compara nuestros planes</h2>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Características</TableHead>
                  {pricingTiers.map(tier => <TableHead key={tier.name} className="text-center">{tier.name}</TableHead>)}
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature) => (
                  <TableRow key={feature.name}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    {feature.tiers.map((tierValue, index) => (
                      <TableCell key={index} className="text-center">
                        {typeof tierValue === 'boolean' ? (
                          tierValue ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />
                        ) : (
                          <span>{tierValue}</span>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-headline">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-16 p-8 bg-card rounded-lg border">
            <h3 className="text-2xl font-semibold mt-2 mb-4 font-headline">¿Necesitas un plan a tu medida?</h3>
            <p className="text-muted-foreground mb-6">
              Estamos aquí para ayudarte a encontrar la solución perfecta para tu negocio. Contáctanos para un presupuesto personalizado.
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="lg">Contactar con Ventas</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Contactar a Ventas</AlertDialogTitle>
                  <AlertDialogDescription>
                    Puedes contactarnos al número +999999.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Cerrar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>
      </main>
    </div>
  );
}
