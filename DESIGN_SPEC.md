# Developer Portfolio — UI/UX Design Specification

**Project:** Personal portfolio for an aspiring full-stack developer  
**Primary use:** Internship / OJT applications  
**Status:** Phase 1 design handoff; no implementation started  
**Design target:** React + Vite + JavaScript + Tailwind CSS + React Router + Framer Motion + Lucide React

> **Content integrity:** This workspace currently contains only a Vite starter and no verified personal profile, school, contact details, repository URLs, deployed URLs, or project screenshots. Replace every bracketed field before publishing. CeresGo capabilities below are split into supplied current scope and explicitly planned scope. TMC EventEase is limited to the confirmed React/Vite stack and the administrator/student experiences described in the brief; confirm each workflow against the running app before claiming it as implemented.

## 1. Design concept and visual direction

Create a calm, editorial engineering portfolio that reads like a well-maintained project dashboard. The first screen should answer three recruiter questions within seconds: who is this, what can they build, and how can I review or contact them? Use strong type, a short introduction, a compact availability note, and real project screenshots. Avoid decorative code rain, skill meters, fake metrics, testimonials, or animated backgrounds.

Visual character: deep navy canvas; slightly lifted surfaces; crisp white headings; restrained blue actions; thin cool-gray borders; compact monospace metadata; generous but controlled spacing. Use no gradient by default. A small, low-contrast blue radial tint may sit behind the hero text only if it remains subtle and static.

## 2. Sitemap and navigation flow

```text
/                         Home (intro, featured work, skills snapshot, availability)
/about                    About (bio, education, interests, objective)
/skills                   Skills (working knowledge / learning)
/projects                 Projects index (3 featured projects)
/projects/ceresgo         CeresGo detail
/projects/municipal-srs   Municipal Service Request System detail
/projects/tmc-eventease   TMC EventEase detail
/experience               Experience & Education (academic / project experience)
/contact                  Contact (email, GitHub, LinkedIn, resume)
```

Header links: Work, About, Skills, Experience, Contact. Logo/name returns home. “Resume” is a persistent outlined action linking to a real, accessible PDF. Footer repeats key routes and external profiles. On project detail pages include “Previous project”, “Next project”, and “All projects”. Typical recruiter flow: Home → scan three project cards → open relevant detail → inspect screenshots, scope, and links → Contact or Resume. Secondary flow: Home → About/Skills → Experience → Contact.

## 3. Shared layout and visual system

### Color tokens

| Token | HEX | Use |
|---|---|---|
| `canvas` | `#0B1120` | Page background |
| `surface` | `#111827` | Header, inset panels, footer |
| `surface-raised` | `#1F2937` | Cards, input backgrounds |
| `surface-hover` | `#263449` | Hovered card/button surface |
| `text-primary` | `#F9FAFB` | Main headings and body emphasis |
| `text-secondary` | `#9CA3AF` | Body copy, supporting details |
| `text-muted` | `#6B7280` | Timestamps and tertiary metadata; never essential copy |
| `accent` | `#2563EB` | Primary action, active nav, links |
| `accent-hover` | `#3B82F6` | Hover and focus accent |
| `accent-soft` | `#172554` | Selected badge / subtle accent fill |
| `border` | `#273449` | Card and divider borders |
| `border-strong` | `#3B4A60` | Focus-adjacent / emphasized borders |
| `success` | `#34D399` | Availability indicator paired with text |
| `warning` | `#FBBF24` | “Planned” and “Learning” labels, paired with text |

Use accent blue for interactive elements and at most one dominant action per region. Do not rely on color alone to communicate status. Verify actual rendered text combinations against WCAG AA; use `text-primary` and `text-secondary` on `canvas`/surfaces for body copy.

### Typography

Use Inter for UI/body, with system fallback `Inter, ui-sans-serif, system-ui, sans-serif`. Use JetBrains Mono for labels, technology chips where compact, and eyebrow metadata: `"JetBrains Mono", ui-monospace, monospace`. Load variable WOFF2 files locally when licensed/available; otherwise use a reliable system fallback. Avoid remote font dependence for core rendering.

