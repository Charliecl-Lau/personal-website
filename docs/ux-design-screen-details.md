# Detailed UI Design Description: Screen by Screen

**Project:** Personal_Website  
**Design Direction:** Vertical Narrative Scroll (Light & Warm Theme)  
**Date:** 2025-12-23

---

## Overview

This document provides a granular, screen-by-screen description of the specific UI elements, layouts, and interactions for the Personal Website. It serves as a blueprint for implementation, expanding on the high-level UX Design Specification.

**Global Visual Language:**
- **Background:** Continuous smooth gradient from Pure White (`#FFFFFF`) at the top to Warm Pale Yellow (`#FFFEF5`) at the bottom.
- **Accent Color:** Electric Azure (`#007AFF`) for all interactive elements (links, buttons, glows).
- **Typography:** `Inter` (UI/Body) and `JetBrains Mono` (Code/Tech details).
- **Corner Radius:** `16px` for cards, `8px` for buttons.

---

## Screen 1: The Hero (Landing)

**Goal:** The "30-Second Hook". Immediate clarity of identity and role.

### Layout
- **Container:** Full viewport height (`min-h-screen`).
- **Alignment:** Content centered vertically and horizontally (Desktop) or Left-aligned with generous top padding (Mobile).
- **Width:** Max-width `800px` for text content.

### UI Elements
1.  **Main Heading (`h1`):**
    -   **Text:** "Hi, I'm Charlie."
    -   **Style:** `Inter`, Extra Bold (800), Dark Grey (`#111827`).
    -   **Size:** `4rem` (Desktop), `2.5rem` (Mobile).
    -   **Animation:** Staggered fade-up entry (0s delay).

2.  **Tagline / Sub-headline (`h2`):**
    -   **Text:** "Building digital products and engineering physical solutions."
    -   **Style:** `Inter`, Medium (500), Medium Grey (`#4B5563`).
    -   **Size:** `1.5rem` (Desktop), `1.125rem` (Mobile).
    -   **Animation:** Staggered fade-up entry (0.1s delay).

3.  **Role Pills (Optional):**
    -   **Elements:** "Full Stack Dev", "Mechanical Engineer".
    -   **Style:** Pill shape, semi-transparent white bg with subtle border, monotonic text.

4.  **Scroll Indicator:**
    -   **Icon:** Chevrons down (`<svg>`).
    -   **Position:** Fixed at bottom center (2rem from bottom).
    -   **Style:** Azure Blue (`#007AFF`), animating up/down (bounce).
    -   **Interaction:** Tapping smooth-scrolls to "About" section.

### Interactions
-   **Page Load:** Elements cascade in (Heading -> Tagline -> Indicator).
-   **Scroll:** Background gradient perceptibly starts warming up as user leaves this section.

---

## Screen 2: About Me (Narrative)

**Goal:** Establish human connection and "Project Manager" communication skills.

### Layout
-   **Spacing:** `120px` padding top/bottom (Desktop), `64px` (Mobile).
-   **Container:** Narrow text column (Max-width `65ch`) for optimal readability.
-   **Alignment:** Centered.

### UI Elements
1.  **Section Header:**
    -   **Text:** "About Me"
    -   **Style:** `Inter`, Bold (700), `2rem`, Dark Grey.
    -   **Decoration:** Small Azure underline or dot to signify section start.

2.  **Narrative Body Text:**
    -   **Content:** 2-3 paragraphs. Friendly, professional but conversational.
    -   **Style:** `Inter`, Regular (400), `1.125rem`, Relaxed line-height (`1.6`). Cohoerant Dark Grey (`#374151`).
    -   **Highlighting:** Key phrases (e.g., "bridging hardware and software") highlighted in **bold** or dark text color.

3.  **Profile Visual (Optional):**
    -   **Style:** Circular or Soft-square Avatar.
    -   **Effect:** Grayscale image that transitions to color on hover.

### Interactions
-   **Entry:** Fade in as user scrolls into view.

---

## Screen 3: Coding Projects (The Grid)

**Goal:** Proof of technical capability (Software).

