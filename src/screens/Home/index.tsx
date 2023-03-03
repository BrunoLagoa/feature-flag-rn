import React from 'react';
import { Text, View } from 'react-native';
import { useFeatureFlag } from 'configcat-react';

import { styles } from './styles';

export default function Home() {
  const { loading, value: shoEventFeatureBanner } = useFeatureFlag(
    'event_feature_banner',
    false
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Home - Feature Flag</Text>

      {shoEventFeatureBanner && <View style={styles.banner} />}
    </View>
  );
}
