import { useDefineApi } from "@/stores/useDefineApi";

// 注册
export const RegisterApi = useDefineApi<
  {
    data: {
      username: string;
      password: string;
    };
  },
  {
    token: string;
  }
>({
  url: "/api/user/signup",
  method: "POST"
});

// 登录
export const LoginApi = useDefineApi<
  {
    data: {
      username: string;
      password: string;
    };
  },
  {
    token: string;
  }
>({
  url: "/api/user/login",
  method: "POST"
});

// 使用 Github 账号登录
export const oAuth2WithGithub = useDefineApi<any, { url: string }>({
  url: "/oauth2/login/github",
  method: "POST"
});

// github callback
export const getGithubUseInfo = useDefineApi<
  {
    data: {
      code: string;
      state: string;
    };
  },
  { token: string }
>({
  url: "/oauth2/callback/github",
  method: "POST"
});
