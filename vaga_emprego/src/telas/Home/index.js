import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

export default function Home() {

const vagas = [
  { 
    id: 1, titulo: 'Backend', salario: 'R$ 3000', descricao: 'Lorem ipsum dolor sit amet. Hic omnis placeat hic sint asperiores qui sunt voluptate quo blanditiis architecto At quos alias est voluptatibus minus! Et rerum doloremque vel quis voluptatum aut aspernatur minus vel voluptas iure ab dolor obcaecati ', contato: 'fulano1@gmail.com' 
  },
  { 
    id: 2, titulo: 'Dados', salario: 'R$ 3000', descricao: 'Lorem ipsum dolor sit amet. Hic omnis placeat hic sint asperiores qui sunt voluptate quo blanditiis architecto At quos alias est voluptatibus minus! Et rerum doloremque vel quis voluptatum aut aspernatur minus vel voluptas iure ab dolor obcaecati ', contato: 'fulano3@gmail.com' 
  },
  { 
    id: 3, titulo: 'Frontend', salario: 'R$ 2500', descricao: 'Lorem ipsum dolor sit amet. Hic omnis placeat hic sint asperiores qui sunt voluptate quo blanditiis architecto At quos alias est voluptatibus minus! Et rerum doloremque vel quis voluptatum aut aspernatur minus vel voluptas iure ab dolor obcaecati ', contato: 'fulano4@gmail.com' 
  },
  { 
    id: 4, titulo: 'DevOps', salario: 'R$ 4000', descricao: 'Lorem ipsum dolor sit amet. Hic omnis placeat hic sint asperiores qui sunt voluptate quo blanditiis architecto At quos alias est voluptatibus minus! Et rerum doloremque vel quis voluptatum aut aspernatur minus vel voluptas iure ab dolor obcaecati ', contato: 'fulano5@gmail.com'
  },
  { 
    id: 5, titulo: 'QA', salario: 'R$ 2000', descricao: 'Lorem ipsum dolor sit amet. Hic omnis placeat hic sint asperiores qui sunt voluptate quo blanditiis architecto At quos alias est voluptatibus minus! Et rerum doloremque vel quis voluptatum aut aspernatur minus vel voluptas iure ab dolor obcaecati ', contato: 'fulano6@gmail.com' 
  },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Vagas</Text>

      <ScrollView style={{ flex: 1 }}>
        {vagas.map((vagas) => (

          <View key={vagas.id} style={styles.card}>
            <Text style={styles.nome}>{vagas.titulo}</Text>
            <Text>Salário: {vagas.salario}</Text>
            <Text>Descrição: {vagas.descricao}</Text>
            <Text>Contato: {vagas.contato}</Text>
          </View>
          
        ))}
      </ScrollView>

    </View>
  )
}