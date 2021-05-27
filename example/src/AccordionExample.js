import * as React from "react";
import { Accordion, withTheme, AccordionItem } from "@draftbit/ui";
import Section, { Container } from "./Section";
import { View, Text } from "react-native";

//const fileNames = [first, second, third];

function AccordionExample({ theme }) {
  return (
    <Container style={{ backgroundColor: theme.colors.background }}>
      <Section title="Accordion list with AccordionItem">
        <Accordion
          openColor={"primamry"}
          closedCloser={"secondary"}
          icon={"folder"}
          iconSize={26}
          style={{ fontWeight: "bold" }}
          title={"First"}
          children={
            <>
              <AccordionItem icon={"insert-drive-file"} title={"First file"} />
              <AccordionItem icon={"insert-drive-file"} title={"Second file"} />
            </>
          }
        />
      </Section>
      <Section title="Empty Accodion List">
        <Accordion
          openColor={theme.colors.primary}
          closedCloser={theme.colors.secondary}
          icon={"folder"}
          iconSize={26}
          style={{ fontWeight: "normal" }}
          title={"Second"}
          children={null}
        />
      </Section>
    </Container>
  );
}

export default withTheme(AccordionExample);
