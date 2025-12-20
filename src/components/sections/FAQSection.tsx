
import { AnimatedWrapper } from '@/components/AnimatedWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What is Foodlet?",
    answer: "Foodlet is an innovative platform that allows customers to conveniently pre-order meals for dine-in or takeaway, helping to eliminate wait times and enhance overall customer satisfaction."
  },
  {
    question: "How does Foodlet work?",
    answer: "Simply browse partner restaurants, select your preferred dishes, choose dine-in or takeaway, and set your desired pickup or serving time. Once you place the order, the restaurant prepares your meal accordingly."
  },
  {
    question: "Is there any extra cost to use Foodlet?",
    answer: "Foodlet is free to browse, and you can explore menus and restaurants without any charges. However, a small platform fee of ₹15–₹30 is applied to each order placed, ensuring a seamless and efficient experience for both customers and restaurants."
  },
  {
    question: "Can I use Foodlet for both dine-in and takeaway orders?",
    answer: "Yes, Foodlet supports both pre-orders for dining in at the restaurant and for takeaway, providing flexibility for your convenience."
  },
  {
    question: "What if I need to change or cancel my pre-order?",
    answer: "Order modification and cancellation policies can vary depending on the specific restaurant. Typically, you can manage your orders through the app. We recommend checking the restaurant's terms or contacting them directly for specific queries."
  },
  {
    question: "How do I know my food will be fresh?",
    answer: "Restaurants prepare your pre-ordered meals close to your selected pickup or dine-in time to ensure maximum freshness and quality."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <AnimatedWrapper className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline text-primary mb-4 flex items-center justify-center">
            <HelpCircle className="w-10 h-10 mr-3" /> Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We've got answers. Find information about Foodlet and how it works.
          </p>
        </AnimatedWrapper>

        <AnimatedWrapper className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="mb-4 border bg-card shadow-sm rounded-lg">
                <AccordionTrigger className="text-lg font-medium hover:no-underline px-6 py-4 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
