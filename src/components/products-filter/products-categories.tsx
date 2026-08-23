import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, CircularProgress, Collapse, InputAdornment, List, ListItemButton, ListItemText, TextField } from '@mui/material';
import { Colors } from '@/styles/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

type CategoryNode = {
     id: string;
     title: string;
     link?: string;
     children?: CategoryNode[];
};

type CategoryTreeItemProps = {
     node: CategoryNode;
     level: number;
     expandedIds: Set<string>;
     onToggle: (id: string) => void;
     onNavigate: (link?: string) => void;
     forceExpand: boolean;
     currentPath: string;
};

type ProductsAllCategoriesProps = {
     onCategoryNavigate?: () => void;
};

const filterTree = (nodes: CategoryNode[], query: string): CategoryNode[] => {
     if (!query.trim()) return nodes;

     const normalizedQuery = query.trim().toLowerCase();

     return nodes
          .map((node) => {
               const titleMatch = node.title.toLowerCase().includes(normalizedQuery);
               const filteredChildren = Array.isArray(node.children) ? filterTree(node.children, query) : [];

               if (titleMatch || filteredChildren.length > 0) {
                    return {
                         ...node,
                         children: filteredChildren,
                    };
               }

               return null;
          })
          .filter(Boolean) as CategoryNode[];
};

const CategoryTreeItem: React.FC<CategoryTreeItemProps> = ({
     node,
     level,
     expandedIds,
     onToggle,
     onNavigate,
     forceExpand,
     currentPath,
}) => {
     const children = Array.isArray(node.children) ? node.children : [];
     const hasChildren = children.length > 0;
     const isOpen = forceExpand || expandedIds.has(node.id);
     const isActive = !hasChildren && node.link ? currentPath === node.link || currentPath === node.link.replace(/\/$/, '') : false;

     return (
          <>
               <ListItemButton
                    onClick={() => hasChildren ? onToggle(node.id) : onNavigate(node.link)}
                    sx={{
                         pl: 1.5 + level * 1.6,
                         pr: 1,
                         py: 0.7,
                         borderRadius: 1,
                         minHeight: 40,
                         '&:hover': {
                              backgroundColor: Colors.primary.lighter,
                         },
                    }}
               >
                    {hasChildren ? (
                         isOpen ? (
                              <ExpandMoreIcon sx={{ color: Colors.primary.main, mr: 0.6 }} />
                         ) : (
                              <ChevronRightIcon sx={{ color: Colors.primary.main, mr: 0.6 }} />
                         )
                    ) : (
                         <Box sx={{ width: 28 }} />
                    )}
                    <ListItemText
                         primary={
                              <Typography
                                   sx={{
                                        fontSize: level === 0 ? '0.95rem' : '0.9rem',
                                        fontWeight: isActive ? 700 : hasChildren ? 600 : 500,
                                        color: isActive ? Colors.primary.main : Colors.dark,
                                        lineHeight: 1.35,
                                        wordBreak: 'break-word',
                                   }}
                              >
                                   {node.title}
                              </Typography>
                         }
                    />
               </ListItemButton>

               {hasChildren && (
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                         <List disablePadding>
                              {children.map((child) => (
                                   <CategoryTreeItem
                                        key={child.id}
                                        node={child}
                                        level={level + 1}
                                        expandedIds={expandedIds}
                                        onToggle={onToggle}
                                        onNavigate={onNavigate}
                                        forceExpand={forceExpand}
                                        currentPath={currentPath}
                                   />
                              ))}
                         </List>
                    </Collapse>
               )}
          </>
     );
};

// Cache the fetched navigation data across re-renders (module-level singleton)
let cachedPanels: CategoryNode[] | null = null;
let fetchPromise: Promise<CategoryNode[]> | null = null;

async function fetchCategoryPanels(): Promise<CategoryNode[]> {
     if (cachedPanels) return cachedPanels;
     if (fetchPromise) return fetchPromise;

     fetchPromise = fetch('/api/navigation/categories')
          .then((res) => {
               if (!res.ok) throw new Error('Failed to fetch categories');
               return res.json();
          })
          .then((data: CategoryNode[]) => {
               cachedPanels = data;
               return data;
          })
          .catch((err) => {
               console.error('Category navigation fetch error:', err);
               fetchPromise = null;
               return [];
          });

     return fetchPromise;
}

