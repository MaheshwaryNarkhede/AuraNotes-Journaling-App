import React from "react";
import {
  Book,
  Sparkles,
  Lock,
  Calendar,
  ChevronRight,
  BarChart2,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { getDailyPrompt } from "@/actions/public";
import faqs from "@/data/faqs";

const features = [
  {
    icon: Book,
    title: "Rich Text Editor",
    description:
      "Express yourself with a powerful editor supporting markdown, formatting, and more.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with daily prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your thoughts are safe with enterprise-grade security and privacy features.",
  },
];

export default async function LandingPage() {
  const advice = await getDailyPrompt();

  return (
    <div className="relative container mx-auto px-4 pt-16 pb-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl gradient-title mb-6">
        Your Space to Think. <br /> Your Ideas to Capture.
        </h1>
        <p className="text-lg md:text-xl text-purple-800 mb-8">
        Your personal haven to capture thoughts, track emotions, and reflect on life's journey—all in a beautifully secure space.
        </p>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-50 via-transparent to-transparent pointer-events-none z-10" />
          <div className="bg-white rounded-2xl  p-4 max-full mx-auto">
            <div className="border-b border-purple-100 pb-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span className="text-purple-900 font-medium">
                  Today&rsquo;s Entry
                </span>
              </div>
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-purple-200" />
                <div className="h-3 w-3 rounded-full bg-purple-300" />
                <div className="h-3 w-3 rounded-full bg-purple-400" />
              </div>
            </div>
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-semibold text-purple-900">
                {advice ? advice : "My Thoughts Today"}
              </h3>
              <Skeleton className="h-4 bg-purple-100 rounded w-3/4" />
              <Skeleton className="h-4 bg-purple-100 rounded w-full" />
              <Skeleton className="h-4 bg-purple-100 rounded w-2/3" />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link href="/dashboard">
            <Button
              variant="journal"
              className="px-8 py-6 rounded-full flex items-center gap-2"
            >
              Start Writing <ChevronRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="#features">
            <Button
              variant="outline"
              className="px-8 py-6 rounded-full border-purple-600 text-purple-600 hover:bg-purple-100"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Feature Cards */}
      <section
        id="features"
        className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <Card key={index} className="shadow-lg">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-xl text-purple-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-purple-700">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <div className="space-y-24 mt-24">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 gap-12 ">
          <div className="space-y-6">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-purple-900">
            Enhanced Writing Hub
            </h3>
            <p className="text-lg text-purple-700">
            Craft your thoughts effortlessly with a dynamic editor—featuring markdown, rich formatting, and seamless expression.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-400" />
                <span>Format text with ease</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-400" />
                <span>Embed links</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
            {/* Editor Preview */}
            <div className="flex gap-2 mb-6">
              <div className="h-8 w-8 rounded bg-purple-100"></div>
              <div className="h-8 w-8 rounded bg-purple-100"></div>
              <div className="h-8 w-8 rounded bg-purple-100"></div>
            </div>
            <div className="h-4 bg-purple-50 rounded w-3/4"></div>
            <div className="h-4 bg-purple-50 rounded w-full"></div>
            <div className="h-4 bg-purple-50 rounded w-2/3"></div>
            <div className="h-4 bg-purple-50 rounded w-1/3"></div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 gap-12 md:flex-row-reverse">
          <div className="space-y-6 md:order-2">
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
              <BarChart2 className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-purple-900">
             Emotional Insights

            </h3>
            <p className="text-lg text-purple-700">
            Understand your feelings over time with in-depth mood tracking and intelligent analytics.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-400" />
                <span>Visual mood trends</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-400" />
                <span>Pattern recognition</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 bg-white rounded-2xl shadow-xl p-6 border border-purple-100 md:order-1">
            {/* Analytics Preview */}
            <div className="h-40 bg-gradient-to-t from-purple-100 to-purple-50 rounded-lg"></div>
            <div className="flex justify-between">
              <div className="h-4 w-16 bg-purple-100 rounded"></div>
              <div className="h-4 w-16 bg-purple-100 rounded"></div>
              <div className="h-4 w-16 bg-purple-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <div className="mt-24 flex justify-center">
  <div className="max-w-2xl w-full">
    <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
      Frequently Asked Questions
    </h2>
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-purple-900 text-lg">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-purple-700">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
</div>


      {/* CTA Section */}
      <div className="mt-24">
        <Card className="bg-gradient-to-r from-purple-100 to-amber-100">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">
              Start Reflct-ing on Your Journey Today
            </h2>
            <p className="text-lg text-purple
            
            -700 mb-8 max-w-2xl mx-auto">
              Join thousands of writers who have already discovered the power of
              digital journaling.
            </p>
            <Button size="lg" variant="journal" className="animate-bounce">
              Get Started for Free <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}