### Layout
-   **Spacing:** `120px` padding top/bottom.
-   **Grid:**
    -   *Desktop:* 2 or 3 columns (Masonry or strict grid).
    -   *Mobile:* Single column vertical stack.
    -   *Gap:* `32px` (Desktop), `24px` (Mobile).

### UI Elements
1.  **Section Header:**
    -   **Text:** "Selected Work" or "Coding Projects".

2.  **Project Card Component:**
    -   **Container:** White (`#FFFFFF`) background, `16px` radius, `1px` border (`rgba(0,0,0,0.05)`).
    -   **Shadow:** Soft, warm shadow `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`.
    -   **Thumbnail Area (Top):**
        -   Aspect Ratio: `16:9` or `4:3`.
        -   Content: High-fidelity screenshots of the app.
        -   Overlay: Subtle inner border.
    -   **Content Area (Bottom):**
        -   **Title:** `h3`, `Inter` Bold, `1.25rem`.
        -   **Description:** 2 lines max, truncated.
        -   **Tech Integration:** Row of badges (e.g., "React", "TypeScript").
            -   *Badge Style:* `JetBrains Mono`, `0.75rem`, Light Blue bg (`#E0F2FE`), Azure text (`#007AFF`).

3.  **Links:**
    -   **Icons:** GitHub and Live Demo icons in the card footer or visible on hover.

### Interactions
-   **Card Hover (Desktop):**
    -   Card lifts (`translateY(-4px)`).
    -   Shadow deepens and turns slightly Azure-tinted.
    -   Border color becomes Azure (`#007AFF`).
-   **Tap (Mobile):** Card scales down slightly (`0.98`) to give tactile feedback.

---

## Screen 4: Engineering Projects (The Showcase)

**Goal:** Differentiate with "Deep" Engineering (Hardware/CAD).

### Layout
-   **Style:** "Feature" Layout (Full width break-out or large container).
-   **Background:** Slightly warmer panel (`#FFFDF0`) to distinguish from coding projects.

### UI Elements
1.  **Section Header:**
    -   **Text:** "Engineering & Design".

2.  **Featured Project: Bookshelf Speakers:**
    -   **Layout (Desktop):** Split view (50% Image / 50% Text).
    -   **Layout (Mobile):** Image stacked on top of text.
    -   **Visual:** Large, photorealistic CAD render of the speaker assembly (exploded view or hero shot).
        -   *Style:* No background or matching warm background to blend in.
    -   **Content:**
        -   **Title:** "High-Fidelity Audio: Bookshelf Speaker Design".
        -   **Tags:** "CAD", "Acoustics", "Manufacturing".
        -   **Description:** "End-to-end mechanical design and acoustic simulation..."
        -   **Call to Action:** "Read Report ->" (Text link, Azure color).

### Interactions
-   **Parallax (Optional):** The CAD image scrolls slightly slower than the page for depth.
-   **Hover:** Hovering the image triggers a "rotation" or "explode" animation if using a sprite sheet/video, otherwise a subtle zoom.

---

## Screen 5: Footer (Connect)

**Goal:** Frictionless path to contact.

### Layout
-   **Spacing:** `80px` padding top, `40px` padding bottom.
-   **Alignment:** Centered.

### UI Elements
1.  **Call to Action:**
    -   **Text:** "Let's build something together."
    -   **Style:** `Inter`, SemiBold, `1.5rem`.

2.  **Social Links Row:**
    -   **Icons:** GitHub, LinkedIn, Email (`mailto:`).
    -   **Size:** `24px` x `24px`.
    -   **Color:** Neutral Grey (`#6B7280`).
    -   **Spacing:** `32px` gap between icons.

3.  **Copyright:**
    -   **Text:** "© 2025 Charlie. Designed & Built from scratch."
    -   **Style:** `Inter`, `0.875rem`, Light Grey (`#9CA3AF`).

### Interactions
-   **Icon Hover:**
    -   Icon scales up (`1.2`).
    -   Color fill changes to Azure (`#007AFF`).
    -   Tooltip appears: "GitHub", "LinkedIn", "Copy Email".

---
