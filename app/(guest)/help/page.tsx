// app/help/page.tsx

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    HelpCircle,
    Search,
    Truck,
    Package,
    CreditCard,
    ShieldCheck,
    MessageSquare,
    Mail,
    Phone,
} from "lucide-react";

export default function HelpPage() {
    return (
        <div className="min-h-screen bg-muted/30">
            {/* Header */}
            <div className="border-b bg-background">
                <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                            QUZA Help Center
                        </h1>
                        <p className="text-sm text-muted-foreground md:text-base">
                            Find answers about orders, payments, shipping and returns.
                        </p>
                    </div>

                    <div className="flex w-full gap-2 md:w-[420px]">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input placeholder="Search help articles..." className="pl-9" />
                        </div>
                        <Button>Search</Button>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-6xl space-y-10 px-4 py-10">
                {/* Quick Topics */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="transition hover:shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 text-base">
                                <Truck className="h-5 w-5 text-primary" />
                                Shipping
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Delivery timelines, tracking, and shipping fees.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="transition hover:shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 text-base">
                                <Package className="h-5 w-5 text-primary" />
                                Orders
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Order status, cancellations, and order history.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="transition hover:shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 text-base">
                                <CreditCard className="h-5 w-5 text-primary" />
                                Payments
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Payment methods, refunds, and billing support.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="transition hover:shadow-md">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 text-base">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                                Account
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Security, password reset, and profile settings.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Popular Articles */}
                <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-xl font-semibold tracking-tight">
                            Popular Articles
                        </h2>
                        <Badge variant="secondary" className="text-xs">
                            Updated Weekly
                        </Badge>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="transition hover:shadow-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">
                                    How to Track Your Order
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-sm text-muted-foreground">
                                    Track your order status and delivery progress in real-time.
                                </p>
                                <Link
                                    href="#"
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    Read article →
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="transition hover:shadow-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">
                                    How Returns & Refunds Work
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-sm text-muted-foreground">
                                    Learn how to return an item and when you can get a refund.
                                </p>
                                <Link
                                    href="#"
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    Read article →
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="transition hover:shadow-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">
                                    Common Payment Issues & Fixes
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-sm text-muted-foreground">
                                    Fix failed payments, pending transactions, and checkout
                                    errors.
                                </p>
                                <Link
                                    href="#"
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    Read article →
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* FAQ */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <HelpCircle className="h-5 w-5 text-primary" />
                                Frequently Asked Questions
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        How do I track my order in QUZA?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Go to <b>My Orders</b>, select your order, and you will see
                                        the current status and delivery updates.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        How long does delivery take?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Delivery timelines depend on your location and the seller.
                                        Most orders are delivered within 1 to 3 business days.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3">
                                    <AccordionTrigger>
                                        What if my order is delayed?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Delays may happen due to high demand, traffic, or seller
                                        processing time. You can track the latest updates in your
                                        order details or contact support.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4">
                                    <AccordionTrigger>
                                        Can I cancel my order after checkout?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        You can cancel an order if it has not yet been shipped.
                                        Visit <b>My Orders</b>, open the order details, then select{" "}
                                        <b>Cancel Order</b>.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5">
                                    <AccordionTrigger>
                                        How do refunds work?
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        Refunds are processed after the return is approved. Depending
                                        on your payment method, it may take 1 to 7 business days for
                                        the money to reflect.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                    </Card>

                    {/* Contact Support */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MessageSquare className="h-5 w-5 text-primary" />
                                Contact Support
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="rounded-xl border bg-muted/30 p-4">
                                <p className="text-sm font-medium">Support Hours</p>
                                <p className="text-sm text-muted-foreground">
                                    Mon - Sat: 8:00 AM - 8:00 PM
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Sunday: 10:00 AM - 4:00 PM
                                </p>
                            </div>

                            <div className="space-y-3">
                                <Button className="w-full gap-2">
                                    <Mail className="h-4 w-4" />
                                    Email Support
                                </Button>

                                <Button variant="outline" className="w-full gap-2">
                                    <Phone className="h-4 w-4" />
                                    Call Support
                                </Button>
                            </div>

                            <div className="text-xs text-muted-foreground">
                                For faster help, include your order number when contacting
                                support.
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Footer */}
                <div className="rounded-2xl border bg-background p-6 text-center">
                    <p className="text-sm text-muted-foreground">
                        Still need help? Check our{" "}
                        <Link href="#" className="font-medium text-primary hover:underline">
                            Policies
                        </Link>{" "}
                        or contact support directly.
                    </p>
                </div>
            </div>
        </div>
    );
}