| Style | Size / line height | Weight | Use |
|---|---:|---:|---|
| Display | 56 / 1.08 desktop; 40 / 1.1 mobile | 700 | Home hero name/value headline |
| H1 | 44 / 1.12; 34 mobile | 700 | Page titles |
| H2 | 32 / 1.2; 26 mobile | 650 | Major sections |
| H3 | 20 / 1.35 | 600 | Cards / subsections |
| Body large | 18 / 1.65 | 400 | Hero lead / intro |
| Body | 16 / 1.65 | 400 | Main copy |
| Small | 14 / 1.5 | 400–500 | Helper copy / card details |
| Label | 12 / 1.4 | 600, mono, uppercase, tracking .08em | Eyebrow, status |

### Spacing, grid, borders, effects

Use a 4px base scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`. Main content max width 1120px, centered; desktop gutters 40px; tablet gutters 32px; mobile gutters 20px. Desktop uses a 12-column grid with 24px gutters; tablet 8 columns / 20px gutters; mobile 4 columns / 16px gutters. Section vertical padding: 88px desktop, 64px tablet, 48px mobile. Content paragraphs max width 68ch.

Radii: `8px` controls/chips; `12px` cards; `16px` large image/panel; pills only for compact status labels. Borders: 1px solid `border`, emphasized at `border-strong`. Shadows: restrained only—card `0 8px 24px rgb(0 0 0 / .16)`; menu `0 16px 40px rgb(0 0 0 / .32)`. Prefer border and tonal separation over shadows.

## 4. Homepage composition

### Desktop, 1440px viewport

Canvas with 1120px content. Sticky 72px header: left wordmark `[Name]` with a small blue square/monogram; center/right links `Work About Skills Experience Contact`; right outlined Resume button. Header background is `surface` at 94% opacity with a bottom border; no blur dependency. Main begins under header with 88px top padding.

Hero is a two-column composition (7/5 split, 48px gap). Left: monospace eyebrow `ASPIRING FULL-STACK DEVELOPER · [CITY/REGION]`; headline `Building useful software from interface to database.` with one phrase in white and a small blue underline/accent. Lead: `I’m [Name], a [year/program] student focused on creating practical web and desktop applications.` Follow with compact availability row: green dot + `Open to internship / OJT opportunities` and optional accurate date range. Actions: primary `Explore projects` with arrow; secondary `View resume` with file icon. Under actions: icon links GitHub and LinkedIn plus email text link. Right: a framed portrait only if a professional image is available; otherwise use a real project interface preview in a 4:3 frame with caption `Selected work · CeresGo`. Never substitute a fake code editor illustration.

After hero, a thin bordered “At a glance” strip with three text cells: `Focus — Full-stack web development`, `Currently building — CeresGo / Municipal SRS / TMC EventEase` (only show accurate current status), `Seeking — Internship / OJT`. This is descriptive, not numerical.

Featured Work section: eyebrow `SELECTED PROJECTS`, H2 `Projects built to solve real workflow problems`, “View all projects” link. Three equal cards on desktop; each card image at 16:10, title, one sentence, 3–5 technology tags, and `Project details` link. Order: CeresGo, Municipal Service Request System, TMC EventEase. Keep screenshot treatment consistent; image is the visual focus.

Below: two-column About teaser (short bio + `More about me`), “Core toolkit” grouped into Frontend / Backend & Data / Tools (text lists, not progress bars), and closing contact callout `Have an internship opportunity or want to discuss a project?` with `Get in touch` and `Download resume` actions. Footer follows.

### Tablet, 768px viewport

Header 64px. Wordmark left, compact menu button right; navigation opens a full-width surface panel under header with 44px row targets. Main gutters 32px, max width 704px. Hero becomes one column: eyebrow, 40px headline, 2–3 line intro, action row (wrap), social row, then project screenshot / portrait full width at 16:10. At-glance strip becomes 3 stacked rows or a 2+1 grid according to text length. Featured cards: 2 columns then third spans full width or remains left aligned; prefer consistent 2-column grid with third card at natural width. About teaser and core toolkit stack. Section spacing 64px.

### Mobile, 390px viewport

Header 60px with `[Name]` wordmark and a 44×44 menu button (Lucide Menu/X); menu opens a simple sheet below header with vertical links, Resume, and visible close control. Use `aria-expanded`, `aria-controls`, Escape to close, and return focus to toggle. Main gutters 20px (350px content). Hero begins 48px below header. Eyebrow wraps naturally. Display headline 40px with max 12–14 words visible across lines; lead 16px. Actions stack full width if labels do not fit in a 2-column row; minimum height 48px. Social links are icon + text or have accessible labels. Preview follows hero actions. Cards use one column, image 16:10, and no hover-only affordance. At-glance rows stack. Footer navigation wraps into 2 columns. No horizontal scrolling at 320px; long project names wrap without clipping.

## 5. Page and section specifications

### About (`/about`)

Page header `A little about me` and lead describing interest in end-to-end software and user-focused problem solving. Main 8/4 layout desktop: biography and career objective on left; bordered profile panel on right containing `[Program / degree]`, `[School]`, `[Expected graduation]`, `[Location]` only when verified. Sections: `How I got into development` (2 short paragraphs), `What I enjoy building` (systems, workflow tools, useful interfaces), `Career objective` (one clear internship-focused paragraph), and `Outside the code` only if the owner supplies authentic detail. Mobile stacks profile panel after lead. Avoid generic “passionate” filler.

### Skills (`/skills`)

Title `Tools I use to build software` and clear legend: `Working knowledge` (solid neutral chip with check icon) and `Currently learning` (outlined amber chip with book icon). Use grouped cards with explicit labels and plain tags, no percentage meters or star ratings:

- Frontend: React, Vite, JavaScript (working knowledge if verified); HTML/CSS and responsive UI (verify proficiency).
- Backend: Laravel (used in CeresGo), Java (used in Municipal SRS). Separate “used in a project” from broad proficiency.
- Databases: MySQL, SQLite (used in CeresGo/Municipal SRS).
- Tools: Git/GitHub, npm, VS Code (confirm before listing).
- Development concepts: MVC, role-based access, CRUD workflows, API integration, offline/online behavior, accessibility (label only those evidenced by actual work).

Include `Currently learning` group only after owner supplies the topics. For supplied technologies, phrase status as “Used in project” until the user confirms independent working proficiency. On mobile, cards stack; chips wrap.

### Projects (`/projects`)

Header `Selected projects` and one-line framing. Three project cards with full-width preview, category (`WEB APP`, `DESKTOP APP`), title, concise problem/solution description, status tag if known (`In progress`, `Completed`, etc. only verified), technology tags, detail link, and external links only where real. Optional filter by All / Web / Desktop only if useful; default All and do not hide projects behind interaction. Empty state for future filtering: `No projects in this category yet` with `Show all projects` action. Mobile cards remain a single column.

### Project detail template

Top has `← All projects`, category/status eyebrow, title, concise one-sentence summary, technology chips, and available external actions (`Live demo`, `Source code`) only when confirmed. Hero screenshot fills container (16:9 desktop; 4:3 or 16:10 mobile). Body uses 7/5 columns: narrative left (`Overview`, `Problem`, `Approach`, `What I learned`); sticky side panel right with role/contribution, stack, and links. Do not claim solo/team attribution until confirmed. A feature matrix can distinguish `Implemented` from `Planned`. Gallery images use consistent aspect ratio with captions; keyboard-accessible lightbox is optional, never required to understand content. Below: previous/next project cards and contact CTA.

#### CeresGo — Bus Management System (`/projects/ceresgo`)

Summary: `A bus operations system supporting administrator, conductor, and inspector workflows, with fare estimation, ticketing, and inspection.` Stack as supplied: React, Vite, Laravel, MySQL, SQLite. Use “offline/online support” only with exact implemented behavior explained.

Feature matrix (brief-provided scope; owner must verify implementation before publishing):

| Status label | Capabilities |
|---|---|
| Supplied as included in current system | Administrator, conductor, and inspector workflows; estimated fare calculation; ticketing; inspection; offline/online support |
| Planned | Only functionality the owner explicitly marks as future work; list each item by name or omit this section |

Design page screenshot sequence: (1) system dashboard / route view, (2) ticket or fare flow, (3) inspector flow, (4) offline/online state only if demonstrable. Explain offline sync behavior, conflict handling, and platform boundaries only after confirmation. Include a small callout: `Offline and online behavior` with an accurate plain-language description. Avoid implying guaranteed background sync if it is not implemented.

#### Municipal Service Request System (`/projects/municipal-srs`)

Summary: `A Java desktop application for managing municipal service requests and their review lifecycle.` Stack supplied: Java Swing, Java, MySQL, MVC. Describe as implemented scope from brief, subject to final verification: authentication, role management, service catalog, request management, approvals, status tracking, and reports. Present workflow as Request submitted → Staff review → Approval / status update → Report; use textual labels so diagram is understandable without color. Gallery: sign-in/role-aware screen, service catalog/request form, staff review/status screen, reports. Show no real citizen data; use synthetic demo content.

#### TMC EventEase (`/projects/tmc-eventease`)

Summary: `A school event management system with administrator event management and student event discovery/registration experiences.` Stack confirmed by brief: React and Vite. Before publishing individual features, check the implementation and name only verified capabilities. Use two gallery groups: `Administrator experience` and `Student experience`; captions should state actual screens and behavior. No claims about backend, database, payments, notifications, or deployment unless confirmed. If registration is only a prototype UI, state that explicitly.

### Experience & Education (`/experience`)

Title `Experience & education`. Build a simple reverse-chronological timeline with `Education`, `Academic projects`, `Independent projects`, `Training`, and `Certifications` groups. Current known entries may include the three supplied portfolio projects under academic/personal project experience, but do not assign dates, institution, roles, or outcomes without owner confirmation. Each entry has title, organization/course only if verified, date range only if verified, 1–2 lines of contribution, and evidence links where available. Coursework and certificates are omitted until supplied; never insert placeholder credentials in the published interface. If there are no verified formal roles, the section begins with `Project experience` and makes no empty employment timeline. Empty state for an unpopulated category: hide the category in production; in a content-management preview show `Add verified [category] details before publishing`.

### Contact (`/contact`)

Header `Let’s connect` and direct statement of internship/OJT availability. Layout: primary contact card with clickable verified email, location at city/region precision only if desired, and response expectations only if true. Secondary cards/rows for GitHub and LinkedIn. Resume action links to accessible PDF with descriptive filename, e.g. `First-Last-Resume.pdf`. Optional contact form is not recommended unless a functioning backend and privacy treatment exist; email link is the default. If form exists, provide labels, inline errors, submission confirmation, and non-JS fallback where feasible. On mobile each row is full width.

### Footer

Surface `#111827`, top border, 3-column desktop: wordmark + `Aspiring full-stack developer seeking internship / OJT`; quick links; social links. Bottom row: `© [year] [Name]` and `Built with React` only after implementation. Mobile becomes stacked with 2-column quick links, then social links. Keep concise and do not use a fake “available 24/7” promise.

