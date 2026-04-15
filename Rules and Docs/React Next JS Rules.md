
---

## alwaysApply: true

You are an expert in Next.js 15, React 19, TypeScript, Tailwind CSS, Cloudflare Workers/Pages, and modern SaaS web development.

# Stack Reference

- **Framework**: Next.js 15.2.4 (App Router)
- **UI**: React 19 / React DOM 19
- **Hosting**: Cloudflare Workers & Pages
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript (strict mode)

---

# Code Style and Structure

- Write clean, idiomatic TypeScript with explicit types; avoid `any`.
- Prefer functional components and React hooks; never use class components.
- Favor composition over prop drilling; use Context or server-side data passing.
- Use descriptive variable names with auxiliary verbs (`isLoading`, `hasError`, `shouldAnimate`).
- Structure files: exported component → subcomponents → helpers → types → constants.
- **Target ~400 lines per file maximum**; split larger components into focused sub-components.
- Group related files by feature, not by type:
    
    ```
    app/components/  ui/           # Reusable primitives (Button, Card, Badge)  sections/     # Page sections (Hero, Pricing, FAQ)  layout/       # Shell components (Navbar, Footer, Sidebar)lib/            # Utilities, helpers, constantshooks/          # Custom React hookstypes/          # Shared TypeScript types/interfacescontent/        # Static copy, MDX, JSON datapublic/         # Static assets
    ```
    
- Never commit or push to Git without explicit request/permission.

---

# Naming Conventions

- **Components/Types/Interfaces**: PascalCase (`HeroSection`, `PricingCard`, `NavItem`)
- **Variables/Functions/Hooks**: camelCase (`useScrollPosition`, `formatPrice`, `isVisible`)
- **Files for components**: PascalCase (`HeroSection.tsx`)
- **Files for utilities/hooks**: camelCase (`useScrollPosition.ts`, `formatPrice.ts`)
- **CSS/Tailwind custom classes**: kebab-case (`hero-gradient`, `card-glow`)
- **Constants**: SCREAMING_SNAKE_CASE for module-level constants (`MAX_RETRIES`, `API_BASE_URL`)
- **Event handlers**: prefix with `handle` (`handleClick`, `handleSubmit`, `handleScroll`)

---

# TypeScript Best Practices

## Safety Rules

- **NEVER use `as any` or `@ts-ignore`** without an explanatory comment.
- **NEVER use non-null assertion (`!`)** except for guaranteed DOM refs (`ref.current!`).
- Enable `strict: true` in `tsconfig.json`; do not relax strictness.
- Use `unknown` instead of `any` for external data; narrow with type guards.
- Prefer interfaces for object shapes, type aliases for unions/intersections.

```typescript
// ❌ BAD
const data = response.json() as any;
const el = document.getElementById('app')!;

// ✅ GOOD
const data: unknown = await response.json();
if (!isValidApiResponse(data)) throw new Error('Invalid response shape');

// ✅ GOOD - type guard
function isNavItem(item: unknown): item is NavItem {
  return typeof item === 'object' && item !== null && 'href' in item;
}
```

## Immutability and Clarity

- Prefer `const` over `let`; never use `var`.
- Use `readonly` arrays and object properties for data that should not mutate.
- Use `satisfies` operator to validate literals while preserving narrowed types.

```typescript
// ✅ GOOD - satisfies preserves literal types
const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
] satisfies NavItem[];
```

---

# Next.js 15 / App Router Best Practices

## Server vs Client Components

- **Default to Server Components**; add `'use client'` only when necessary.
- Client boundary triggers: `useState`, `useEffect`, event handlers, browser APIs, third-party client libs.
- Keep `'use client'` components as small as possible ("leaf" components); push interactivity to the edges.
- Never fetch data in Client Components if it can be done in a Server Component above it.

```typescript
// ✅ GOOD - Server Component fetches, Client Component only handles interaction
// PricingSection.tsx (Server Component)
export default async function PricingSection() {
  const plans = await getPlans(); // Server-side fetch
  return <PricingCards plans={plans} />;
}

// PricingCards.tsx (Client Component - only because of toggle state)
'use client';
export function PricingCards({ plans }: { plans: Plan[] }) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
  // ...
}
```

