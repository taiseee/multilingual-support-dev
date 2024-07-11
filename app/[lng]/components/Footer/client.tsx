"use client";

import { FooterBase } from "./FooterBase";
import { useTranslation } from "@/i18n/client";

interface FooterProps {
  lng: string;
}

export const Footer = ({ lng }: Readonly<FooterProps>) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} />;
};
