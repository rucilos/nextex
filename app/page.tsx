import type { Metadata } from "next";
import Feed from "@/components/Layout/Feed/Feed";
import Heading from "@/components/UI/Heading/Heading";
import Text from "@/components/UI/Text/Text";
import Footer from "@/components/Layout/Footer/Footer";
import Flex from "@/components/UI/Flex/Flex";

export const metadata: Metadata = {
    title: "NexteX",
    description:
        "A simple template for building modern websites with Next.js & StyleX.",
};

const Homepage = () => {
    return (
        <Feed>
            <Flex direction="column" gap={3}>
                <Heading level={1} size="large">
                    NexteX
                </Heading>
                <Text>
                    A modern Next.js starter template featuring a clean
                    div-based structure and StyleX for styling, designed for
                    fast development and easy customization.
                </Text>
                <Footer />
            </Flex>
        </Feed>
    );
};

export default Homepage;