## Data Fetching

- Use `fetch` with Next.js cache options in Server Components.
- Use `cache()` from React for deduplicating server-side requests.
- Prefer `generateStaticParams` + `dynamicParams = false` for fully static marketing pages.
- Use `unstable_cache` for database queries that can be revalidated.

```typescript
// ✅ GOOD - Cached fetch with revalidation
const res = await fetch('https://api.example.com/plans', {
  next: { revalidate: 3600 }, // Revalidate every hour
});

// ✅ GOOD - Deduplicated data access
import { cache } from 'react';
export const getPlans = cache(async () => {
  return db.plans.findMany();
});
```

## Routing and Metadata

- Define metadata in `layout.tsx` or `page.tsx` using the `Metadata` type — never use `<Head>`.
- Use `generateMetadata` for dynamic metadata (blog posts, landing page variants).
- Use route groups `(group)` to share layouts without affecting URL structure.
- Use `loading.tsx` and `error.tsx` for streaming and error boundaries at route level.

```typescript
// ✅ GOOD - Static metadata
export const metadata: Metadata = {
  title: 'YourSaaS — The Best Tool for X',
  description: '...',
  openGraph: { ... },
};

// ✅ GOOD - Dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  return { title: post.title };
}
```

## Cloudflare Workers/Pages Constraints

- Use the **Edge Runtime** for pages/routes that need low latency globally.
- **NEVER use Node.js-only APIs** (`fs`, `path`, `crypto` from Node) in edge routes; use Web APIs instead.
- Use `@cloudflare/next-on-pages` adapter patterns; understand its limitations.
- Keep edge function bundles lean; avoid heavy server-side dependencies.
- Use Cloudflare KV, D1, or R2 for persistence at the edge — not traditional Node.js ORMs.
- Set `export const runtime = 'edge'` explicitly on routes targeting Cloudflare Workers.

```typescript
// ✅ GOOD - Edge-compatible route
export const runtime = 'edge';

export async function GET(request: Request) {
  // Use Web Crypto API, not Node's crypto
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('data'));
  return Response.json({ ok: true });
}
```

---

# Component Architecture

## Atomic Design for SaaS Marketing Sites

- **Primitives** (`ui/`): Button, Badge, Card, Input, Label — fully generic, no business logic.
- **Sections** (`sections/`): Hero, Features, Pricing, Testimonials, FAQ, CTA — contain copy/layout.
- **Layout** (`layout/`): Navbar, Footer, SidebarNav — appear across multiple pages.
- **Pages** (`app/`): Compose sections; minimal logic, mostly arrangement.

## Props Design

- Keep prop interfaces focused; if a component needs >6 props, consider splitting it.
- Use discriminated unions for variant props instead of multiple booleans.
- Always provide sensible defaults with `defaultProps` or default parameter values.

```typescript
// ❌ BAD - Booleans for variants
interface ButtonProps {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDanger?: boolean;
}

// ✅ GOOD - Discriminated union
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}
```

---

# Styling with Tailwind CSS v4

## Core Rules

- Use Tailwind utility classes as the default styling approach.
- Define design tokens (colors, fonts, spacing) in `@theme` block in global CSS — not `tailwind.config`.
- Use CSS custom properties (variables) for dynamic values that change with state or theme.
- Never use inline `style` props for values that Tailwind can express.
- Avoid `@apply` except for very high-reuse base element styles (e.g., `body`, `a`).

## Responsive Design

- **Mobile-first always**: base styles for mobile, `sm:` / `md:` / `lg:` / `xl:` for larger screens.
- Test at 375px, 768px, 1280px, 1536px breakpoints minimum.
- Use `container` class with a custom max-width; avoid fixed pixel widths on layout elements.

```typescript
// ✅ GOOD - Mobile-first responsive
<section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
  <h1 className="text-3xl font-bold sm:text-4xl lg:text-6xl">
    Headline
  </h1>
</section>
```

## Dark Mode

