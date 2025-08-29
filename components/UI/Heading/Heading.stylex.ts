import * as stylex from "@stylexjs/stylex";
import { colors, text } from "../../../app/globalTokens.stylex";

export const baseStyles = stylex.create({
    heading: {
        fontSize: text.p,
        fontWeight: 700,
    },

    large: { fontSize: text.h2 },
    small: { fontSize: text.sm },

    secondary: {
        color: `rgba(${colors.textSecondaryR}, ${colors.textSecondaryG}, ${colors.textSecondaryB}, 1)`,
    },
});
