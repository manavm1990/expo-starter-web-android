import { ThemeProvider, createTheme, lightColors } from '@rneui/themed';
import { Slot } from 'expo-router';
import { Platform, View } from 'react-native';

const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
    }),
  },
});

export default function HomeLayout(): JSX.Element {
  return (
    <ThemeProvider
      // `theme` is not doing anything here as it's default. It could be removed.
      theme={theme}
    >
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 5,
          flexGrow: 1,
          gap: 5,
          marginTop: 25,
        }}
      >
        <Slot />
      </View>
    </ThemeProvider>
  );
}
