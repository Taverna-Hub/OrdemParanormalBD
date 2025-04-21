import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../../components/Navigation';
import { Input } from '../../../components/Input';
import { useQuery } from '@tanstack/react-query';
import {
  Element,
  ElementService,
} from '../../../services/http/elements/ElementService';

export function Elements() {
  const { data: elements } = useQuery({
    queryKey: ['elements'],
    queryFn: () => ElementService.findAll(),
  });

  return (
    <S.Wrapper>
      <Helmet title="Elementos" />

      <h1>Elementos</h1>

      <S.SearchInterface>
        <Input placeholder="Procure um elemento..." />
      </S.SearchInterface>

      <S.TableContainer>
        <div>
          <h2>Elementos</h2>
        </div>
        <S.Table>
          <S.TableHead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Vantagem</th>
            </tr>
          </S.TableHead>
          <tbody>
            {elements?.map((element: Element, index: number) => {
              return (
                <S.TableRow>
                  <td>
                    <span>{index + 1}</span>
                  </td>
                  <td>
                    <p>{element.name}</p>
                  </td>
                  <td>
                    <p>{element.desciption}</p>
                  </td>
                  <td>
                    <p>{element.vantagem}</p>
                  </td>
                </S.TableRow>
              );
            })}
          </tbody>
        </S.Table>
      </S.TableContainer>

      <Navigation />
    </S.Wrapper>
  );
}
