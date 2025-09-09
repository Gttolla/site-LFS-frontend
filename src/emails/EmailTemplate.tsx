import { ContactFormInputsProps } from "@/sections/contactFormSection";
import {
  Html,
  Head,
  Body,
  Tailwind,
  Section,
  Text,
  Img,
} from "@react-email/components";
import { ReactNode } from "react";

interface ContactInfoEmailProps {
  data: ContactFormInputsProps;
  children?: ReactNode; // 👈 adiciona suporte para conteúdo dinâmico
}

export default function EmailTemplateEmail({
  data,
  children,
}: ContactInfoEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        {/* 👇 aplica branco como cor padrão para todos os textos */}
        <Body className="font-sans m-0 bg-[#0B150C] text-[#FFFFFF]">
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/godress-28aeb.appspot.com/o/LFS%2FLogo.png?alt=media&token=f3931916-360e-4c06-89d1-e22cb37af5b9"
            alt="Banner"
            width="100%"
            height="200"
            className="object-cover"
          />

          {/* saudação padrão */}
          <Text className="text-left p-4 text-3xl">
            <strong>Olá, </strong>
            <strong className="text-[#56E873]">{data?.name}</strong>
          </Text>

          {/* 👇 aqui entra o conteúdo específico de cada email */}
          <Section className="p-4">{children}</Section>

          {/* rodapé padrão */}
          <Text className="text-left p-4">
            Atenciosamente,
            <br />
            <strong className="text-[#56E873]">
              Equipe LFS – Laboratório Fábrica de Software
            </strong>
          </Text>

          <Section
            style={{
              borderTop: "1px solid #56E873",
              borderBottom: "1px solid #56E873",
              padding: "16px",
            }}
          >
            <table
              width="100%"
              cellPadding={0}
              cellSpacing={0}
              style={{ borderCollapse: "collapse" }}
            >
              <tbody>
                <tr>
                  {/* Coluna da logo */}
                  <td width="60" valign="middle">
                    <Img
                      src="https://firebasestorage.googleapis.com/v0/b/godress-28aeb.appspot.com/o/LFS%2Flogo%20vetor.png?alt=media&token=169f2f64-4c30-4fd6-9005-33b6bf68ea6c"
                      alt="Logo LFS"
                      width={40}
                      height={40}
                      style={{ display: "block", marginLeft: "10px" }}
                    />
                  </td>

                  {/* Coluna do texto */}
                  <td valign="middle" style={{ textAlign: "center" }}>
                    <Text
                      className="text-center"
                      style={{
                        margin: 0,
                        fontSize: "12px",
                        lineHeight: "16px",
                      }}
                    >
                      <strong>Copyright ©2025 LFS inc.</strong>{" "}
                      <span style={{ color: "#56E873" }}>
                        Todos direitos reservados Laboratório Fábrica de
                        Software
                      </span>
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