## 6. Reusable components

| Component | Specification |
|---|---|
| `SiteHeader` | 72px desktop / 64 tablet / 60 mobile; sticky top; semantic nav; active route marked with text/underline and `aria-current`; menu button at mobile |
| `Button` | Primary blue fill, secondary transparent/border, text link; 44px min height (48 mobile); 12px radius; 16px horizontal padding; icon 16–18px; clear hover/pressed/disabled/focus |
| `ProjectCard` | Surface-raised, 1px border, 12px radius; image 16:10 with `object-fit: cover`; body padding 20px desktop / 16px mobile; title, 2-line summary, tags, detail link |
| `Tag` | Small neutral border/fill; 12–13px text; no forced pill if several tags; wrap naturally |
| `StatusBadge` | Text + optional icon: Available (green), Learning (amber), Planned (amber outlined), In progress only if verified; never color-only |
| `SectionHeading` | Eyebrow mono 12px, H2, optional supporting copy and right aligned action on wide screens |
| `ProjectGallery` | Responsive images with captions, intrinsic dimensions, lazy load below fold; no auto-rotating carousel |
| `SocialLink` | Icon plus accessible text on desktop; icon-only only with accessible name and 44px target |
| `ResumeLink` | Real PDF, opens same tab by default; file type and size may be disclosed; no dead/placeholder link |
| `TimelineEntry` | Vertical line and marker, title, verified date, context, concise detail; line not required to convey order |
| `AvailabilityNote` | Status dot + explicit phrase + optional accurate date range; dot is decorative (`aria-hidden`) |