- Use the `dark:` variant with CSS class strategy (`darkMode: 'class'` or Tailwind v4 equivalent).
- Define both light and dark tokens in `@theme`; use semantic color names (`--color-bg`, `--color-text`).
- Never hardcode light-only colors on surfaces — always provide `dark:` overrides.

## Animation and Motion

- Use Tailwind's `transition-*`, `duration-*`, `ease-*` for simple transitions.
- For complex animations use Framer Motion (or Motion for React 19).
- Respect `prefers-reduced-motion`; wrap animations in a `useReducedMotion` hook.

```typescript
// ✅ GOOD - Reduced motion respect
const prefersReduced = useReducedMotion();

<motion.div
  initial={prefersReduced ? false : { opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: prefersReduced ? 0 : 0.4 }}
>
```

---

# Performance Optimization

## Images and Fonts

- **ALWAYS use `next/image`** for all images; never use raw `<img>` tags.
- Provide explicit `width` and `height` or use `fill` with a positioned parent — never omit dimensions.
- Use `priority` prop on above-the-fold images (hero, logo).
- Self-host fonts using `next/font`; never load fonts from external CDNs at runtime.

```typescript
// ✅ GOOD
import Image from 'next/image';
import { GeistSans } from 'geist/font/sans';

<Image
  src="/hero-screenshot.png"
  alt="Dashboard screenshot showing key metrics"
  width={1200}
  height={800}
  priority
/>
```

## Core Web Vitals Targets

- **LCP** < 2.5s: Prioritize hero image/font loading; avoid layout shift.
- **CLS** < 0.1: Reserve space for images, ads, dynamic content with explicit dimensions.
- **INP** < 200ms: Keep event handlers lightweight; defer non-critical JS.
- **TTFB** < 800ms: Use ISR/static generation where possible; leverage Cloudflare edge caching.

## Bundle Size

- Analyze with `@next/bundle-analyzer`; set a budget and enforce it in CI.
- Use dynamic imports for heavy components not needed on initial load.
- Tree-shake third-party libraries; prefer packages with ESM exports.
- Avoid importing entire icon libraries — import individual icons.

```typescript
// ❌ BAD
import { ArrowRight, Check, X, Star, ... } from 'lucide-react'; // Pulls in everything

// ✅ GOOD
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
// OR use a bundler-friendly import pattern confirmed for your icon lib
```

---

# SEO for SaaS Marketing Sites

## Technical SEO

- Every page must have a unique `<title>` and `<meta name="description">`.
- Implement full Open Graph and Twitter Card metadata on all public pages.
- Add structured data (JSON-LD) for Organization, Product, FAQPage, and BreadcrumbList where relevant.
- Use semantic HTML: one `<h1>` per page, logical heading hierarchy, `<main>`, `<nav>`, `<footer>`, `<article>`.
- Generate a `sitemap.xml` via `app/sitemap.ts` and a `robots.txt` via `app/robots.ts`.

```typescript
// ✅ GOOD - app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yoursaas.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://yoursaas.com/pricing', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];
}
```

## Content SEO

- Write meaningful `alt` text for all images — describe the image in context, not just its subject.
- Use descriptive anchor text; never use "click here" or "learn more" alone.
- Canonical URLs on all pages to prevent duplicate content issues.

---

# Accessibility (a11y)

- **WCAG 2.1 AA minimum** for all public-facing pages.
- All interactive elements must be keyboard-navigable and have visible focus styles.
- Color contrast ratio: minimum 4.5:1 for body text, 3:1 for large text and UI components.
- Use `aria-label`, `aria-describedby`, `role` attributes where semantic HTML is insufficient.
- Modals/dialogs must trap focus and restore it on close; use `aria-modal="true"`.
- Never remove `outline` on focus without providing a visible custom alternative.
- Test with VoiceOver (macOS/iOS) and NVDA (Windows) on key user flows.

```typescript
// ❌ BAD
<div onClick={handleOpen}>Open Menu</div>

// ✅ GOOD
<button
  onClick={handleOpen}
  aria-expanded={isOpen}
  aria-controls="main-menu"
  aria-label="Open navigation menu"
>
  Open Menu
</button>
```


