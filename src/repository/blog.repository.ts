import {BaseRepository} from './base/base.repository';
import {getRepository} from 'typeorm';
import {BlogEntity} from './entity/blog.entity';

export class BlogRepository extends BaseRepository<BlogEntity> {

    constructor() {
        super(getRepository(BlogEntity));
    }


}