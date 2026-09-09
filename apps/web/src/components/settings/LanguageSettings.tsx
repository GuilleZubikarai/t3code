import { t } from "../../i18n/t";
import {
  isLocalePreference,
  setLocalePreference,
  useLocalePreference,
  type LocalePreference,
} from "../../i18n/locale";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "../ui/select";
import { SettingsRow, SettingsSection } from "./settingsLayout";
import { searchableSetting } from "./settingsSearch";

const LOCALE_LABELS: Readonly<Record<LocalePreference, string>> = {
  system: "System",
  en: "English",
  es: "Español",
};

export function LanguageSettingsSection() {
  const preference = useLocalePreference();
  return (
    <SettingsSection id="language" title={t("Language")}>
      <SettingsRow
        {...searchableSetting("app-language")}
        description={t("Interface language. System follows your browser or operating system.")}
        control={
          <Select
            value={preference}
            onValueChange={(value) => {
              if (typeof value === "string" && isLocalePreference(value)) {
                setLocalePreference(value);
                window.location.reload();
              }
            }}
          >
            <SelectTrigger size="sm" className="w-full sm:w-40" aria-label={t("Language")}>
              <SelectValue>{t(LOCALE_LABELS[preference])}</SelectValue>
            </SelectTrigger>
            <SelectPopup align="end" alignItemWithTrigger={false}>
              {(Object.keys(LOCALE_LABELS) as LocalePreference[]).map((value) => (
                <SelectItem key={value} hideIndicator value={value}>
                  {t(LOCALE_LABELS[value])}
                </SelectItem>
              ))}
            </SelectPopup>
          </Select>
        }
      />
    </SettingsSection>
  );
}
