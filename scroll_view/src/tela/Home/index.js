import { View, ScrollView, Text, Image } from 'react-native';
import { styles } from './styles'

export default function Home() {

  const produtos = [
    {
      id: 1,
      desc: 'Produto em ótimo estado, funcionando perfeitamente e com pouco tempo de uso.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZ89OOEwNJz9iqgyjORVR54DnE_xpB4UMVQ&s',
    },
    {
      id: 2,
      desc: 'Item seminovo, bem conservado, ideal para quem busca qualidade com bom custo-benefício.',
      img: 'https://imgs.search.brave.com/8t2lglVchP5445dcmjm1k8TcYVS0PIVarEk3guNytW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZmFp/bXEudnRleGFzc2V0/cy5jb20vYXJxdWl2/b3MvaWRzLzE2OTg4/Ni0zMDAtMzAwP3Y9/NjM5MDI2MzUwMTUw/MjcwMDAwJndpZHRo/PTMwMCZoZWlnaHQ9/MzAwJmFzcGVjdD10/cnVl',
    },
    {
      id: 3,
      desc: 'Produto com excelente desempenho, pronto para uso imediato, sem necessidade de ajustes.',
      img:'https://imgs.search.brave.com/bt8ZiELEJPwqfCSh2LCYlmBJFRYkcdyr8VK5iCOfE1k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF2YW4uY29tLmJy/L21lZGlhL2NhdGFs/b2cvcHJvZHVjdC9j/YWNoZS9iMjNlNTMw/NGQxMWRmZjAwNzUw/YzNlOTJlNGIwMzhm/YS9jL2UvY2VsdWxh/ci1zYW1zdW5nLWdh/bGF4eS1zMjUtZmUt/NWctMTI4Z2ItOGdi/LWNhbWVyYS10cmlw/bGFfMTIyNjI4MS5q/cGc',
    },
    {
      id: 4,
      desc: 'Item em bom estado geral, com pequenas marcas de uso que não afetam o funcionamento.',
      img: 'https://imgs.search.brave.com/DobEHxuB89NVxriSrlUm2QStE5njXm8UyZG0R2yaZ4M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFkakRIWTVCbkwu/anBn',
    },
  ];

  return(
    <View style={styles.container}>

      <Text style={styles.titulo}>Anuncios</Text>

      <ScrollView horizontal={true}>
        {produtos.map((item) => (
          <View key={item.id} style={styles.box}>
            
            <Image
                source={{ uri: item.img }}
                style={styles.imagem}
            />

            <Text style={styles.texto}>{item.desc}</Text>
          </View>
        ))}
      </ScrollView>

    </View>
  )
}