# Implementation Plan: Personal Website V2 (Vertical Scroll Redesign)

Based on the [UX Design Specification](./ux-design-specification.md) (Direction B: Vertical Narrative Scroll).

## 1. Design System & CSS (src/index.css)

We will switch from the default dark slate theme to the new Light & Warm theme.

### Tokens to Implement
*   **Colors:**
    *   `--color-bg-start`: `#FFFFFF`
    *   `--color-bg-end`: `#FFFEF5`
    *   `--color-accent-primary`: `#007AFF` (Electric Azure)
    *   `--color-text-primary`: `#1a1a1a`
    *   `--color-text-secondary`: `#4B5563`
    *   `--color-card-bg`: `#FFFFFF`
    *   `--color-card-border`: `rgba(0,0,0,0.08)`
*   **Shadows:**
    *   `--shadow-sm`: `0 2px 8px rgba(0,0,0,0.06)`
    *   `--shadow-md`: `0 8px 16px rgba(0,0,0,0.12)` (Hover state)
*   **Typography:**
    *   Ensure `Inter` font is loaded.
    *   Base size `16px`.

## 2. Component Implementation (src/components/)

We need to create/update the following components to match the vertical flow.

### A. `HeroSection.tsx`
*   **Content:** "Hi, I'm Charlie" + Subtitle.
*   **Style:** Full height/padded section, centered text.
*   **Interaction:** Scroll down indicator arrow.

### B. `AboutSection.tsx`
*   **Content:** Personal narrative paragraph (max-width 65ch).
*   **Style:** Clean typography, readable line-height (1.6).

### C. `ProjectCard.tsx` (Reusable)
*   **Props:** `title`, `description`, `tags` (string[]), `image`, `onClick`.
*   **Style:**
    *   White background, rounded-2xl (16px).
    *   Hover: TranslateY(-4px), Shadow-MD, Border-Accent.
    *   Tags: Pill shape, accent color text.

### D. `EngineeringSection.tsx`
*   **Content:** Header + Featured "Bookshelf Speaker" card (larger variant).
*   **Assets:** Placeholder for CAD render if not available.

### E. `FooterIcons.tsx`
*   **Content:** GitHub, LinkedIn, Mail icons.
*   **Style:** Row layout, neutral gray icons turning blue on hover.

## 3. Page Assembly (src/pages/LandingPage.tsx)

*   **Structure:**
    ```tsx
    <div className="app-container">
      <HeroSection />
      <AboutSection />
      <div id="projects" className="section-padding">
        <SectionHeader title="Coding Projects" />
        <div className="projects-grid">
           {/* Map project cards */}
        </div>
      </div>
      <div id="engineering" className="section-padding">
        <SectionHeader title="Engineering Projects" />
        <EngineeringSection />
      </div>
      <FooterIcons />
    </div>
    ```
*   **Global Layout:**
    *   Apply the background gradient to the main container.
    *   Ensure smooth scrolling is enabled.

## 4. Execution Steps

1.  **CSS Reset:** Update `index.css` with new variables and reset body background.
2.  **Shared Components:** Build `ProjectCard` and `SectionHeader`.
3.  **Sections:** Build Hero, About, Engineering blocks.
4.  **Assembly:** Compose `LandingPage.tsx`.
5.  **Review:** Check mobile responsiveness and hover states.
