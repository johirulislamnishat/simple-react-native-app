import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.regular,
  fontSize: 16,
  color: colors.white,
};
const BASE_SEMIBOLD = {
  fontFamily: typography.medium,

  color: colors.white,
};
const BASE_MEDIUM = {
  fontFamily: typography.semiBold,

  color: colors.white,
};
const BASE_BOLD = {
  fontFamily: typography.bold,

  color: colors.white,
};

export const presets = {
  default: BASE,
  bold: BASE_BOLD,
  h1: {
    ...BASE_BOLD,
    fontSize: 32,
  },
  h2: {
    ...BASE_BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_MEDIUM,
    fontSize: 24,
  },
  h4: {
    ...BASE_SEMIBOLD,
    fontSize: 20,
  },
  h5: {
    ...BASE_SEMIBOLD,
    fontSize: 16,
  },
  paragraph: {
    ...BASE,
    fontSize: 16,
  },
  small: {
    ...BASE,
    fontSize: 14,
  },
};
