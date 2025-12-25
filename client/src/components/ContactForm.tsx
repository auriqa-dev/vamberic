import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Loader2, Send } from "lucide-react";
import type { z } from "zod";

type FormData = z.infer<typeof insertInquirySchema>;

export function ContactForm() {
  const { mutate, isPending } = useCreateInquiry();
  const form = useForm<FormData>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            {...form.register("name")}
            id="name"
            className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
            placeholder="John Doe"
          />
          {form.formState.errors.name && (
            <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input
            {...form.register("email")}
            id="email"
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
            placeholder="john@company.com"
          />
          {form.formState.errors.email && (
            <p className="text-red-400 text-xs">{form.formState.errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-gray-300">
          Company (Optional)
        </label>
        <input
          {...form.register("company")}
          id="company"
          className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
          placeholder="Acme Corp"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          {...form.register("message")}
          id="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-secondary/30 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
          placeholder="How can we help you?"
        />
        {form.formState.errors.message && (
          <p className="text-red-400 text-xs">{form.formState.errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
