export class GetPostsParams{
    constructor(public token: String){}
}

export class GetPostResponseDto{
    constructor(
        public id: String,
        public author: String,
        public title: String,
        public description: String,
        public votes: String,
        public created_at: String,
        public created_by: String,
        public updated_at: String,
        public updated_by: String
    ){}
}

export class GetPostsResponseDto{
    constructor(
        public posts: Array<GetPostResponseDto>
    ){}
}