## 7. Interaction and motion

Navigation links transition color and show a 2px underline/active indicator. Cards lift at most 2px and border lightens on pointer hover; disable lift on touch and honor reduced motion. Buttons have hover, active, focus-visible, and disabled states. External links show an external-link icon and use safe new-tab behavior only where appropriate; indicate new tabs accessibly. Mobile menu traps no focus if implemented as a simple disclosure; manage Escape, close on navigation, and restore focus. Avoid scroll-jacking, parallax, typing animations, auto-playing video, animated counters, or scroll reveal required for content. Framer Motion may provide a 160–220ms opacity/translate entrance for small groups, but content must render immediately and animation must respect `prefers-reduced-motion`.

## 8. Responsive behavior and breakpoints

Use mobile-first layout with breakpoints: base `<640px`, `sm 640px`, `md 768px`, `lg 1024px`, `xl 1280px`. Target review sizes: 390, 768, 1440 CSS pixels. Container: `width: min(100% - 40px, 1120px)` mobile; tablet `min(100% - 64px, 1120px)`; desktop `min(100% - 80px, 1120px)`. At 1024px reduce nav gaps and hero columns; at ≤767px replace desktop nav with menu. Project grids: 3 columns at ≥1100px, 2 columns at 700–1099px, 1 column below 700px. Hero text/image stack at ≤767px. At 390px verify no overflow from tags, long URLs, headings, or tables. Tables in project detail become labeled cards or horizontally contained with accessible scroll cue; prefer no wide tables.

