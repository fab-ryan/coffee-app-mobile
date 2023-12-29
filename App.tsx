import Navigation from '@navigation';
import useCachedResources from './src/hooks/useCachedResources';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useColorScheme from '@hooks/useColorScheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme(); 
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar  animated={true}  backgroundColor='transparent'/>
        <Navigation colorScheme={colorScheme}/>
      </SafeAreaProvider>
    );
  }
}