---

# Forms and User Input

- Use `react-hook-form` + `zod` for all forms — never manage form state with raw `useState`.
- Define schemas with `zod`; share them between client validation and server-side parsing.
- Show inline validation errors immediately after blur; show success state after submission.
- Disable submit button while submitting; show loading state.
- Handle and display server-side errors — never fail silently.

```typescript
// ✅ GOOD
const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
  resolver: zodResolver(schema),
});

// Server action also validates with same schema
const parsed = schema.safeParse(formData);
if (!parsed.success) return { error: parsed.error.flatten() };
```

---

# Error Handling

## User-Facing Errors

- **NEVER fail silently**; always surface errors to the user in plain language.
- Use `error.tsx` for route-level errors; provide a "Try again" button and home link.
- Use toast notifications for transient errors (form submissions, API calls).
- Log errors with context; never expose raw stack traces or internal error messages to users.

```typescript
// ❌ BAD
try {
  await subscribeEmail(email);
} catch (e) {
  console.error(e); // User sees nothing
}

// ✅ GOOD
try {
  await subscribeEmail(email);
  toast.success('You're on the list!');
} catch (e) {
  logger.error('Email subscription failed', { email, error: e });
  toast.error('Something went wrong. Please try again.');
}
```

## Not Found and Error Pages

- Implement `not-found.tsx` with helpful navigation links — never show a blank page.
- Implement `error.tsx` at the root and optionally at segment level.
- Both pages should match the site's design system; they are still brand touchpoints.

---

# Security

- **NEVER expose secret environment variables to the client**; prefix client-safe vars with `NEXT_PUBLIC_`.
- **NEVER store sensitive tokens in `localStorage`**; use `httpOnly` cookies for auth sessions.
- Validate and sanitize all user input server-side, even if client-side validation exists.
- Set strict Content Security Policy headers in `next.config.ts` or Cloudflare.
- Use `next/headers` `cookies()` for server-side cookie access; do not parse `document.cookie` manually.
- Implement rate limiting on form submission routes and API endpoints (Cloudflare Rate Limiting rules or middleware).

```typescript
// ✅ GOOD - next.config.ts security headers
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Content-Security-Policy',
    value: `default-src 'self'; script-src 'self' 'unsafe-inline'; ...`,
  },
];
```

---

# Environment and Configuration

- Use `.env.local` for local secrets; never commit it.
- Use Cloudflare Workers secrets/bindings for production environment variables; not plain env vars.
- Validate all required environment variables at build/startup time using `zod` or a custom check.
- Maintain separate configs for `development`, `preview`, and `production` environments.

```typescript
// ✅ GOOD - Validate env at startup
import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  DATABASE_URL: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);
```

---

# Logging

- **NEVER use `console.log` in production code**; it leaks to user DevTools and pollutes Cloudflare logs.
- Use a structured logger (e.g., `pino`) or a simple wrapper that is a no-op in production client bundles.
- Log levels: `debug` (dev only), `info`, `warn`, `error`.
- Never log PII: emails, names, passwords, payment info, IP addresses in plain text.
- Use Cloudflare Workers `console.log` equivalent only for server-side edge logs (they go to Cloudflare dashboard, not the browser).

```typescript
// ✅ GOOD - Lightweight logger wrapper
const logger = {
  info: (msg: string, meta?: object) => {
    if (process.env.NODE_ENV !== 'production') console.info(msg, meta);
  },
  error: (msg: string, meta?: object) => {
    // In production, send to logging service (Axiom, Logflare, etc.)
    reportError(msg, meta);
  },
};
```

---

# Analytics and Tracking

- Load analytics scripts with `next/script` using `strategy="afterInteractive"` or `"lazyOnload"` — never in `<head>` manually.
- Respect `DNT` header and implement a cookie consent mechanism before activating tracking.
- Use server-side event tracking for critical conversion events (signup, purchase) — don't rely solely on client-side pixels.
- Abstract analytics calls behind a thin wrapper so you can swap providers without touching feature code.

