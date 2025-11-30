import React from 'react';

export type PageView = 'home' | 'collections' | 'districts' | 'services' | 'about' | 'property' | 'blog' | 'blog-post' | 'user-agreement' | 'privacy-policy' | 'consent';

export interface District {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Property {
  id: number;
  title: string;
  category: string;
  price: string;
  area: string;
  location: string;
  lots: number;
  images: string[];
  description: string;
  features: string[];
  address?: string;
  metro?: string;
  rawPrice?: number;
  areaMin?: number;
  areaMax?: number;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content?: string; // HTML content
  author?: string;
  readTime?: string;
}