const STORAGE_KEY = 'category-nav-expanded';

function getPersistedExpandedIds(): Set<string> {
     if (typeof window === 'undefined') return new Set();
     try {
          const stored = sessionStorage.getItem(STORAGE_KEY);
          if (stored) return new Set(JSON.parse(stored));
     } catch { }
     return new Set();
}

function persistExpandedIds(ids: Set<string>) {
     try {
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(ids)));
     } catch { }
}

export default function ProductsAllCategories({ onCategoryNavigate }: ProductsAllCategoriesProps) {
     const router = useRouter();
     const pathname = usePathname();
     const [searchTerm, setSearchTerm] = React.useState('');
     const [expandedIds, setExpandedIds] = React.useState<Set<string>>(getPersistedExpandedIds);
     const [categoryData, setCategoryData] = React.useState<CategoryNode[]>(cachedPanels || []);
     const [loading, setLoading] = React.useState(!cachedPanels);

     React.useEffect(() => {
          if (cachedPanels) {
               setCategoryData(cachedPanels);
               setLoading(false);
               return;
          }
          fetchCategoryPanels().then((data) => {
               setCategoryData(data);
               setLoading(false);
          });
     }, []);

     const filteredCategories = React.useMemo(
          () => filterTree(categoryData, searchTerm),
          [categoryData, searchTerm]
     );

     const hasSearch = searchTerm.trim().length > 0;

     const handleToggle = (id: string) => {
          setExpandedIds((prev) => {
               const next = new Set(prev);
               if (next.has(id)) {
                    next.delete(id);
               } else {
                    next.add(id);
               }
               persistExpandedIds(next);
               return next;
          });
     };

     const handleNavigate = (link?: string) => {
          if (!link) return;
          onCategoryNavigate?.();
          router.push(link);
     };

     return (
          <Box sx={{ p: 1.2 }}>
               <TextField
                    fullWidth
                    size="small"
                    placeholder="Pretraži kategorije"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                         startAdornment: (
                              <InputAdornment position="start">
                                   <SearchIcon fontSize="small" sx={{ color: Colors.dim_grey }} />
                              </InputAdornment>
                         ),
                    }}
                    sx={{
                         mb: 1.2,
                         '& .MuiOutlinedInput-root': {
                              borderRadius: 1.5,
                         },
                    }}
               />

               <Box
                    sx={{
                         height: { xs: 320, md: 460 },
                         overflowY: 'auto',
                         overflowX: 'hidden',
                         scrollbarGutter: 'stable',
                         pr: 0.4,
                         '&::-webkit-scrollbar': {
                              width: '8px',
                         },
                         '&::-webkit-scrollbar-track': {
                              background: 'transparent',
                         },
                         '&::-webkit-scrollbar-thumb': {
                              background: 'transparent',
                              borderRadius: '999px',
                         },
                         '&:hover::-webkit-scrollbar-thumb, &:focus-within::-webkit-scrollbar-thumb': {
                              background: Colors.neutral[400],
                         },
                    }}
               >
                    {loading ? (
                         <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                              <CircularProgress size={28} color="primary" />
                         </Box>
                    ) : filteredCategories.length === 0 ? (
                         <Typography sx={{ px: 1, py: 1.5, color: Colors.dim_grey, fontSize: '0.9rem' }}>
                              Nema rezultata za unetu kategoriju.
                         </Typography>
                    ) : (
                         <List disablePadding>
                              {filteredCategories.map((node) => (
                                   <CategoryTreeItem
                                        key={node.id}
                                        node={node}
                                        level={0}
                                        expandedIds={expandedIds}
                                        onToggle={handleToggle}
                                        onNavigate={handleNavigate}
                                        forceExpand={hasSearch}
                                        currentPath={pathname}
                                   />
                              ))}
                         </List>
                    )}
               </Box>
          </Box>
     );
}
