'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { getBlogPreviewSummary } from '@/app/actions';
import type { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleHover = async () => {
    setIsHovering(true);
    if (!summary && !isLoading) {
      setIsLoading(true);
      const result = await getBlogPreviewSummary({ blogPreviewContent: post.content });
      setSummary(result.summary);
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      onHoverStart={() => {
        handleHover();
        setIsFlipped(true);
      }}
      onHoverEnd={() => {
        setIsFlipped(false);
        setIsHovering(false);
      }}
      className="perspective h-80 w-full"
    >
      <motion.div
        className="relative h-full w-full transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <Card className="absolute flex h-full w-full flex-col backface-hidden overflow-hidden bg-card/50 backdrop-blur-sm">
          <div className="relative h-2/3 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint="technology blog"
            />
          </div>
          <div className="flex flex-grow flex-col justify-between p-4">
            <h3 className="font-semibold">{post.title}</h3>
            <Badge variant="secondary" className="w-fit">{post.category}</Badge>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute flex h-full w-full flex-col justify-center rotate-y-180 backface-hidden p-6 bg-card/80 backdrop-blur-md">
          <div className="text-sm text-muted-foreground">
            {isLoading && !summary && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            )}
            {summary}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
