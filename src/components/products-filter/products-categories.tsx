import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Collapse, InputAdornment, List, ListItemButton, ListItemText, TextField } from '@mui/material';
import { Colors } from '@/styles/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import { AccordionPanels } from './all-categories'
import { useRouter } from 'next/router';

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
}) => {
     const children = Array.isArray(node.children) ? node.children : [];
     const hasChildren = children.length > 0;
     const isOpen = forceExpand || expandedIds.has(node.id);

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
                                        fontWeight: hasChildren ? 600 : 500,
                                        color: Colors.dark,
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
                                   />
                              ))}
                         </List>
                    </Collapse>
               )}
          </>
     );
};

export default function ProductsAllCategories() {
     const router = useRouter();
     const [searchTerm, setSearchTerm] = React.useState('');
     const [expandedIds, setExpandedIds] = React.useState<Set<string>>(new Set());

     const categoryData = AccordionPanels as CategoryNode[];
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
               return next;
          });
     };

     const handleNavigate = (link?: string) => {
          if (!link) return;
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

               {filteredCategories.length === 0 ? (
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
                              />
                         ))}
                    </List>
               )}
          </Box>
     )
}
