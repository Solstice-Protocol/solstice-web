import { 
  BookOpen, 
  Download, 
  Zap, 
  Code, 
  Puzzle, 
  FileCode, 
  Settings, 
  AlertCircle, 
  Shield, 
  Gauge 
} from 'lucide-react';

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const navigationItems: NavigationItem[] = [
  { 
    id: 'overview', 
    label: 'Overview', 
    path: '/documentation',
    icon: BookOpen
  },
  { 
    id: 'installation', 
    label: 'Installation', 
    path: '/documentation/installation',
    icon: Download
  },
  { 
    id: 'quick-start', 
    label: 'Quick Start', 
    path: '/documentation/quick-start',
    icon: Zap
  },
  { 
    id: 'api-reference', 
    label: 'API Reference', 
    path: '/documentation/api-reference',
    icon: Code
  },
  { 
    id: 'integration-guide', 
    label: 'Integration Guide', 
    path: '/documentation/integration-guide',
    icon: Puzzle
  },
  { 
    id: 'examples', 
    label: 'Examples', 
    path: '/documentation/examples',
    icon: FileCode
  },
  { 
    id: 'configuration', 
    label: 'Configuration', 
    path: '/documentation/configuration',
    icon: Settings
  },
  { 
    id: 'error-handling', 
    label: 'Error Handling', 
    path: '/documentation/error-handling',
    icon: AlertCircle
  },
  { 
    id: 'security', 
    label: 'Security', 
    path: '/documentation/security',
    icon: Shield
  },
  { 
    id: 'performance', 
    label: 'Performance', 
    path: '/documentation/performance',
    icon: Gauge
  },
];