```typescript
// ✅ GOOD
export function trackEvent(name: string, properties?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.analytics?.track(name, properties); // Segment / PostHog / etc.
}
```

---

# Internationalization (i18n)

- Use Next.js built-in i18n routing or `next-intl` for multi-language sites.
- Externalize all user-facing strings into locale files from day one — even if launching English-only.
- Use `Intl` browser APIs for date, number, and currency formatting — never hardcode formats.
- Set `lang` attribute on `<html>`; use `hreflang` tags for alternate language pages.

---

# Testing

- Unit test pure utility functions and data-transformation logic with Vitest.
- Component test interactive UI with React Testing Library; test behavior, not implementation.
- E2E test critical user flows (signup, pricing page CTA, contact form) with Playwright.
- Run Lighthouse CI on every PR to enforce Core Web Vitals budgets.
- Use Storybook for isolated component development and visual regression testing.

---

# Pre-Launch Checklist

Before going live, verify:

- [ ] All pages have unique `<title>` and `<meta description>`
- [ ] Open Graph images set for homepage and key landing pages
- [ ] `sitemap.xml` and `robots.txt` generated and accessible
- [ ] No `console.log` statements in production code
- [ ] No exposed secret environment variables (`NEXT_PUBLIC_` audit)
- [ ] All images use `next/image` with explicit dimensions and `alt` text
- [ ] Fonts self-hosted via `next/font`; no external font CDN requests
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] Forms validate both client-side and server-side
- [ ] Error and Not Found pages styled and functional
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 95
- [ ] Mobile tested at 375px and 768px
- [ ] Cookie consent in place if using analytics/tracking
- [ ] `edge` runtime set on Cloudflare-deployed routes; no Node.js-only APIs used
- [ ] Rate limiting configured on form submission endpoints
- [ ] Canonical URLs on all pages

---

# Code Review Standards

When reviewing code, check for:

1. **Type Safety**: No `any`, no `!` non-null assertions without justification
2. **Server/Client Boundary**: `'use client'` used minimally and correctly
3. **Performance**: Images use `next/image`, fonts use `next/font`, no render-blocking resources
4. **Accessibility**: Semantic HTML, keyboard navigation, ARIA attributes where needed
5. **SEO**: Metadata defined, semantic heading hierarchy, descriptive `alt` text
6. **Security**: No leaked secrets, server-side validation present, security headers set
7. **Error Handling**: No silent failures, user-facing error states exist
8. **Edge Compatibility**: No Node.js-only APIs in edge routes
9. **Bundle Size**: No unnecessary imports, dynamic imports used for heavy components
10. **File Size**: Components under ~400 lines; split by responsibility

---

# Common Anti-Patterns to Avoid

## ❌ Client Components by Default

```typescript
// BAD: 'use client' on everything "just to be safe"
'use client'; // ← unnecessary; no interactivity here
export default async function PricingPage() { ... }
```

## ❌ Raw `<img>` Tags

```typescript
// BAD: no optimization, no lazy loading, CLS risk
<img src="/hero.png" />

// GOOD:
<Image src="/hero.png" alt="..." width={1200} height={800} priority />
```

## ❌ Secrets in Client Code

```typescript
// BAD: exposed to browser
const apiKey = process.env.STRIPE_SECRET_KEY; // in a Client Component
```

## ❌ Silent Form Failures

```typescript
// BAD: user doesn't know what happened
const res = await fetch('/api/subscribe', { method: 'POST', body: ... });
// No error handling, no success state
```

## ❌ Ignoring Core Web Vitals

```typescript
// BAD: synchronous font load blocking render
<link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />
```

## ❌ Node.js APIs on Edge Routes

```typescript
// BAD: will crash on Cloudflare Workers
import { readFileSync } from 'fs';
export const runtime = 'edge';
const content = readFileSync('./data.json', 'utf-8'); // ❌ not available at edge
```

---

Follow Next.js official documentation, React 19 release notes, and Cloudflare Workers/Pages documentation for the latest API usage, deployment constraints, and platform capabilities.