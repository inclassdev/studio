'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { getBlogSummary } from '@/app/actions';
import type { BlogPost } from '@/lib/types';
import { ScrollArea } from './ui/scroll-area';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export default function BlogModal({ post, onClose }: BlogModalProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (post && !summary) {
      setIsLoading(true);
      getBlogSummary({ blogContent: post.content })
        .then(result => {
          setSummary(result.summary);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (!post) {
      // Reset summary when modal is closed
      setSummary(null);
    }
  }, [post, summary]);

  return (
    <Dialog open={!!post} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-3xl bg-card/80 backdrop-blur-xl">
        {post && (
          <ScrollArea className="max-h-[80vh]">
            <div className="p-6">
              <DialogHeader>
                <div className="relative mb-4 aspect-video w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="rounded-lg object-cover"
                    data-ai-hint="technology blog"
                  />
                </div>
                <DialogTitle className="text-3xl font-bold">{post.title}</DialogTitle>
                <div className="mt-2">
                  <Badge variant="secondary">{post.category}</Badge>
                </div>
              </DialogHeader>
              <div className="mt-6">
                <h3 className="mb-2 text-xl font-semibold">Summary</h3>
                <div className="text-muted-foreground">
                  {isLoading ? (
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  ) : (
                    <p>{summary}</p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="mb-2 text-xl font-semibold">Full Post</h3>
                <p className="whitespace-pre-wrap text-muted-foreground">{post.content}</p>
              </div>
            </div>
          </ScrollArea>
        )}
      </DialogContent>
    </Dialog>
  );
}
