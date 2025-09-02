'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { BlogPost } from '@/lib/types';
import { Button } from './ui/button';

interface BlogCardProps {
  post: BlogPost;
  onReadMore: () => void;
}

export default function BlogCard({ post, onReadMore }: BlogCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden bg-card/50 shadow-lg backdrop-blur-sm transition-all hover:shadow-primary/20">
      <CardHeader>
        <div className="relative aspect-video w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="rounded-md object-cover"
            data-ai-hint="technology blog"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle>{post.title}</CardTitle>
        <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="secondary">{post.category}</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onReadMore} className="w-full">Read More</Button>
      </CardFooter>
    </Card>
  );
}
