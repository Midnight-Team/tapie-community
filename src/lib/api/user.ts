import axios, { AxiosError } from "axios";
import client from "./client";
import type { User } from "@/types/user";

export async function getMe(): Promise<User> {
  try {
    const response = await client.get<User>("/auth/me");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const msg =
          (error.response.data as any).message ||
          "유저 정보를 가져오지 못했습니다.";
        throw new Error(msg);
      } else if (error.request) {
        console.error("요청에 대한 응답 없음:", error.request);
        throw new Error("서버로부터 응답을 받지 못했습니다.");
      }
    }
    console.error("에러 발생:", error);
    throw new Error("네트워크 오류로 사용자 정보를 불러올 수 없습니다.");
  }
}

export async function login(credentials: {
  username: string;
  password: string;
}): Promise<User> {
  try {
    await client.post("/auth/login", credentials);
    return await getMe();
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const msg =
          (error.response.data as any).message || "로그인에 실패했습니다.";
        throw new Error(msg);
      } else if (error.request) {
        console.error("요청에 대한 응답 없음:", error.request);
        throw new Error("서버로부터 응답을 받지 못했습니다.");
      }
    }
    console.error("에러 발생:", error);
    throw new Error("네트워크 오류로 로그인할 수 없습니다.");
  }
}

export async function register(data: {
  username: string;
  nickname: string;
  password: string;
}): Promise<User> {
  try {
    await client.post("/auth/register", data);
    return await getMe();
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 422) {
          const validationErrors = error.response.data.detail;
          if (Array.isArray(validationErrors)) {
            const messages = validationErrors
              .map((err) => `${err.loc[1]}: ${err.msg}`)
              .join(", ");
            throw new Error(`입력 값이 올바르지 않습니다: ${messages}`);
          }
        }
        const msg =
          (error.response.data as any).message || "회원가입에 실패했습니다.";
        throw new Error(msg);
      } else if (error.request) {
        console.error("요청에 대한 응답 없음:", error.request);
        throw new Error("서버로부터 응답을 받지 못했습니다.");
      }
    }
    console.error("에러 발생:", error);
    throw new Error("네트워크 오류로 회원가입할 수 없습니다.");
  }
}

export async function logout(): Promise<void> {
  try {
    await client.post("/auth/logout");
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const msg =
          (error.response.data as any).message || "로그아웃에 실패했습니다.";
        throw new Error(msg);
      } else if (error.request) {
        console.error("요청에 대한 응답 없음:", error.request);
        throw new Error("서버로부터 응답을 받지 못했습니다.");
      }
    }
    console.error("에러 발생:", error);
    throw new Error("네트워크 오류로 로그아웃할 수 없습니다.");
  }
}
