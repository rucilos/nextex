import * as stylex from "@stylexjs/stylex";
import { baseStyles } from "./Footer.stylex";
import Text from "@/components/UI/Text/Text";
import Flex from "@/components/UI/Flex/Flex";

type FooterProps = {
    as?: "div" | "footer";
};

const Footer = ({ as = "div" }: FooterProps) => {
    const Component = as;

    return (
        <Component role="contentinfo" {...stylex.props(baseStyles.footer)}>
            <Flex gap={1} wrap="wrap" align="center" justify="center">
                <Text size="small" color="secondary">
                    Ruciloss &copy; {new Date().getFullYear()}
                </Text>
                <Text size="small" color="secondary">
                    &bull;
                </Text>
                <Text size="small" color="secondary">
                    License MIT
                </Text>
                <Text size="small" color="secondary">
                    &bull;
                </Text>
                <Text size="small" color="secondary">
                    v1.0.0
                </Text>
            </Flex>
        </Component>
    );
};

export default Footer;
