import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { postsProviders } from './posts.provider';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders]
})
export class PostsModule {}
