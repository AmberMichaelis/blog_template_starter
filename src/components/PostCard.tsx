import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { BlogPost } from "../hooks/usePosts";

interface PostCardProps {
    post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={post.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{post.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default PostCard