## 9. Accessibility requirements

- Target WCAG 2.2 AA. Maintain minimum 4.5:1 body text contrast and 3:1 large text/UI contrast; verify all actual pairs, particularly muted text and blue actions.
- Semantic landmarks: skip link, header, nav, main, section headings in order, footer. One H1 per route.
- All interactions keyboard reachable; visible 2px `accent-hover` focus ring with 2px offset. Never remove outline without replacement.
- Use links for navigation and buttons for actions. Provide descriptive link names, including for icon-only controls.
- Mobile hit targets at least 44×44px. Do not depend on hover.
- Alt text describes meaningful screenshots (e.g. “CeresGo inspector screen showing a ticket lookup result”); decorative imagery uses empty alt. Captions identify screen context.
- Forms have visible labels, instructions, errors announced with `aria-live`, and preserved values after validation errors.
- Menu has `aria-expanded` and `aria-controls`; route changes move focus sensibly to main heading or announce page title.
- Reduced motion support; no flashing, auto-play, or motion-only status changes.
- Text zoom to 200% and 320px viewport without loss of content/functionality. Ensure long project names and email wrap safely.

## 10. Asset and screenshot requirements

Use real application captures at 1440px or 1280px source width, exported WebP/AVIF with PNG fallback if needed. Capture clean demo data with no personal or sensitive records. Use consistent crop and frame across all project cards (16:10); detail gallery can include 16:9 widescreen captures. Each image needs a concise alt text and visible caption. Do not use stock coding imagery, generic dashboards, fake product UI, or the starter `hero.png` unless it is confirmed as an intended portrait/asset. Provide a real portrait only if the owner wants one. Recommended assets:

| Asset | Filename suggestion | Requirement |
|---|---|---|
| CeresGo card cover | `ceresgo-cover.webp` | Most recognizable implemented screen |
| CeresGo gallery | `ceresgo-fare.webp`, `ceresgo-inspection.webp`, `ceresgo-offline.webp` | Only verified workflows/states |
| Municipal SRS cover/gallery | `municipal-srs-cover.webp`, `municipal-srs-request.webp`, `municipal-srs-review.webp`, `municipal-srs-reports.webp` | Synthetic data, clear desktop UI |
| EventEase cover/gallery | `eventease-cover.webp`, `eventease-admin.webp`, `eventease-student.webp` | Capture real implemented views |
| Resume | `First-Last-Resume.pdf` | Current, accessible PDF |
| Optional portrait | `profile.webp` | Professional, cropped consistently |

