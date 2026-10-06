import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  schema?: Record<string, unknown> | null;
}

const DEFAULT_TITLE = 'Unique Electrodes | Copper Bonded Earthing Electrode Manufacturer Surat';
const DEFAULT_DESC =
  "India's trusted manufacturer of Copper Bonded Earthing Electrodes, GI Earthing Rods, Earth Enhancement Compound and Lightning Arresters. ISO 9001:2015 certified. Based in Surat, Gujarat.";
const DEFAULT_KEYWORDS =
  'copper bonded earthing electrode, earthing electrode manufacturer India, GI earthing rod Surat, earth enhancement compound, lightning arrester manufacturer, IS:3043 earthing, unique electrodes';
const BASE_URL = 'https://www.uniqueelectrodes.com';

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function setDynamicSchema(schemaObj: Record<string, unknown> | null) {
  const SCRIPT_ID = 'seo-page-schema';
  const existing = document.getElementById(SCRIPT_ID);
  if (existing) {
    existing.remove();
  }
  if (schemaObj) {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaObj);
    document.head.appendChild(script);
  }
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage,
  schema,
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // 1. Dynamic Window Title
    const formattedTitle = title
      ? title.includes('Unique Electrodes')
        ? title
        : `${title} | Unique Electrodes Surat`
      : DEFAULT_TITLE;
    document.title = formattedTitle;

    // 2. Dynamic Meta Description and Keywords
    const descContent = description || DEFAULT_DESC;
    const keywordsContent = keywords || DEFAULT_KEYWORDS;
    const canonicalUrl = canonical || `${BASE_URL}${location.pathname}`;

    setMeta('name', 'description', descContent);
    setMeta('name', 'keywords', keywordsContent);

    // 3. OpenGraph & Social Sharing Meta Tags
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', descContent);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    if (ogImage) {
      setMeta('property', 'og:image', ogImage);
      setMeta('name', 'twitter:image', ogImage);
    }

    // 4. Twitter Cards
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', descContent);

    // 5. Canonical Tag
    setCanonical(canonicalUrl);

    // 6. JSON-LD Dynamic Schema
    setDynamicSchema(schema || null);
  }, [title, description, keywords, canonical, ogType, ogImage, schema, location.pathname]);

  return null;
}
