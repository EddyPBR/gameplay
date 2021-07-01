import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type BackgroundProps = {
  children: ReactNode;
};

export function Background({ children }: BackgroundProps) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