Keep source captures outside rendered asset bundle if oversized; optimize images and provide dimensions to avoid layout shift. Provide an intentional fallback thumbnail if a screenshot is missing: neutral labeled panel with project name and “Preview coming soon” only in staging; omit image block in production rather than fabricate it.

## 11. Phase 2 React handoff

### Suggested route/component map

```text
src/
  app/                 router, shared layout, route error / not-found
  components/          SiteHeader, MobileMenu, SiteFooter, Button, Tag,
                       ProjectCard, SectionHeading, AvailabilityNote,
                       SocialLinks, ProjectGallery, TimelineEntry
  pages/               HomePage, AboutPage, SkillsPage, ProjectsPage,
                       ProjectDetailPage, ExperiencePage, ContactPage
  data/                profile.js, projects.js, skills.js, timeline.js
  assets/projects/     optimized verified screenshots
  styles/              design tokens / global styles
```

Use a single project data source keyed by slug for cards and detail pages. Suggested project fields: `slug`, `title`, `category`, `summary`, `description`, `technologies`, `status`, `implementedFeatures`, `plannedFeatures`, `screenshots[{src, alt, caption}]`, `links[{label, href}]`, `role` (verified only), `nextSlug`, `previousSlug`. Use explicit status values, not inferred from missing fields. Keep social/contact/profile content in `profile.js` and make absent fields not render.

### Content needed from owner before release

1. Preferred display name, short biography, program/year, school, expected graduation, and location preference.
2. Verified GitHub, LinkedIn, email, resume PDF, and any live demo/repository links.
3. CeresGo: which listed workflows are implemented now versus planned; exact offline/online behavior; contribution/role; screenshots.
4. Municipal SRS: feature verification, role/contribution, dates if desired, screenshots, source/demo link.
5. TMC EventEase: inspect actual build and confirm technologies/features; screenshots and repository/demo links.
6. Skills separated into working knowledge and currently learning; relevant coursework/training/certifications with evidence and dates.
7. Whether there is a professional portrait and whether a contact form is desired.

### Acceptance checklist for Phase 2

- [ ] Home communicates name, target role, internship/OJT availability, strongest work, resume, and contact without scrolling far.
- [ ] All routes and project-detail links work; current navigation state is announced accessibly.
- [ ] Desktop 1440, tablet 768, and mobile 390 layouts match the responsive rules; no horizontal overflow at 320px.
- [ ] No fabricated biography, statistics, endorsements, experience, credentials, project claims, URLs, or screenshots.
- [ ] Each project has clear implementation/planned status and technology scope.
- [ ] All controls have keyboard, focus, hover/pressed, and touch behavior; reduced-motion preference is honored.
- [ ] Images have dimensions, optimized formats, captions/alt text, and do not shift layout.
- [ ] Contrast and keyboard/screen-reader checks meet the accessibility section.
- [ ] Resume, email, GitHub, LinkedIn, demos, and repositories point to verified destinations.

## 12. Desktop / responsive layout summary

| Region | 1440 desktop | 768 tablet | 390 mobile |
|---|---|---|---|
| Header | Sticky horizontal nav + resume | Wordmark + menu | Wordmark + 44px disclosure button |
| Hero | 7/5 text + real visual | Stacked, full-width visual | Stacked, full-width actions/visual |
| Project grid | 3 columns | 2 columns | 1 column |
| About teaser | 2 columns | Stacked | Stacked |
| Skills | 3–4 category cards | 2 columns | 1 column |
| Detail body | 7/5 narrative + side panel | Main then details panel | One column, details after intro |
| Footer | 3 columns | 2 columns | Stacked, links wrap |

**Design handoff complete.** Phase 2 should begin only after the owner verifies personal content and project implementation status; the visual system and component behavior are ready to implement as written.
