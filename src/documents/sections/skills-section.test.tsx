import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { describe, expect, test, vi, beforeEach } from "vitest";
import { createTheme } from "../theme";
import { SkillsSection } from "./skills-section";

type MockedGroupedSectionProps = {
  children: ReactNode;
  gap?: number;
};

const groupedSectionSpy = vi.fn(({ children }: MockedGroupedSectionProps) => (
  <div data-testid="grouped-section">{children}</div>
));

vi.mock("../grouped-section", () => ({
  GroupItem: ({
    title,
    description,
  }: {
    title?: string;
    description?: string;
  }) => <div>{`${title ?? ""}${description ?? ""}`}</div>,
  GroupedSection: (props: MockedGroupedSectionProps) =>
    groupedSectionSpy(props),
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("SkillsSection", () => {
  beforeEach(() => {
    groupedSectionSpy.mockClear();
  });

  test("uses a slightly tighter gap than the default grouped section", () => {
    const theme = createTheme();

    render(
      <SkillsSection
        theme={theme}
        skills={[{ name: "Frontend", keywords: ["React", "TypeScript"] }]}
      />
    );

    expect(groupedSectionSpy).toHaveBeenCalledTimes(1);
    expect(groupedSectionSpy.mock.calls[0][0].gap).toBe(theme.space[6]);
  });
});
