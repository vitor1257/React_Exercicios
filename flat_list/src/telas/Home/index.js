import { View, Text, FlatList } from 'react-native';
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

      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.titulo}</Text>
            <Text>Salário: {item.salario}</Text>
            <Text>Descrição: {item.descricao}</Text>
            <Text>Contato: {item.contato}</Text>
          </View>
        )}
      />

    </View>
  );
}