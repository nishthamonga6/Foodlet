
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateAdCopy, type GenerateAdCopyInput, type GenerateAdCopyOutput } from "@/ai/flows/generate-ad-copy";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";

const adGeneratorSchema = z.object({
  customerReviews: z.string().min(50, {
    message: "Please provide at least 50 characters of customer reviews.",
  }),
});

type AdGeneratorFormValues = z.infer<typeof adGeneratorSchema>;

export function AdGeneratorClient() {
  const [generatedAdCopy, setGeneratedAdCopy] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<AdGeneratorFormValues>({
    resolver: zodResolver(adGeneratorSchema),
    defaultValues: {
      customerReviews: "",
    },
  });

  async function onSubmit(data: AdGeneratorFormValues) {
    setIsLoading(true);
    setGeneratedAdCopy(null);
    try {
      const input: GenerateAdCopyInput = { customerReviews: data.customerReviews };
      const result: GenerateAdCopyOutput = await generateAdCopy(input);
      setGeneratedAdCopy(result.adCopy);
      toast({
        title: "Ad Copy Generated!",
        description: "Your new promotional message is ready.",
      });
    } catch (error) {
      console.error("Error generating ad copy:", error);
      toast({
        title: "Error",
        description: "Failed to generate ad copy. Please try again.",
        variant: "destructive",
      });
      setGeneratedAdCopy("An error occurred while generating ad copy. Please check the console for details and try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AnimatedWrapper className="max-w-2xl mx-auto p-4 md:p-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary flex items-center">
            <Wand2 className="mr-2 h-7 w-7" /> AI Ad Copy Generator
          </CardTitle>
          <CardDescription className="text-md">
            Enter customer reviews to generate unique selling points and compelling ad copy for Cafeteria.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="customerReviews"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Customer Reviews</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste customer reviews here, separated by newlines. For example: 'The coffee was amazing and the atmosphere was so cozy!' \n 'Loved the friendly staff and quick service.'"
                        className="min-h-[200px] text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full text-lg py-6 bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" /> Generate Ad Copy
                  </>
                )}
              </Button>
            </form>
          </Form>

          {generatedAdCopy && (
            <div className="mt-10 pt-6 border-t">
              <h3 className="text-2xl font-headline text-primary mb-4">Generated Ad Copy:</h3>
              <div className="bg-muted p-6 rounded-md whitespace-pre-wrap text-foreground text-base shadow">
                {generatedAdCopy}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </AnimatedWrapper>
  );
}
