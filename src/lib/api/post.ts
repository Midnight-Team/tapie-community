import axios, { AxiosError } from "axios";
import client from "./client";
import type { Post } from "@/types/post";

export async function getPosts(params?: {
  page?: number;
  limit?: number;
  [key: string]: any;
}): Promise<Post[]> {
  try {
    const response = await client.get<Post[]>("/board/posts", { params });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const msg =
          (error.response.data as any).message ||
          "게시글 목록을 가져오지 못했습니다.";
        throw new Error(msg);
      } else if (error.request) {
        console.error("요청에 대한 응답 없음:", error.request);
        throw new Error("서버로부터 응답을 받지 못했습니다.");
      }
    }
    console.error("에러 발생:", error);
    throw new Error("네트워크 오류로 게시글 목록을 불러올 수 없습니다.");
  }
}

export async function getPost(postId: number | string): Promise<Post> {
  try {
    const response = await client.get<Post>(`/board/posts/${postId}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const msg =
          (error.response.data as any).message ||
          "게시글을 가져오지 못했습니다.";
        throw new Error(msg);
      } else if (error.request) {
        console.error("요청에 대한 응답 없음:", error.request);
        throw new Error("서버로부터 응답을 받지 못했습니다.");
      }
    }
    console.error("에러 발생:", error);
    throw new Error("네트워크 오류로 게시글을 불러올 수 없습니다.");
  }
}

export async function updatePost(
  postId: number | string,
  data: Partial<Post>
): Promise<Post> {
  try {
    const response = await client.put<Post>(`/board/posts/${postId}`, data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const msg =
          (error.response.data as any).message ||
          "게시글을 업데이트하지 못했습니다.";
        throw new Error(msg);
      } else if (error.request) {
        console.error("요청에 대한 응답 없음:", error.request);
        throw new Error("서버로부터 응답을 받지 못했습니다.");
      }
    }
    console.error("에러 발생:", error);
    throw new Error("네트워크 오류로 게시글을 업데이트할 수 없습니다.");
  }
}

export async function deletePost(postId: number | string): Promise<void> {
  try {
    await client.delete<void>(`/board/posts/${postId}`);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const msg =
          (error.response.data as any).message ||
          "게시글을 삭제하지 못했습니다.";
        throw new Error(msg);
      } else if (error.request) {
        console.error("요청에 대한 응답 없음:", error.request);
        throw new Error("서버로부터 응답을 받지 못했습니다.");
      }
    }
    console.error("에러 발생:", error);
    throw new Error("네트워크 오류로 게시글을 삭제할 수 없습니다.");
  }
}

export async function createPost(data: Partial<Post>): Promise<Post> {
  try {
    const response = await client.post<Post>("/board/posts", data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const msg =
          (error.response.data as any).message ||
          "게시글을 생성하지 못했습니다.";
        throw new Error(msg);
      } else if (error.request) {
        console.error("요청에 대한 응답 없음:", error.request);
        throw new Error("서버로부터 응답을 받지 못했습니다.");
      }
    }
    console.error("에러 발생:", error);
    throw new Error("네트워크 오류로 게시글을 생성할 수 없습니다.");
  }
}
