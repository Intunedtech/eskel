// @ts-nocheck
import * as AccordionRadix from '@radix-ui/react-accordion';
import React from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import styles from './styles.module.css';

export const Accordion = () => (
    <AccordionRadix.Root className={styles.AccordionRoot} type="single" defaultValue="item-1" collapsible>
        <AccordionRadix.Item className={styles.AccordionItem} value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LDB4uaJ87e0?si=WAd7_fyw_rywv5_n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </AccordionContent>
        </AccordionRadix.Item>

        <AccordionRadix.Item className={styles.AccordionItem} value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
        </AccordionRadix.Item>

        <AccordionRadix.Item className={styles.AccordionItem} value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionRadix.Content className="AccordionContent">
                <div className="AccordionContentText">
                    Yes! You can animate the Accordion with CSS or JavaScript.
                </div>
            </AccordionRadix.Content>
        </AccordionRadix.Item>
    </AccordionRadix.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <AccordionRadix.Header className={styles.AccordionHeader}>
        <AccordionRadix.Trigger
            className={classNames(styles.AccordionTrigger, className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
        </AccordionRadix.Trigger>
    </AccordionRadix.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <AccordionRadix.Content
        className={classNames(styles.AccordionContent, className)}
        {...props}
        ref={forwardedRef}
    >
        <div className={styles.AccordionContentText}>{children}</div>
    </AccordionRadix.Content>
));
