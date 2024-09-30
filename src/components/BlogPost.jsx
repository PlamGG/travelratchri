import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, ThumbsUp } from "lucide-react";

const BlogPost = ({ post }) => {
  return (
    <Link to={`/article/${post.id}`} className="block">
      <Card className="overflow-hidden transition-shadow hover:shadow-lg cursor-pointer">
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{post.content.substring(0, 100)}...</p>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Posted on: {post.date}</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">{post.category}</span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <Button variant="outline" size="sm">Read More</Button>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                <ThumbsUp className="h-4 w-4 mr-1" />
                Like
              </Button>
              <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPost;
