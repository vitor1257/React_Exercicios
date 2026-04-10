import { Image } from 'react-native'
import { styles } from './styles';

function Charada() {  
    let img = 'https://static.wikia.nocookie.net/batman/images/3/32/Charada.png/revision/latest/scale-to-width-down/265?cb=20150430140527&path-prefix=pt-br';

    return(
        <Image
        source={{ uri: img }}
        style={styles.imagem}
      />
    )
}
export default Charada

  