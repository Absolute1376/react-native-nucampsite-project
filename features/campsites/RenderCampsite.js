import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';

const RenderCampsite = (props) => {
    const { campsite, onShowModal } = props;

    if (!campsite) {
        return <View />;
    }

    return (
        <Card containerStyle={styles.cardContainer}>
            <Card.Image source={{ uri: baseUrl + campsite.image }}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Text style={[styles.cardText, { position: 'absolute' }]}>
                        {campsite.name}
                    </Text>
                </View>
            </Card.Image>
            <View style={styles.cardRow}>
                <Icon
                    name='heart'
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                />
                <Icon
                    name='pencil'
                    type='font-awesome'
                    color='#5637DD'
                    raised
                    reverse
                    onPress={onShowModal}
                />
                <Text style={styles.cardText}>
                    {campsite.name}
                </Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    marginBottom: 20,
  },
  cardRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  cardText: {
    color: 'white',
    fontSize: 20,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
    textAlign: 'center',
  },
});

export default RenderCampsite;