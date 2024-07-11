import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
import { languages } from "@/i18n/settings";

interface FooterBaseProps {
  t: (key: string, options?: Record<string, unknown>) => string;
  lng: string;
}

export const FooterBase = ({ t, lng }: Readonly<FooterBaseProps>) => {
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans
        i18nKey="languageSwitcher"
        t={t}
        components={{ bold: <span className="test" /> }}
      />
      <span className="test">test</span>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};
