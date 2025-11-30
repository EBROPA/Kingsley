import { rawData } from '../collectionData';
import { Property } from '../types';

// --- Types ---

export interface PropertyFilter {
  search?: string;
  type?: string;
  rooms?: number[];
  priceMin?: string;
  priceMax?: string;
  areaMin?: string;
  areaMax?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse {
  data: Property[];
  total: number;
  page: number;
  totalPages: number;
}

// --- Helpers for Data Parsing ---

const cleanAddress = (addr: string | null) => {
    if (!addr) return '';
    return addr.split('—')[0].trim();
};

const cleanPrice = (price: string | null, name: string) => {
    if (!price) return 'По запросу';
    return price.replace(name, '').trim();
};

const parsePriceValue = (priceStr: string | null): number => {
    if (!priceStr) return 0;
    const match = priceStr.match(/(\d+[.,]?\d*)\s*млн/);
    if (match) {
        return parseFloat(match[1].replace(',', '.'));
    }
    return 0;
};

const getAreaRange = (rooms: any[]) => {
    if (!rooms || rooms.length === 0) return { min: 0, max: 0, label: '—' };
    const areas = rooms.map((r: any) => {
        const match = r.label.match(/от\s([\d,.]+)\sм²/);
        return match ? parseFloat(match[1].replace(',', '.')) : 0;
    }).filter((a: number) => a > 0);
    
    if (areas.length === 0) return { min: 0, max: 0, label: '—' };
    const min = Math.min(...areas);
    const max = Math.max(...areas);
    const label = min === max ? `${min} м²` : `${min} - ${max} м²`;
    return { min, max, label };
};

const getRoomCounts = (rooms: any[]): number[] => {
    if (!rooms) return [];
    return rooms.map((r: any) => r.rooms_count);
};

// --- In-Memory "Database" ---

// We parse the raw data once to simulate a DB table
const dbProperties: (Property & { rawPrice: number, areaMin: number, areaMax: number, availableRooms: number[] })[] = rawData.map((item: any, index: number) => {
    const areaData = getAreaRange(item.rooms);
    const priceStr = cleanPrice(item.main_price, item.name);
    
    // IMAGE PATH MAPPING
    // IMPORTANT: Maps 'metrika_images' from JSON to 'collection_img' in public folder
    const images = (item.images && item.images.length > 0) 
        ? item.images.map((img: string) => {
            if (img.startsWith('http')) return img;
            // Replace 'metrika_images' with 'collection_img'
            let path = img.replace('metrika_images', 'collection_img');
            // Ensure leading slash for absolute public path
            if (!path.startsWith('/')) path = '/' + path;
            return path;
        })
        : ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop']; // Fallback

    return {
        id: index + 1,
        title: item.name,
        category: item.segment || 'Премиум',
        price: priceStr,
        rawPrice: parsePriceValue(item.main_price),
        area: areaData.label,
        areaMin: areaData.min,
        areaMax: areaData.max,
        location: item.metro || cleanAddress(item.address) || 'Москва',
        address: cleanAddress(item.address) || 'Москва',
        metro: item.metro,
        lots: item.rooms.length > 0 ? item.rooms.length : 1,
        availableRooms: getRoomCounts(item.rooms),
        description: `Жилой комплекс "${item.name}" — это воплощение современного стиля и статуса. ${item.metro ? `Расположен в престижной локации рядом с метро ${item.metro}.` : ''} Проект предлагает продуманные планировки, панорамное остекление и доступ к приватной инфраструктуре для резидентов.`,
        features: item.rooms.length > 0 
            ? item.rooms.slice(0, 4).map((r: any) => r.label.split(' от')[0]) 
            : ["Панорамные виды", "Высокие потолки", "Приватный двор"],
        images: images
    };
});

// --- API Service Methods ---

export const propertyService = {
  /**
   * Simulates fetching properties from a backend with filtering and pagination.
   */
  async getProperties(filter: PropertyFilter): Promise<PaginatedResponse> {
    // Artificial small delay to smooth out UI transitions (like a real API)
    await new Promise(resolve => setTimeout(resolve, 100)); 

    let filtered = dbProperties;

    // 1. Search (Name or Location)
    if (filter.search) {
      const lowerQuery = filter.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(lowerQuery) || 
        p.location.toLowerCase().includes(lowerQuery)
      );
    }

    // 2. Price Filter
    const minP = filter.priceMin ? parseFloat(filter.priceMin) : 0;
    const maxP = filter.priceMax ? parseFloat(filter.priceMax) : Infinity;
    if (minP > 0 || maxP < Infinity) {
      filtered = filtered.filter(p => p.rawPrice >= minP && p.rawPrice <= maxP && p.rawPrice > 0);
    }

    // 3. Area Filter
    const minA = filter.areaMin ? parseFloat(filter.areaMin) : 0;
    const maxA = filter.areaMax ? parseFloat(filter.areaMax) : Infinity;
    if (minA > 0 || maxA < Infinity) {
      filtered = filtered.filter(p => p.areaMax >= minA && p.areaMin <= maxA);
    }

    // 4. Rooms Filter
    if (filter.rooms && filter.rooms.length > 0) {
      filtered = filtered.filter(p => 
        p.availableRooms.some(r => filter.rooms!.includes(r))
      );
    }

    // 5. Pagination
    const page = filter.page || 1;
    const limit = filter.limit || 12;
    const total = filtered.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const data = filtered.slice(startIndex, startIndex + limit);

    return {
      data,
      total,
      page,
      totalPages
    };
  },

  /**
   * Quick search suggestions
   */
  async getSuggestions(query: string): Promise<Property[]> {
    if (!query) return [];
    const lowerQuery = query.toLowerCase();
    return dbProperties
      .filter(p => p.title.toLowerCase().includes(lowerQuery))
      .slice(0, 5);
  }
};