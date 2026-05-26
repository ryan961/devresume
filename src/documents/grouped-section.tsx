import { Text, View } from "@react-pdf/renderer";
import { Section } from "./section";
import { HStack, VStack } from "./stack";
import { RichText } from "./rich-text";
import { ReactNode } from "react";
import { Theme } from "./theme";

type GroupItemProps = {
  title?: string;
  description?: string;
};

export function GroupItem({ title, description }: GroupItemProps) {
  return (
    <HStack style={{ alignItems: "flex-start" }}>
      {title && (
        <Text style={{ flex: 0.6, fontWeight: "medium" }}>{title}</Text>
      )}

      {description && (
        <View
          style={{
            flex: 1,
            display: "flex",
          }}
        >
          <RichText>{description}</RichText>
        </View>
      )}
    </HStack>
  );
}

//

type EventSectionProps = {
  title: string;
  children: ReactNode;
  theme: Theme;
  gap?: number;
};

export function GroupedSection({
  title,
  children,
  theme,
  gap = theme.space[7],
}: EventSectionProps) {
  return (
    <Section theme={theme} title={title}>
      <VStack gap={gap}>{children}</VStack>
    </Section>
  );
}
