import * as S from './styles'

export type Props = {
  active?: boolean
}

const FiltroCard = (props: Props) => (
  <S.Card active={props.active}>
    <S.Contador>3</S.Contador>
    <S.Label>pendentes</S.Label>
  </S.Card>
)

export default FiltroCard
