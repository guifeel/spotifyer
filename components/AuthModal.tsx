import React, { useEffect } from "react";
import Modal from "./Modal";
import { Auth } from "@supabase/auth-ui-react";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen } = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Modal
      title="欢迎回来"
      description="登陆你的帐户"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        magicLink
        providers={["github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
        localization={{
          variables: {
            sign_in: {
              email_label: "邮箱",
              password_label: "密码",
              email_input_placeholder: "请输入你的邮箱",
              password_input_placeholder: "请输入你的密码",
              button_label: "登陆",
              loading_button_label: "登陆中",
              link_text: "还没有账号，注册？",
              social_provider_text: "通过{{provider}}登陆",
            },
            sign_up: {
              email_label: "邮箱",
              password_label: "密码",
              email_input_placeholder: "请输入你的邮箱",
              password_input_placeholder: "请输入你的密码",
              button_label: "登陆",
              loading_button_label: "注册中",
              link_text: "已经有了账号，登陆？",
              social_provider_text: "通过{{provider}}注册",
            },
            forgotten_password: {
              email_label: "邮箱",
              email_input_placeholder: "请输入你的邮箱",
              button_label: "发送重置邮件",
              link_text: "忘记密码",
            },
            magic_link: {
              email_input_label: "邮箱",
              email_input_placeholder: "请输入你的邮箱",
              button_label: "通过邮箱激活",
              link_text: "通过邮箱激活",
              loading_button_label: "邮件发送成功，请去邮箱激活...",
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
