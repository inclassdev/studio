'use client';

import { useState, useMemo } from 'react';
import { blogPosts } from '@/data/content';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import BlogCard from './blog-card';
import { Skeleton } from './ui/skeleton';
import type { BlogPost } from '@/lib/types';
import BlogModal from './blog-modal';

const categories = ['All', 'Tech', 'Design', 'Life', 'AI'];

export default function BlogContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Simulate loading
  useState(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  });

  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter((post) => filter === 'All' || post.category === filter)
      .filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, filter]);

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full pl-10"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'secondary'}
              onClick={() => setFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {(loading ? Array(6).fill(0) : filteredPosts).map((post, index) => 
          loading ? (
            <div key={index} className="h-80 w-full">
              <Skeleton className="h-full w-full" />
            </div>
          ) : (
            <BlogCard key={post.id} post={post} onReadMore={() => setSelectedPost(post)} />
          )
        )}
      </div>
      {!loading && filteredPosts.length === 0 && (
        <div className="mt-16 text-center text-muted-foreground">
          <p>No articles found. Try a different search or filter.</p>
        </div>
      )}
      <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  );
}
