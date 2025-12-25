export interface ProjectSection {
  heading: string;
  content: string[];
  images?: string[];
}

export interface ProjectDetails {
  year: string;
  role: string;
  techStack: string[];
  duration?: string;
  team?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail?: string;
  tags?: string[];

  // Detailed content for project pages
  details?: ProjectDetails;
  heroImage?: string;
  sections?: ProjectSection[];
  results?: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  // Coding Projects
  {
    id: 'personal-website',
    title: 'Personal Portfolio',
    category: 'Web Development',
    description: 'A modern, interactive portfolio website built with React and Vite, featuring a warm light theme and vertical scroll narrative.',
    thumbnail: 'https://placehold.co/600x400/E5E7EB/6B7280?text=Project+Image',
    tags: ['WEB APP', 'TypeScript', 'Vite']
  },

  // Engineering Projects
  {
    id: 'mircobridge-startup',
    title: 'MircoBridge StartUp',
    category: 'Full Stack Development',
    description: 'A full-stack mircointernship platform connecting students with Startup companies for internships.',
    thumbnail: 'https://placehold.co/600x400/E5E7EB/6B7280?text=MicroBridge',
    tags: ['WEB APP', 'React', 'Node.js', 'GoLang', 'PostgreSQL'],
    details: {
      year: '2025',
      role: 'Full Stack Developer',
      techStack: ['Node.js', 'React', 'GoLang', 'PostgreSQL'],
      duration: 'Ongoing',
      team: 'Startup Team'
    },
    sections: [
      {
        heading: 'Overview',
        content: [
          'MircoBridge is a platform designed to bridge the gap between students seeking practical experience and startups in need of talent. By offering micro-internships, the platform facilitates meaningful connections and skill development.'
        ]
      }
    ]
  },
  /*{
    id: 'bookshelf-speakers',
    title: 'Bookshelf Speakers',
    category: 'Engineering / Audio',
    description: 'High-fidelity bookshelf speakers designed with advanced acoustic simulations and CAD modeling.',
    thumbnail: 'https://placehold.co/600x400/E5E7EB/6B7280?text=CAD+Render',
    tags: ['CAD', 'Acoustics', 'Product Design'],

    // Detailed content
    heroImage: 'https://placehold.co/1200x600/E5E7EB/6B7280?text=Speaker+CAD+Render',
    details: {
      year: '2024',
      role: 'Designer & Engineer',
      techStack: ['Fusion 360', 'REW (Room EQ Wizard)', 'Acoustic Simulation', 'Woodworking'],
      duration: '6 months',
      team: 'Solo Project'
    },
    sections: [
      {
        heading: 'The Problem',
        content: [
          'High-quality bookshelf speakers on the market are prohibitively expensive, often costing $500-2000 per pair. For audio enthusiasts and home recording studios, this creates a significant barrier to entry for accurate sound reproduction.',
          'Commercial speakers also come with compromises: manufacturers optimize for mass production rather than acoustic perfection, use lower-grade components to hit price points, and offer limited customization for specific room acoustics.',
          'I wanted to create a speaker system that could compete with commercial offerings at a fraction of the cost, while gaining hands-on experience with acoustic engineering principles and CAD design.'
        ],
        images: ['https://placehold.co/800x500/E5E7EB/6B7280?text=Problem+Visualization']
      },
      {
        heading: 'Solution Approach',
        content: [
          'Design a 2-way bookshelf speaker system using proven driver components and optimized cabinet design. The solution focuses on three key areas:',
          '**Acoustic Design:** Calculate optimal cabinet volume, port tuning, and crossover frequency using established Thiele-Small parameters and acoustic modeling software.',
          '**Precision Manufacturing:** Use CAD modeling in Fusion 360 to design cabinet geometry that minimizes internal resonances and standing waves, with careful attention to baffle dimensions and driver mounting.',
          '**Measurement-Driven Tuning:** Employ REW (Room EQ Wizard) for frequency response analysis to validate design decisions and fine-tune the crossover network.'
        ],
        images: ['https://placehold.co/800x500/E5E7EB/6B7280?text=Solution+Diagram']
      },
      {
        heading: 'Design Process',
        content: [
          '**Phase 1: Component Selection** - Researched and selected a 5.25" woofer and 1" silk dome tweeter based on published Thiele-Small parameters. Calculated ideal cabinet volume (15L) and port dimensions for optimal bass response down to 50Hz.',
          '**Phase 2: CAD Modeling** - Created detailed 3D models in Fusion 360, including: cabinet dimensions (18" H x 8" W x 10" D), precise driver cutouts, port tube placement, internal bracing structure for rigidity, and panel thickness optimization (3/4" MDF).',
          '**Phase 3: Crossover Design** - Designed a 2nd order Butterworth crossover network at 2.5kHz using passive components. Simulated frequency response and phase alignment to ensure smooth handoff between drivers.',
          '**Phase 4: Prototyping & Testing** - Built prototype cabinets, conducted frequency response measurements in-room, and iteratively refined port length and crossover component values based on measured data.'
        ],
        images: [
          'https://placehold.co/800x500/E5E7EB/6B7280?text=CAD+Model+1',
          'https://placehold.co/800x500/E5E7EB/6B7280?text=CAD+Model+2',
          'https://placehold.co/800x500/E5E7EB/6B7280?text=Frequency+Response+Graph'
        ]
      },
      {
        heading: 'Technical Specifications',
        content: [
          '**Frequency Response:** 50Hz - 20kHz (±3dB)',
          '**Impedance:** 8Ω nominal',
          '**Sensitivity:** 87dB @ 1W/1m',
          '**Crossover:** 2.5kHz, 2nd order Butterworth',
          '**Cabinet Volume:** 15 liters (sealed with bass reflex port)',
          '**Dimensions:** 457mm x 203mm x 254mm (H x W x D)',
          '**Weight:** 6.8kg per speaker'
        ]
      }
    ],
    results: [
      'Achieved flat frequency response (±2.5dB from 60Hz-18kHz) comparable to commercial speakers in the $800-1200 range',
      'Total build cost: ~$250 for the pair, representing 70% cost savings vs. equivalent commercial options',
      'Gained practical experience with acoustic principles, CAD modeling, and measurement-driven design iteration',
      'Successfully validated that DIY approach can match commercial performance with proper engineering discipline'
    ],
    gallery: [
      'https://placehold.co/600x400/E5E7EB/6B7280?text=Final+Build+1',
      'https://placehold.co/600x400/E5E7EB/6B7280?text=Final+Build+2',
      'https://placehold.co/600x400/E5E7EB/6B7280?text=Internal+View',
      'https://placehold.co/600x400/E5E7EB/6B7280?text=Testing+Setup'
    ]
  },
  {
    id: 'audio-analyzer',
    title: 'Audio Frequency Analyzer',
    category: 'Engineering / Audio',
    description: 'Digital signal processing tool for analyzing audio frequency response and room acoustics.',
    thumbnail: 'https://placehold.co/600x400/E5E7EB/6B7280?text=Project+Image',
    tags: ['DSP', 'Python', 'Signal Processing']
  }*/
];
