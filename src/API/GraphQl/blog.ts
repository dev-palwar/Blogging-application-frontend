import { gql } from "@apollo/client";

export const AllBlogs = gql`
  query GetAllBlogs {
    blogs: getAllBlogs {
      id
      title
      description
      poster
      category
      createdAt
      Author {
        id
        name
        avatar
      }
    }
  }
`;

export const getBlog = gql`
  query FindBlog($input: ID) {
    blog: findBlog(input: $input) {
      id
      poster
      title
      description
      createdAt
      Author {
        id
        avatar
        name
      }
      category
      tags
      upvotes {
        user {
          id
          name
        }
      }
    }
  }
`;

export const upvotingBlog = gql`
  mutation UpvoteOrUnvoteBlog($blogId: ID!) {
    upvoted: upvoteOrUnvoteBlog(blogId: $blogId)
  }
`;

export const addBlog = gql`
  mutation CreateBlog($input: BlogInput!) {
    createBlog(input: $input) {
      id
      title
      description
      category
    }
  }
`;
