import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Text,
} from 'react-native';
import Video, {OnVideoErrorData} from 'react-native-video';
import {useState} from 'react';

const {width, height} = Dimensions.get('screen');

const URL =
  'https://d1249b47aalla0.cloudfront.net/pictures/41/726/41726322/5ynk7fyup8pf8t5gr7/video/low/10030395362/vid.m3u8';

function App(): React.JSX.Element {
  const [error, setError] = useState<null | OnVideoErrorData>(null);

  const onErrorHandler = (e: OnVideoErrorData) => setError(e);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Video
          source={{
            uri: URL,
          }}
          renderLoader={
            <ActivityIndicator size={'large'} style={styles.loaderContainer} />
          }
          onError={onErrorHandler}
          style={styles.video}
        />
        {error && <Text style={styles.errorText}>{JSON.stringify(error)}</Text>}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  video: {
    width: width,
    height: height * 0.5,
    backgroundColor: 'black',
  },
  loaderContainer: {
    flex: 1,
  },
  errorText: {
    fontSize: 20,
    color: 'black',
  },
});

export default App;
