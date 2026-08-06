export type Tool = {
  name: string;
  mark: string;
  url: string;
  tag: string;
  usage: string;
  free?: boolean;
};

export type Category = {
  slug: string;
  title: string;
  mark: string;
  blurb: string;
  tools: Tool[];
};

export const categories: Category[] = [
  {
    slug: "video",
    title: "VIDEO TOOLS",
    mark: "VID",
    blurb: "Generate, edit and cut video with AI.",
    tools: [
      { name: "Veed.io", mark: "VEED", url: "https://www.veed.io", tag: "VIDEO EDITOR", usage: "Edit videos in the browser: trim, subtitle and resize clips for any platform." },
      { name: "PixVerse", mark: "PXV", url: "https://pixverse.ai", tag: "VIDEO GENERATION", usage: "Turn text prompts or still images into short AI video clips." },
      { name: "Gemini", mark: "GEM", url: "https://gemini.google.com", tag: "AI VIDEO & MORE", usage: "Generate video ideas, scripts and Veo-powered clips from a single prompt." },
      { name: "Google Vids", mark: "VIDS", url: "https://workspace.google.com/products/vids/", tag: "VIDEO CREATION", usage: "Create polished work and promo videos with AI assists and templates." },
      { name: "Flow", mark: "FLW", url: "https://labs.google/flow", tag: "AI FILMMAKING", usage: "Direct AI films scene-by-scene with Google's Veo filmmaking tool." },
      { name: "Lovable", mark: "LOV", url: "https://lovable.dev", tag: "AI BUILDER", usage: "Build video landing pages and web apps by chatting with AI." },
      { name: "Canva AI", mark: "CAI", url: "https://www.canva.com/ai", tag: "VIDEO & DESIGN", usage: "Generate and edit social-ready videos with Canva's AI magic tools." },
      { name: "Sora", mark: "SOR", url: "https://sora.com", tag: "VIDEO GENERATION", usage: "Generate cinematic clips from text with OpenAI's video model." },
      { name: "Runway", mark: "RW", url: "https://runwayml.com", tag: "VIDEO & VFX", usage: "Generate, extend and VFX-edit footage with Runway's Gen AI models." },
    ],
  },
  {
    slug: "image",
    title: "IMAGE GEN",
    mark: "IMG",
    blurb: "Images, graphics and brand visuals on demand.",
    tools: [
      { name: "Canva AI", mark: "CAI", url: "https://www.canva.com/ai", tag: "IMAGE & DESIGN", usage: "Generate images and drop them straight into social post designs." },
      { name: "Gemini", mark: "GEM", url: "https://gemini.google.com", tag: "IMAGE GENERATION", usage: "Create and edit images conversationally with Google's AI." },
      { name: "ChatGPT", mark: "GPT", url: "https://chatgpt.com", tag: "IMAGE GENERATION", usage: "Generate images, mockups and graphics with GPT's image tools." },
      { name: "Claude", mark: "CLD", url: "https://claude.ai", tag: "AI ASSISTANT", usage: "Write creative briefs, captions and campaign copy to pair with visuals." },
      { name: "XField", mark: "XF", url: "https://x.ai", tag: "IMAGE GENERATION", usage: "Generate stylized AI images from text prompts." },
      { name: "Meta AI", mark: "MTA", url: "https://www.meta.ai", tag: "IMAGE GENERATION", usage: "Free image generation inside WhatsApp, Instagram and the web.", free: true },
      { name: "Gemini Watermark Remover", mark: "GWR", url: "https://geminiwatermarkremover.io/", tag: "WATERMARK REMOVER", usage: "Clean Gemini watermarks off generated images for final exports.", free: true },
      { name: "Midjourney", mark: "MJ", url: "https://www.midjourney.com", tag: "AI ART", usage: "Create high-end AI art and concept visuals from prompts." },
    ],
  },
  {
    slug: "web-design",
    title: "WEB DESIGN",
    mark: "WEB",
    blurb: "Design, generate and ship interfaces.",
    tools: [
      { name: "Figma", mark: "FIG", url: "https://www.figma.com", tag: "UI DESIGN", usage: "Design and prototype interfaces collaboratively in the browser." },
      { name: "v0", mark: "V0", url: "https://v0.dev", tag: "WEB GENERATION", usage: "Generate production React + Tailwind UI from text prompts." },
      { name: "Lovable", mark: "LOV", url: "https://lovable.dev", tag: "AI BUILDER", usage: "Chat your way to a working, deployable web app." },
      { name: "Framer", mark: "FRM", url: "https://www.framer.com", tag: "SITE BUILDER", usage: "Design and publish responsive marketing sites fast." },
    ],
  },
  {
    slug: "wordpress",
    title: "WORDPRESS TEMPLATES",
    mark: "WP",
    blurb: "Find the best free WordPress templates.",
    tools: [
      { name: "WordPress.org Themes", mark: "WP", url: "https://wordpress.org/themes/", tag: "OFFICIAL DIRECTORY", usage: "Browse thousands of free official WordPress templates by niche and feature.", free: true },
      { name: "Astra", mark: "AST", url: "https://wpastra.com", tag: "STARTER TEMPLATES", usage: "Import free lightweight starter templates for any kind of site.", free: true },
      { name: "GeneratePress", mark: "GP", url: "https://generatepress.com", tag: "FAST THEME", usage: "Use the free theme and template library built for speed.", free: true },
      { name: "OceanWP", mark: "OCW", url: "https://oceanwp.org", tag: "MULTIPURPOSE", usage: "Pick free demo templates for shops, blogs and business sites.", free: true },
    ],
  },
  {
    slug: "voice",
    title: "VOICE TOOLS",
    mark: "VOX",
    blurb: "Text-to-speech, voice change and vocal cleanup.",
    tools: [
      { name: "TTSMaker", mark: "TTS", url: "https://ttsmaker.com", tag: "TEXT TO SPEECH", usage: "Convert text to natural speech free in 100+ languages, no signup.", free: true },
      { name: "ElevenLabs", mark: "11L", url: "https://elevenlabs.io", tag: "AI VOICE", usage: "Generate lifelike AI voiceovers and clone voices for narration." },
      { name: "Voicemod", mark: "VCM", url: "https://www.voicemod.net", tag: "VOICE CHANGER", usage: "Change your voice in real time for streams, calls and games. Free.", free: true },
      { name: "Vocal Remover", mark: "VR", url: "https://vocalremover.org", tag: "VOCAL SPLITTER", usage: "Split vocals from music free in the browser for edits and karaoke.", free: true },
    ],
  },
  {
    slug: "downloader",
    title: "VIDEO DOWNLOADERS",
    mark: "DL",
    blurb: "Free, open-source video downloading, no shady third parties.",
    tools: [
      { name: "Cobalt", mark: "CBT", url: "https://cobalt.tools", tag: "OPEN SOURCE", usage: "Paste a link and download video or audio from major platforms, free with no ads.", free: true },
      { name: "yt-dlp", mark: "YTD", url: "https://github.com/yt-dlp/yt-dlp", tag: "OPEN SOURCE CLI", usage: "The open-source command-line downloader for power users. Free forever.", free: true },
    ],
  },
  {
    slug: "converter",
    title: "PDF TO WORD",
    mark: "PDF",
    blurb: "Convert PDFs into editable Word documents.",
    tools: [
      { name: "PDF24", mark: "P24", url: "https://tools.pdf24.org/en/pdf-to-word", tag: "CONVERTER", usage: "Convert PDF to Word 100% free with no file limits.", free: true },
      { name: "iLovePDF", mark: "ILP", url: "https://www.ilovepdf.com/pdf_to_word", tag: "CONVERTER", usage: "Drag, drop and convert PDFs to editable Word docs free in seconds.", free: true },
      { name: "Adobe PDF to Word", mark: "ADB", url: "https://www.adobe.com/acrobat/online/pdf-to-word.html", tag: "CONVERTER", usage: "Adobe's free online converter keeps formatting intact.", free: true },
    ],
  },
  {
    slug: "bg-remover",
    title: "BG REMOVER",
    mark: "BG",
    blurb: "Cut backgrounds out of any image in one click.",
    tools: [
      { name: "BG Remover", mark: "BGR", url: "https://www.remove.bg", tag: "BACKGROUND REMOVAL", usage: "Upload an image and get a clean transparent cutout automatically. Free.", free: true },
      { name: "Adobe Express BG Remover", mark: "AXB", url: "https://www.adobe.com/express/feature/image/remove-background", tag: "BACKGROUND REMOVAL", usage: "Free one-click background removal with quick export.", free: true },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
