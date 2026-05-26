import { describe, expect, test } from "vitest";
import { GroupedSection } from "./grouped-section";
import { createTheme } from "./theme";

describe("GroupedSection", () => {
  test("uses the theme gap by default", () => {
    const theme = createTheme();
    const element = GroupedSection({
      title: "Skills",
      theme,
      children: "content",
    });

    expect(element.props.children.props.gap).toBe(theme.space[7]);
  });

  test("supports overriding the vertical gap", () => {
    const theme = createTheme();
    const element = GroupedSection({
      title: "Skills",
      theme,
      children: "content",
      gap: theme.space[6],
    });

    expect(element.props.children.props.gap).toBe(theme.space[6]);
  });
});
