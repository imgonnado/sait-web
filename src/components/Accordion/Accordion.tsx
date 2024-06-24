import React from "react";
import clsx from "clsx";

import Text from "../Typography/Text";

import styles from "./Accordion.module.scss";

interface AccordionProps {
  children: React.ReactElement[] | React.ReactElement;
}

interface AccordionItemProps {
  index: number;
  expandedIndex: number;

  children: React.ReactNode;
}

interface AccordionHeadingProps {
  type: string;
  title: string;
  date: string;
  handleClick: (index: number) => void;
  index: number;
}

interface AccordionPanelProps {
  children: React.ReactNode;
}

function AccordionHeading({
  type,
  title,
  date,
  index,
  handleClick,
}: AccordionHeadingProps) {
  return (
    <div
      role="button"
      className={styles.accordionHeading}
      onClick={() => handleClick(index)}
      tabIndex={0}
      onKeyDown={() => handleClick(index)}
    >
      {type && (
        <Text as="span" size="md" fw="medium" color="primary">
          [{type}]
        </Text>
      )}
      {title}
      <div className={styles.accordionDate}>{date}</div>
    </div>
  );
}

function AccordionPanel({ children }: AccordionPanelProps) {
  return (
    <section className={styles.accordionPanel}>
      <div className={styles.accordionContent}>{children}</div>
    </section>
  );
}

function AccordionItem({ index, expandedIndex, children }: AccordionItemProps) {
  return (
    <div
      className={clsx(
        styles.accordionItem,
        expandedIndex === index && styles.expanded
      )}
    >
      {children}
    </div>
  );
}

function Accordion({ children }: AccordionProps) {
  return <div className="accordion">{children}</div>;
}

Accordion.Item = AccordionItem;
Accordion.Heading = AccordionHeading;
Accordion.Panel = AccordionPanel;

export default Accordion;
