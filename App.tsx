import Navigation from '@navigation';
import useCachedResources from './src/hooks/useCachedResources';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useColorScheme from '@hooks/useColorScheme';
import { store } from '@redux/config';
import { Provider } from 'react-redux';
import { CustomToast } from '@components';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <PaperProvider>
            <StatusBar
              animated={true}
              backgroundColor='transparent'
            />

            <CustomToast />
            <Navigation colorScheme={colorScheme} />
          </PaperProvider>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
